import HeroSection from '../components/ui/Hero/HeroSection';
import SocotraSection from '../components/ui/ExperienceSection/SocotraSection';
import ToursSection from '../data/ToursSection/ToursSection';
import Faq from '../components/ui/Faq/Faq';
import TripInfo from '../components/ui/TripInfo/TripInfo';
import CardsSection from '../components/ui/CardsSection/CardsSection';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { heroContent } from '../data/home';

import { cardsData } from '../data/homeCardsData';

const Home = () => {
    const homeCards = cardsData.home;

    const handleBookNow = () => {
        alert('Booking feature coming soon!');
    };
    //هاد مشان ارسال الرسالة
    const handleFormSubmit = (formData: Record<string, string>) => {
        console.log('Home form submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
    };

    return (
        <div className="home-page">
            <HeroSection
                customData={heroContent}
                onBookNow={handleBookNow}
            />

            <div className="content-wrapper">
                <SocotraSection />
                <ToursSection />
                <TripInfo />
                <Faq />

                <CardsSection
                    mainTitle={homeCards.title}
                    mainDescription={homeCards.description}
                    cards={homeCards.cards}
                />

                <ContactForm
                    {...toursContactForm}
                    onSubmit={handleFormSubmit}
                />
            </div>
        </div>
    );
};

export default Home;
