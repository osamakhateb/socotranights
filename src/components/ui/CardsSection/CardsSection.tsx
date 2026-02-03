/* import React from "react";
import "./CardsSection.css";

interface Card {
    title: string;
    description: string;
    icon?: React.ReactNode;
}

interface CardsSectionProps {
    mainTitle: string;
    mainDescription?: string;
    cards: Card[];
}

const CardsSection: React.FC<CardsSectionProps> = ({ mainTitle, mainDescription, cards }) => {
    return (
        <section className="cards-section">
            <div className="cards-container">
                <div className="cards-header">
                    <h2>{mainTitle}</h2>
                    {mainDescription && <p>{mainDescription}</p>}
                </div>

                <div className="cards-grid">
                    {cards.map((card, index) => (
                        <div key={index} className="card">
                            {card.icon && <div className="card-icon">{card.icon}</div>}
                            <h3 className="card-title">{card.title}</h3>
                            <p className="card-description">{card.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>

    );
};

export default CardsSection;
 */



import React from "react";
import "./CardsSection.css";

export interface Card {
    id: number;
    image: string;
}

interface CardsSectionProps {
    mainTitle: string;
    mainDescription?: string;
    cards: Card[];
}

const CardsSection: React.FC<CardsSectionProps> = ({
    mainTitle,
    mainDescription,
    cards,
}) => {
    return (
        <section className="cards-section">
            <div className="cards-container">
                <div className="cards-header">
                    <h2>{mainTitle}</h2>
                    {mainDescription && <p>{mainDescription}</p>}
                </div>

                <div className="cards-grid">
                    {cards.map((card) => (
                        <div key={card.id} className="card">
                            <img
                                src={card.image}
                                alt="card image"
                                className="card-image"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default CardsSection;
