import React from "react";
import "./Story.css";
import type { OurStoryData } from "../../../data/ourStoryData";

const OurStory: React.FC<OurStoryData> = ({ title, subtitle, description, quote, imageUrl }) => {
    return (
        <section className="our-story-section">
            <div className="our-story-container">
                <div className="our-story-header">
                    <h1 className="our-story-title">{title}</h1>
                    {subtitle && <h2 className="our-story-subtitle">{subtitle}</h2>}
                </div>
                <div className="our-story-main-content">
                    <div className="our-story-image">
                        <img src={imageUrl} alt={title} />
                    </div>
                    <div className="our-story-text-content card">
                        <p className="our-story-description">{description}</p>
                        <blockquote className="our-story-quote">"{quote}"</blockquote>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurStory;
