
import React, { useState, FormEvent } from 'react';
import { type ContactFormData, type FormField } from '../../../data/contactData/contact.types';
import './ContactForm.css';

interface ContactFormProps extends ContactFormData {
    onSubmit?: (data: Record<string, string>) => void;
    loading?: boolean;
    successMessage?: string;
    errorMessage?: string;
}

const ContactForm: React.FC<ContactFormProps> = ({
    fields,
    submitButtonText = 'SEND MESSAGE',
    formTitle,
    formDescription,
    showLabels = true,
    layout = 'vertical',
    apiEndpoint,
    onSubmit,
    loading = false,
    successMessage,
    errorMessage
}) => {
    const [formData, setFormData] = useState<Record<string, string>>({});
    const [errors, setErrors] = useState<Record<string, string>>({});

    React.useEffect(() => {
        const initialData: Record<string, string> = {};
        fields.forEach(field => {
            if (field.defaultValue) {
                initialData[field.id] = field.defaultValue;
            }
        });
        setFormData(initialData);
    }, [fields]);

    const handleChange = (id: string, value: string) => {
        setFormData(prev => ({ ...prev, [id]: value }));
        if (errors[id]) {
            setErrors(prev => ({ ...prev, [id]: '' }));
        }
    };

    const validateField = (field: FormField, value: string): string => {
        if (field.required && !value.trim()) {
            return `${field.label} is required`;
        }

        if (field.validation === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                return 'Please enter a valid email address';
            }
        }

        if (field.maxLength && value.length > field.maxLength) {
            return `Maximum ${field.maxLength} characters allowed`;
        }

        return '';
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const newErrors: Record<string, string> = {};
        let isValid = true;

        fields.forEach(field => {
            const error = validateField(field, formData[field.id] || '');
            if (error) {
                newErrors[field.id] = error;
                isValid = false;
            }
        });

        setErrors(newErrors);

        if (!isValid) return;
            //هون انا فيني ضيف الapi
        if (apiEndpoint) {
            try {
                const response = await fetch(apiEndpoint, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });

                if (!response.ok) {
                    throw new Error('Failed to submit form');
                }

                const result = await response.json();
                console.log('Form submitted successfully:', result);

                setFormData({});

                if (onSubmit) {
                    onSubmit(formData);
                }
            } catch (error) {
                console.error('Error submitting form:', error);
            }
        } else if (onSubmit) {
            onSubmit(formData);
        }
    };

    const renderField = (field: FormField) => {
        const commonProps = {
            id: field.id,
            name: field.id,
            value: formData[field.id] || '',
            onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
                handleChange(field.id, e.target.value),
            placeholder: field.placeholder,
            required: field.required,
            disabled: field.disabled || loading,
            className: `form-input ${errors[field.id] ? 'error' : ''}`,
        };

        switch (field.type) {
            case 'textarea':
                return (
                    <textarea
                        {...commonProps}
                        rows={field.rows || 4}
                    />
                );

            case 'select':
                return (
                    <select {...commonProps}>
                        <option value="">{field.placeholder || `Select ${field.label}`}</option>
                        {field.options?.map(option => (
                            <option key={option} value={option}>
                                {option}
                            </option>
                        ))}
                    </select>
                );

            default:
                return (
                    <input
                        {...commonProps}
                        type={field.type}
                        maxLength={field.maxLength}
                    />
                );
        }
    };

    return (
        <div className={`contact-form-container ${layout}`}>
            {(formTitle || formDescription) && (
                <div className="form-header">
                    {formTitle && <h2 className="form-title">{formTitle}</h2>}
                    {formDescription && <p className="form-description">{formDescription}</p>}
                </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
                <div className={`form-fields ${layout}`}>
                    {fields.map(field => (
                        <div key={field.id} className="form-field-group">
                            {showLabels && (
                                <label htmlFor={field.id} className="form-label">
                                    {field.label}
                                    {field.required && <span className="required-star"> *</span>}
                                </label>
                            )}
                            {renderField(field)}
                            {errors[field.id] && (
                                <span className="error-message">{errors[field.id]}</span>
                            )}
                        </div>
                    ))}
                </div>

                <button
                    type="submit"
                    className="submit-button"
                    disabled={loading}
                >
                    {loading ? 'SENDING...' : submitButtonText}
                </button>

                {successMessage && (
                    <div className="success-message">{successMessage}</div>
                )}

                {errorMessage && (
                    <div className="error-message">{errorMessage}</div>
                )}
            </form>
        </div>
    );
};

export default ContactForm; 