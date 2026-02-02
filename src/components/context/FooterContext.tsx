// context/FooterContext.tsx
import React, { createContext, useContext, useState, useEffect } from 'react';
import type { ReactNode } from 'react';
import type { FooterData, FooterState } from '../../data/footer.types';

interface FooterContextType {
    data: FooterData;
    loading: boolean;
    error: string | null;
    updateFooter: (data: Partial<FooterData>) => void;
    refetchFooter: () => Promise<void>;
}

const FooterContext = createContext<FooterContextType | undefined>(undefined);

export const useFooterContext = (): FooterContextType => {
    const context = useContext(FooterContext);
    if (!context) {
        throw new Error('useFooterContext must be used within FooterProvider');
    }
    return context;
};

interface FooterProviderProps {
    children: ReactNode;
    initialData?: FooterData;
    apiUrl?: string;
}

const defaultFooterData: FooterData = {
    title: "Experience the magic of Socotra Island with our expertly curated tours and adventures.",
    buttonText: "Discover Socotra's Magic",
    buttonUrl: "/tours",
    contact: {
        phone: "+1 234 567 890",
        email: "info@socotranights.com",
        phoneLabel: "Call us",
        emailLabel: "Email us"
    },
    socialLinks: [
        { platform: 'facebook', url: 'https://facebook.com', ariaLabel: 'Visit our Facebook page' },
        { platform: 'instagram', url: 'https://instagram.com', ariaLabel: 'Visit our Instagram page' },
        { platform: 'twitter', url: 'https://twitter.com', ariaLabel: 'Visit our Twitter page' },
    ],
    copyrightText: `© ${new Date().getFullYear()} Socotra Nights. All rights reserved.`,
    links: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        developer: "Developed by Techific",
        termsUrl: "/terms",
        privacyUrl: "/privacy"
    }
};

export const FooterProvider: React.FC<FooterProviderProps> = ({
    children,
    initialData,
    apiUrl
}) => {
    const [state, setState] = useState<FooterState>({
        data: initialData || null,
        loading: !initialData,
        error: null,
        lastUpdated: null
    });

    const fetchFooterData = async (): Promise<void> => {
        try {
            setState(prev => ({ ...prev, loading: true, error: null }));

            if (apiUrl) {
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
                const data = await response.json();
                setState({
                    data,
                    loading: false,
                    error: null,
                    lastUpdated: new Date().toISOString()
                });
            } else {
                setState({
                    data: initialData || defaultFooterData,
                    loading: false,
                    error: null,
                    lastUpdated: new Date().toISOString()
                });
            }
        } catch (err) {
            setState({
                data: initialData || defaultFooterData,
                loading: false,
                error: err instanceof Error ? err.message : 'Failed to load footer',
                lastUpdated: null
            });
        }
    };

    const updateFooter = (newData: Partial<FooterData>): void => {
        setState(prev => ({
            ...prev,
            data: prev.data ? { ...prev.data, ...newData } : null
        }));
    };

    const refetchFooter = async (): Promise<void> => {
        await fetchFooterData();
    };

    useEffect(() => {
        if (!initialData) {
            fetchFooterData();
        }
    }, []);

    const value: FooterContextType = {
        data: state.data || initialData || defaultFooterData,
        loading: state.loading,
        error: state.error,
        updateFooter,
        refetchFooter
    };

    return (
        <FooterContext.Provider value={value}>
            {children}
        </FooterContext.Provider>
    );
};