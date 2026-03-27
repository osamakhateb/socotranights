import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/Hero/Hero';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ScrollBtn from '../components/ui/ScrollBtn/ScrollBtn';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { cardsData } from '../data/homeCardsData';
import { HeroTours } from '../data/home';

interface Tour {
    id: string;
    title_en: string;
    title_ru: string;
    description_en: string;
    description_ru: string;
    image?: string;
}

interface ToursProps {
    language: 'en' | 'ru';
}

const Tours: React.FC<ToursProps> = ({ language }) => {
    const [tours, setTours] = useState<Tour[]>([]);

    const tourCards = {
        title: language === 'en' ? cardsData.tours.title_en : cardsData.tours.title_ru,
        description: language === 'en' ? cardsData.tours.description_en : cardsData.tours.description_ru
    };

    useEffect(() => {
        const fetchTours = async () => {
            try {
                const res = await fetch('/api/tours');
                const data = await res.json();
                setTours(data);
            } catch (error) {
                console.error('Failed to fetch tours:', error);
            }
        };
        fetchTours();
    }, []);

    return (
        <div className="tours-page">
            <HeroSection data={HeroTours} language={language} />
            <ScrollBtn />

            <CardsSection
                mainTitle={tourCards.title}
                mainDescription={tourCards.description}
            />

            <div className="tours-list">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-item">
                        <h3>{language === 'en' ? tour.title_en : tour.title_ru}</h3>
                        <p>{language === 'en' ? tour.description_en : tour.description_ru}</p>
                        <Link to={`/tours/${tour.id}`}>
                            {language === 'en' ? 'View Details' : 'Подробнее'}
                        </Link>
                    </div>
                ))}
            </div>
            <ContactForm language={language} />
        </div>
    );
};

export default Tours;