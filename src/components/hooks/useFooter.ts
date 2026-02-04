import { useEffect, useState } from 'react';
import type { FooterData } from '../../data/footer.types';

const defaultFooterData: FooterData = {
    title: "Experience the magic of Socotra Island with our expertly curated tours and adventures.",
    buttonText: "Discover Socotra’s Magic",

    contact: {
        phone: "+971507112961",
        email: "hello@socotranights.com",
        phoneLabel: "WhatsApp",
        emailLabel: "Email"
    },
    socialLinks: [
        { platform: 'whatsapp', url: '#' },
        { platform: 'telegram', url: '#' },
        { platform: 'instagram', url: '#' },
        { platform: 'vk', url: '#' }
    ],

    copyrightText: "© 2026 Socotra Nights. All rights reserved.",

    links: {
        terms: "Terms & Conditions",
        privacy: "Privacy Policy",
        developer: "Developed by Techific"
    },

    logo: {
        url: "/assets/images/logo/logo.png",
        alt: ""
    }
};

export const useFooter = (apiUrl?: string) => {
    const [data, setData] = useState<FooterData>(defaultFooterData);

    useEffect(() => {
        if (!apiUrl) return;

        fetch(apiUrl)
            .then(res => res.json())
            .then(res => {
                if (res?.success && res.data) {
                    setData(res.data);
                }
            })
            .catch(() => {
                setData(defaultFooterData);
            });
    }, [apiUrl]);

    return { data };
};
