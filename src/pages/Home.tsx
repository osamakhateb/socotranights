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
    const homeCards = {
        title: language === 'en' ? cardsData.home.title_en : cardsData.home.title_ru,
        description: language === 'en' ? cardsData.home.description_en : cardsData.home.description_ru
    };

    return (
        <div className="home-page">
            <HeroSection data={heroContent} language={language} />
            <div className="content-wrapper">
                <SocotraSection language={language} />
                <ToursSection language={language} />
                <TripInfo language={language} />
                <Faq language={language} />
                <CardsSection
                    mainTitle={homeCards.title}
                    mainDescription={homeCards.description}
                />
                <ContactForm language={language} />
            </div>
        </div>
    );
};

export default Home;