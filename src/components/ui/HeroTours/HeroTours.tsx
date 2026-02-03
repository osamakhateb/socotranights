import React from 'react';
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
