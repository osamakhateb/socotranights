import React from 'react';
import './Hero.css';

interface HeroData {
    title_en: string;
    title_ru: string;
    subtitle_en: string;
    subtitle_ru: string;
    backgroundImage: string;
}

interface HeroProps {
    data: HeroData;
    language: 'en' | 'ru';
    onBookNow?: () => void; // ⬅️ يمكن حذف هذا السطر تمامًا إذا لم يكن ضروريًا
}

// ⬇️ احذف onBookNow من هنا:
const HeroSection: React.FC<HeroProps> = ({ data, language }) => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${data.backgroundImage})`,
            }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">{language === 'en' ? data.title_en : data.subtitle_ru}</h1>
                    <p className="hero-subtitle">{language === 'en' ? data.subtitle_en : data.title_ru}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
