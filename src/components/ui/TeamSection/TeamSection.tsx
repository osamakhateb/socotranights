import React from 'react';
import type { AboutData } from '../../../data/teamData'; // استخدم type هنا
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

// تصدير كدالة أو كمتغير
export default TeamSection;