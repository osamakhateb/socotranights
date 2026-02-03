import HeroSectionTours from '../components/ui/HeroTours/HeroTours';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ScrollBtn from '../components/ui/ScrollBtn/ScrollBtn';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { HeroTours } from '../data/home';
import { cardsData } from '../data/homeCardsData'; 

const Tours = () => {
    const handleBookNow = () => {
        alert('Booking feature coming soon!');
    };

    const handleFormSubmit = (formData: Record<string, string>) => {
        console.log('Tour inquiry submitted:', formData);
        alert('Thank you for your inquiry! We will contact you soon.');
    };

    const tourCards = cardsData.tours; 

    return (
        <div className="tours-page">
            <HeroSectionTours
                customData={HeroTours}
                onBookNow={handleBookNow}
            />
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
