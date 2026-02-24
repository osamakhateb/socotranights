

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
    title: string;
    description: string;
    image?: string;
}

const Tours = () => {
    const [tours, setTours] = useState<Tour[]>([]);
    const tourCards = cardsData.tours;

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
            <HeroSection data={HeroTours} />
            <ScrollBtn />

            <CardsSection
                mainTitle={tourCards.title}
                mainDescription={tourCards.description}
            />

            <div className="tours-list">
                {tours.map(tour => (
                    <div key={tour.id} className="tour-item">
                        <h3>{tour.title}</h3>
                        <p>{tour.description}</p>
                        <Link to={`/tours/${tour.id}`}>View Details</Link>
                    </div>
                ))}
            </div>

            <ContactForm
            />
        </div>
    );
};

export default Tours;
