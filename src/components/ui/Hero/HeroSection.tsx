/* import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './HeroSection.css';

interface HeroProps {
    customData?: {
        title?: string;
        subtitle?: string;
        buttonText?: string;
        backgroundImage?: string;
    };
    onBookNow?: () => void;
}

interface HeroData {
    title: string;
    subtitle: string;
    buttonText: string;
    backgroundImage: string;
}

const HeroSection: React.FC<HeroProps> = ({ customData, onBookNow }) => {
    const [heroData, setHeroData] = useState<HeroData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        fetchHeroData();
    }, []);

    const fetchHeroData = async () => {
        try {
            const response = await axios.get(
                'https://your-api.com/api/hero-section', //هاد رابط ال api
                {
                    headers: {
                        Authorization: 'Bearer ${token}', //اذا كان بدي توكن
                        "Content-Type": "application/json",
                    },
                }
            );

            console.log(response.data);
            setHeroData(response.data.data); 
            setError(null);
        } catch (error) {
            console.error("Error fetching hero data:", error);
            setError("حدث خطأ ");
        } finally {
            setLoading(false);
        }
    };

    const data = {
        ...heroData,
        ...customData
    };

    if (loading) {
        return <div className="hero-section loading">Loading...</div>;
    }

    if (error || !data) {
        return <div className="hero-section error">{error || "No data available"}</div>;
    }

    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${data.backgroundImage})`,
            }}
        >
            <div className="hero-overlay">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {data.title}
                    </h1>
                    <p className="hero-subtitle">
                        {data.subtitle}
                    </p>
                    <button
                        className="hero-button"
                        onClick={onBookNow}
                    >
                        {data.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; */





import React from 'react';
import { heroContent } from '../../../data/home';
import './HeroSection.css'; 

interface HeroProps {
    customData?: {
        title?: string;
        subtitle?: string;
        buttonText?: string;
        backgroundImage?: string;
    };
    onBookNow?: () => void;
}

const HeroSection: React.FC<HeroProps> = ({ customData, onBookNow }) => {
    const data = { ...heroContent, ...customData };

    return (
        <section
            className="hero-section"
            style={{
                backgroundImage: `url(${data.backgroundImage})`,
            }}
        >
            <div className="hero-overlay ">
                <div className="hero-content">
                    <h1 className="hero-title">
                        {data.title}
                    </h1>
                    <p className="hero-subtitle">
                        {data.subtitle}
                    </p>
                    <button
                        className="hero-button"
                        onClick={onBookNow}
                    >
                        {data.buttonText}
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection; 





