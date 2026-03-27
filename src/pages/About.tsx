import HeroSection from '../components/ui/Hero/Hero';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { cardsData } from '../data/homeCardsData';
import OurStory from "../components/ui/Story/Story";
import { ourStoryData } from '../data/ourStoryData';
import TeamSection from '../components/ui/TeamSection/TeamSection';
import { aboutData } from '../data/teamData';
import { HeroAbout } from '../data/home';
import Faq from '../components/ui/Faq/Faq';

const About = ({ language }: { language: 'en' | 'ru' }) => {

    const aboutCards = {
        title: language === 'en' ? cardsData.about.title_en : cardsData.about.title_ru,
        description: language === 'en' ? cardsData.about.description_en : cardsData.about.description_ru
    };

    return (
        <div className="about-page">
            <HeroSection data={HeroAbout} language={language} />
            <OurStory
                title={language === 'en' ? ourStoryData.title_en : ourStoryData.title_ru}
                subtitle={language === 'en' ? ourStoryData.subtitle_en : ourStoryData.subtitle_ru}
                description={language === 'en' ? ourStoryData.description_en : ourStoryData.description_ru}
                quote={language === 'en' ? ourStoryData.quote_en : ourStoryData.quote_ru}
                imageUrl={ourStoryData.imageUrl}
            />
            <CardsSection
                mainTitle={aboutCards.title}
                mainDescription={aboutCards.description}
            />
            <TeamSection data={aboutData} language={language} />
            <Faq language={language} />
            <ContactForm language={language} />
        </div>
    );
};

export default About;