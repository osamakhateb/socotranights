import React from "react";
import { socotraData } from "../../../data/home";
import "./SocotraSection.css";

const SocotraSection: React.FC = () => {
    const { title, subtitle, description, quote, imageUrl } = socotraData;

    return (
        <section className="socotra-section">
            <div className="socotra-container">
                <div className="socotra-header">
                    <h1 className="socotra-title">{title}</h1>
                    <h2 className="socotra-subtitle">{subtitle}</h2>
                </div>
                <div className="socotra-main-content">
                    <div className="socotra-text-content">
                        <p className="socotra-description">{description}</p>
                        <blockquote className="socotra-quote">"{quote}"</blockquote>
                    </div>
                    <div className="socotra-image">
                        <img src={imageUrl} alt="Socotra Tree" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SocotraSection;