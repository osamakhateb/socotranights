import { useEffect, useState } from 'react';
import type { FooterData } from '../../data/footer.types';

/* const defaultFooterData: FooterData = {
    title: "Discover the secrets of Socotra Where simplicity meets adventure",
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
}; */
// في ملف useFooter أو ملف منفصل
const defaultFooterData: FooterData = {
    title_en: "Discover the secrets of Socotra Where simplicity meets adventure",
    title_ru: "Откройте секреты Сокотры, где простота встречается с приключениями",
    buttonText_en: "Discover Socotra's Magic",
    buttonText_ru: "Откройте магию Сокотры",
    contact: {
        phone: "+971507112961",
        email: "hello@socotranights.com",
        phoneLabel_en: "WhatsApp",
        phoneLabel_ru: "WhatsApp",
        emailLabel_en: "Email",
        emailLabel_ru: "Электронная почта"
    },
    socialLinks: [
        { platform: 'whatsapp', url: '#' },
        { platform: 'telegram', url: '#' },
        { platform: 'instagram', url: '#' },
        { platform: 'vk', url: '#' }
    ],
    copyrightText_en: "© 2026 Socotra Nights. All rights reserved.",
    copyrightText_ru: "© 2026 Socotra Nights. Все права защищены.",
    links: {
        terms_en: "Terms & Conditions",
        terms_ru: "Условия использования",
        privacy_en: "Privacy Policy",
        privacy_ru: "Политика конфиденциальности",
        developer_en: "Developed by Techific",
        developer_ru: "Разработано Techific"
    },
    logo: {
        url: "/assets/images/logo/logo.png",
        alt_en: "Socotra Secrets Logo",
        alt_ru: "Логотип Секреты Сокотры"
    }
};

interface UseFooterProps {
    apiUrl?: string;
    language: 'en' | 'ru';
}

export const useFooter = ({ apiUrl, language }: UseFooterProps) => {
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
