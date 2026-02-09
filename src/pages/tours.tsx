/* import HeroSection from '../components/ui/HeroTours/HeroTours';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ScrollBtn from '../components/ui/ScrollBtn/ScrollBtn';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { cardsData } from '../data/homeCardsData';
import { HeroTours } from '../data/home';
const Tours = () => {
    const handleFormSubmit = (formData: Record<string, string>) => {
        console.log('Tour inquiry submitted:', formData);
        alert('Thank you for your inquiry! We will contact you soon.');
    };

    const tourCards = cardsData.tours;

    return (
        <div className="tours-page">
            <HeroSection data={HeroTours} />

            <ScrollBtn />

            <CardsSection
                mainTitle={tourCards.title}
                mainDescription={tourCards.description}
                cards={tourCards.cards}
            />

            <ContactForm
                {...toursContactForm}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default Tours;
 */


import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HeroSection from '../components/ui/Hero/Hero';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ScrollBtn from '../components/ui/ScrollBtn/ScrollBtn';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
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

    const handleFormSubmit = async (formData: Record<string, string>) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            /* const data = await res.json();*/
            await res.json(); // ⬅️ بدون تخزين (إذا كنت لا تفحص الرد)

            alert('Thank you for your inquiry! We will contact you soon.');
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Try again later.');
        }
    };

    // fetch tours from API
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
                cards={tourCards.cards}
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
                {...toursContactForm}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default Tours;
