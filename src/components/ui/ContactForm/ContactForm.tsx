import './ContactForm.css';
import { useState } from 'react';

const ContactForm = () => {
  // Form state
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  // UI state
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState('');
  interface Errors {
    name?: string;
    email?: string;
    message?: string;
    form?: string;
    [key: string]: string | undefined;
  }
  const [errors, setErrors] = useState<Errors>({});

  // Handle input changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear field error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Validate form
  const validateForm = () => {
    const newErrors: Errors = {};

    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }

    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setLoading(true);
    setSuccess('');

    try {
      const response = await fetch('http://127.0.0.1:8000/api/inquiries', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message
        })
      });

      const data = await response.json();

      if (!response.ok) {
        // Handle validation errors from backend
        if (data.errors) {
          const backendErrors: Errors = {};
          Object.keys(data.errors).forEach(key => {
            backendErrors[key] = data.errors[key][0];
          });
          setErrors(backendErrors);
          throw new Error('Validation failed');
        }
        throw new Error(data.message || 'Something went wrong');
      }

      // Success
      setSuccess('Thank you for your message. We will get back to you soon!');
      setFormData({ name: '', email: '', message: '' });
      
      // Clear success message after 5 seconds
      setTimeout(() => {
        setSuccess('');
      }, 5000);

    } catch (error) {
      console.error('Submission error:', error);
      if (!errors.name && !errors.email && !errors.message) {
        setErrors({ 
          form: (error instanceof Error ? error.message : 'Failed to send message. Please try again.') 
        });
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="contact-form-container">
      <div className="form-header">
        <h2 className="form-title">Get In Touch</h2>
        <p className="form-description">
          Have a question or want to work together? Send us a message and we'll respond as soon as possible.
        </p>
      </div>

      <form className="contact-form" onSubmit={handleSubmit} noValidate>
        <div className="form-fields vertical">
          <div className="form-field-group">
            <label className="form-label" htmlFor="name">
              Name <span className="required-star">*</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className={`form-input ${errors.name ? 'error' : ''}`}
              placeholder="Your full name"
              value={formData.name}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.name && <span className="error-message">{errors.name}</span>}
          </div>

          <div className="form-field-group">
            <label className="form-label" htmlFor="email">
              Email <span className="required-star">*</span>
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className={`form-input ${errors.email ? 'error' : ''}`}
              placeholder="your.email@example.com"
              value={formData.email}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.email && <span className="error-message">{errors.email}</span>}
          </div>

          <div className="form-field-group">
            <label className="form-label" htmlFor="message">
              Message <span className="required-star">*</span>
            </label>
            <textarea
              id="message"
              name="message"
              className={`form-input ${errors.message ? 'error' : ''}`}
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              disabled={loading}
            />
            {errors.message && <span className="error-message">{errors.message}</span>}
          </div>

          {errors.form && (
            <div className="error-message" style={{ textAlign: 'center' }}>
              {errors.form}
            </div>
          )}

          {success && (
            <div className="success-message">
              {success}
            </div>
          )}

          <button 
            type="submit" 
            className="submit-button"
            disabled={loading}
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;