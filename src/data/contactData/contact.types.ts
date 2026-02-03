export type InputType = 'text' | 'email' | 'textarea' | 'select' | 'tel' | 'number';
export type ValidationType = 'required' | 'email' | 'phone' | 'custom';

export interface FormField {
    id: string;
    name: string;
    label: string;
    type: InputType;
    placeholder?: string;
    required?: boolean;
    validation?: ValidationType;
    options?: string[]; 
    maxLength?: number;
    rows?: number; 
    disabled?: boolean;
    defaultValue?: string;
}

export interface ContactFormData {
    fields: FormField[];
    submitButtonText?: string;
    formTitle?: string;
    formDescription?: string;
    showLabels?: boolean;
    layout?: 'vertical' | 'horizontal' | 'grid';
    apiEndpoint?: string;
}