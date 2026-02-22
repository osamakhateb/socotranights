import React from 'react';
import './Hero.css';

interface HeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

interface HeroProps {
    data: HeroData;
    onBookNow?: () => void; // ⬅️ يمكن حذف هذا السطر تمامًا إذا لم يكن ضروريًا
}

// ⬇️ احذف onBookNow من هنا:
const HeroSection: React.FC<HeroProps> = ({ data }) => {
    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${data.backgroundImage})`,
            }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">{data.title}</h1>
                    <p className="hero-subtitle">{data.subtitle}</p>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
