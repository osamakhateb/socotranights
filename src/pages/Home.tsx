import HeroSection from '../components/ui/Hero/Hero';
import SocotraSection from '../components/ui/ExperienceSection/SocotraSection';
import ToursSection from '../data/ToursSection/ToursSection';
import Faq from '../components/ui/Faq/Faq';
import TripInfo from '../components/ui/TripInfo/TripInfo';
import CardsSection from '../components/ui/CardsSection/CardsSection';
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { heroContent } from '../data/home';
import { cardsData } from '../data/homeCardsData';

interface HomeProps {
    language: 'en' | 'ru';
}

const Home = ({ language }: HomeProps) => {
    const homeCards = cardsData.home;

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
