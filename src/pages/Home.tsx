import HeroSection from '../components/ui/Hero/Hero';
import SocotraSection from '../components/ui/ExperienceSection/SocotraSection';
import ToursSection from '../data/ToursSection/ToursSection';
import Faq from '../components/ui/Faq/Faq';
import TripInfo from '../components/ui/TripInfo/TripInfo';
import CardsSection from '../components/ui/CardsSection/CardsSection';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { heroContent } from '../data/home';
import { cardsData } from '../data/homeCardsData';

interface HomeProps {
    language: 'en' | 'ru';
}

const Home = ({ language }: HomeProps) => {
    const homeCards = cardsData.home;

    const handleFormSubmit = async (formData: Record<string, string>) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            //const data = await res.json();
            await res.json(); 
            alert('Thank you for your message! We will contact you soon.');
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Try again later.');
        }
    };

    return (
        <div className="home-page">
            <HeroSection data={heroContent} />
            <div className="content-wrapper">
                <SocotraSection />
                <ToursSection  language={language} />
                <TripInfo />
                <Faq />
                <CardsSection
                    mainTitle={homeCards.title}
                    mainDescription={homeCards.description}
                />
                <ContactForm/>
            </div>
        </div>
    );
};

export default Home;
