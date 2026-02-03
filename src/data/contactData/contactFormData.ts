// contactData/contactFormData.ts
export const toursContactForm = {
    formTitle: "Inquire About Tours",
    formDescription: "Have questions about our tours? Send us a message",
    fields: [
        {
            id: 'name',
            name: 'name',
            label: 'Name',
            type: 'text' as const,
            placeholder: 'Your full name',
            required: true,
        },
        {
            id: 'email',
            name: 'email',
            label: 'Email',
            type: 'email' as const,
            placeholder: 'your.email@example.com',
            required: true,
        },
        {
            id: 'message',
            name: 'message',
            label: 'Message',
            type: 'textarea' as const,
            placeholder: 'Tell us how we can help you...',
            rows: 5,
            required: true,
            maxLength: 1000,
        },
    ],
    submitButtonText: 'SEND MESSAGE',
    layout: 'vertical' as const,
    apiEndpoint: '/api/tours-inquiry',
} 

export const contactForms = {
    tours: toursContactForm,
    // فيني ضيف هون
} as const;