import React from "react";
import { socotraData } from "../../../data/home";
import "./SocotraSection.css";

interface SocotraSectionProps {
    language: 'en' | 'ru';
}

const SocotraSection: React.FC<SocotraSectionProps> = ({ language }) => {
    const title = language === 'en' ? socotraData.title_en : socotraData.title_ru;
    const description = language === 'en' ? socotraData.description_en : socotraData.description_ru;
    const imageUrl = socotraData.imageUrl;

    return (
        <section className="socotra-section">
            <div className="socotra-container">
                <div className="socotra-header">
                    <h1 className="socotra-title">{title}</h1>
                </div>
                <div className="socotra-main-content">
                    <div className="socotra-text-content">
                        <p className="socotra-description">{description}</p>
                    </div>
                    <div className="socotra-image">
                        <img
                            src={imageUrl}
                            alt={language === 'en' ? "Socotra Island" : "Остров Сокотра"}
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocotraSection;