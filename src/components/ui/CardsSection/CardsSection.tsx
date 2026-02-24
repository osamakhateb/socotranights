import React, { useState, useEffect } from "react";
import axios from "axios";
import "./CardsSection.css";

export interface Card {
    id: number;
    image_url: string;
}

interface CardsSectionProps {
    mainTitle: string;
    mainDescription?: string;
    // جعل cards اختيارياً لأننا سنجلبه من API
    cards?: Card[];
}

const CardsSection: React.FC<CardsSectionProps> = ({
    mainTitle,
    mainDescription,
    cards: propCards, // نغير الاسم لتجنب التضارب
}) => {
    const [cards, setCards] = useState<Card[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchGallery = async () => {
            try {
                const response = await axios.get('https://dash.socotra-secrets.com/api/gallery');
                
                setCards(response.data.data);
                setError(null);
            } catch (err) {
                setError('فشل في تحميل الصور');
                console.error('Error fetching gallery:', err);
            } finally {
                setLoading(false);
            }
        };

        fetchGallery();
    }, []);

    // نستخدم الكاردات من الـ API إذا لم يتم تمريرها كـ props
    const displayCards = propCards || cards;

    if (loading) {
        return (
            <section className="cards-section">
                <div className="cards-container">
                    <div className="cards-header">
                        <h2>{mainTitle}</h2>
                        {mainDescription && <p>{mainDescription}</p>}
                    </div>
                    <div className="loading">جاري التحميل...</div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="cards-section">
                <div className="cards-container">
                    <div className="cards-header">
                        <h2>{mainTitle}</h2>
                        {mainDescription && <p>{mainDescription}</p>}
                    </div>
                    <div className="error">{error}</div>
                </div>
            </section>
        );
    }

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
                                src={card.image_url}
                                alt={`gallery image ${card.id}`}
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