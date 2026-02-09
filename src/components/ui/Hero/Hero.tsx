/* import React from 'react';
import { HeroTours as heroData } from '../../../data/home';
import './HeroTours.css';

interface HeroProps {
    customData?: {
        title?: string;
        subtitle?: string;
        buttonText?: string;
        backgroundImage?: string;

    };
    onBookNow?: () => void;
}

const HeroSectionTours: React.FC<HeroProps> = ({ customData, onBookNow }) => {
    const data = { ...heroData, ...customData };

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

export default HeroSectionTours;
 */
/* 
import React from 'react';
import './Hero.css';

interface HeroData {
    title: string;
    subtitle: string;
    backgroundImage: string;
}

interface HeroProps {
    data: HeroData;
    onBookNow?: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ data, onBookNow }) => {
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

export default HeroSection; */
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
