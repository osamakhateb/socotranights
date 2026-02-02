export interface SocialLink {
    platform: 'facebook' | 'instagram' | 'twitter' | 'youtube' | 'linkedin' | 'tiktok';
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
