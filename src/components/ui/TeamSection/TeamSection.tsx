 import React from 'react';
import type { AboutData } from '../../../data/teamData'; 
import './TeamSection.css';

interface TeamSectionProps {
    data: AboutData;
}

const TeamSection: React.FC<TeamSectionProps> = ({ data }) => {
    return (
        <div className="about-sections-container">
            <h2 className="about-main-title">{data.title}</h2>

            <div className="sections-wrapper">
                {data.sections.map((section) => (
                    <section
                        key={section.id}
                        className={`about-section ${section.type}-section`}
                    >
                        <div className="section-content">
                            <h3 className="section-title">{section.title}</h3>

                            {section.type === 'sustainability' && (
                                <>
                                    <p className="section-description">{section.description}</p>
                                    <ul className="items-list">
                                        {section.items?.map((item, index) => (
                                            <li key={index} className="item">
                                                <span className="item-icon">✓</span>
                                                <span className="item-text">{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </>
                            )}

                            {section.type === 'team' && (
                                <div className="paragraphs-container">
                                    {section.paragraphs?.map((paragraph, index) => (
                                        <p key={index} className="paragraph">
                                            {paragraph}
                                        </p>
                                    ))}
                                </div>
                            )}
                        </div>
                    </section>
                ))}
            </div>
        </div>
    );
};

export default TeamSection; 



/* import React from 'react';
import type { AboutData } from '../../../data/teamData'; 
import './TeamSection.css';

interface TeamSectionProps {
    data: AboutData;
    language: 'en' | 'ru';
}

const TeamSection: React.FC<TeamSectionProps> = ({ data, language }) => {
    const mainTitle = language === 'en' ? data.title_en : data.title_ru;

    return (
        <div className="about-sections-container">
            <h2 className="about-main-title">{mainTitle}</h2>

            <div className="sections-wrapper">
                {data.sections.map((section) => {
                    const sectionTitle = language === 'en' ? section.title_en : section.title_ru;
                    
                    return (
                        <section
                            key={section.id}
                            className={`about-section ${section.type}-section`}
                        >
                            <div className="section-content">
                                <h3 className="section-title">{sectionTitle}</h3>

                                {section.type === 'sustainability' && (
                                    <>
                                        <p className="section-description">
                                            {language === 'en' ? section.description_en : section.description_ru}
                                        </p>
                                        <ul className="items-list">
                                            {(language === 'en' ? section.items_en : section.items_ru)?.map((item, index) => (
                                                <li key={index} className="item">
                                                    <span className="item-icon">✓</span>
                                                    <span className="item-text">{item}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </>
                                )}

                                {section.type === 'team' && (
                                    <div className="paragraphs-container">
                                        {(language === 'en' ? section.paragraphs_en : section.paragraphs_ru)?.map((paragraph, index) => (
                                            <p key={index} className="paragraph">
                                                {paragraph}
                                            </p>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </section>
                    );
                })}
            </div>
        </div>
    );
};

export default TeamSection; */