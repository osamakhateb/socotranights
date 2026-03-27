/* export interface SocialLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'tiktok' | 'whatsapp' | 'telegram' | 'vk'; // أضف الأنواع هنا
    url: string;
    ariaLabel?: string;
}

export interface FooterContact {
    phone: string;
    email: string;
    phoneLabel?: string;
    emailLabel?: string;
}

export interface FooterLinks {
    terms: string;
    privacy: string;
    developer: string;
    termsUrl?: string;
    privacyUrl?: string;
}

export interface FooterData {
    id?: string;
    title: string;
    buttonText: string;
    buttonUrl?: string;
    contact: FooterContact;
    socialLinks: SocialLink[];
    copyrightText: string;
    links: FooterLinks;
    logo?: {
        url: string;
        alt: string;
        width?: number;
        height?: number;
    };
    isActive?: boolean;
    updatedAt?: string;
}

export interface FooterState {
    data: FooterData | null;
    loading: boolean;
    error: string | null;
    lastUpdated: string | null;
}

export interface UseFooterReturn extends FooterState {
    refetch: () => Promise<void>;
    updateFooterData: (newData: Partial<FooterData>) => void;
}
 */

// data/footer.types.ts
export interface SocialLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'tiktok' | 'whatsapp' | 'telegram' | 'vk';
    url: string;
    ariaLabel?: string;
}

export interface FooterContact {
    phone: string;
    email: string;
    phoneLabel_en?: string;  // إضافة
    phoneLabel_ru?: string;  // إضافة
    emailLabel_en?: string;  // إضافة
    emailLabel_ru?: string;  // إضافة
}

export interface FooterLinks {
    terms_en: string;        // تغيير
    terms_ru: string;        // إضافة
    privacy_en: string;      // تغيير
    privacy_ru: string;      // إضافة
    developer_en: string;    // تغيير
    developer_ru: string;    // إضافة
    termsUrl?: string;
    privacyUrl?: string;
}

export interface FooterData {
    id?: string;
    title_en: string;        // تغيير
    title_ru: string;        // إضافة
    buttonText_en: string;   // تغيير
    buttonText_ru: string;   // إضافة
    buttonUrl?: string;
    contact: FooterContact;
    socialLinks: SocialLink[];
    copyrightText_en: string; // تغيير
    copyrightText_ru: string; // إضافة
    links: FooterLinks;
    logo?: {
        url: string;
        alt_en: string;      // تغيير
        alt_ru: string;      // إضافة
        width?: number;
        height?: number;
    };
    isActive?: boolean;
    updatedAt?: string;
}

export interface FooterState {
    data: FooterData | null;
    loading: boolean;
    error: string | null;
    lastUpdated: string | null;
}

export interface UseFooterReturn extends FooterState {
    refetch: () => Promise<void>;
    updateFooterData: (newData: Partial<FooterData>) => void;
}