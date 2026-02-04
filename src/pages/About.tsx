/* import HeroSection from '../components/ui/HeroTours/HeroTours';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { cardsData } from '../data/homeCardsData';
import OurStory from "../components/ui/Story/Story";
import { ourStoryData } from "../data/ourStoryData";
import TeamSection from '../components/ui/TeamSection/TeamSection';
import { aboutData } from '../data/teamData';
import { HeroAbout } from '../data/home';

const About = () => {
    const handleFormSubmit = (formData: Record<string, string>) => {
        console.log('About inquiry submitted:', formData);
        alert('Thank you for your message! We will contact you soon.');
    };

    const aboutCards = cardsData.about;
    // هون ممكن ابعت معلومات 
    // fetch('/api/tours-inquiry', {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify(formData)
    // });
    return (
        <div className="about-page">
            <HeroSection data={HeroAbout} />
            <OurStory
                title={ourStoryData.title}
                subtitle={ourStoryData.subtitle}
                description={ourStoryData.description}
                quote={ourStoryData.quote}
                imageUrl={ourStoryData.imageUrl}
            />
            <CardsSection
                mainTitle={aboutCards.title}
                mainDescription={aboutCards.description}
                cards={aboutCards.cards}
            />
            <TeamSection data={aboutData} />

            <ContactForm
                {...toursContactForm}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default About; 
 */



import HeroSection from '../components/ui/Hero/Hero';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ContactForm from '../components/ui/ContactForm/ContactForm';
import { toursContactForm } from '../data/contactData/contactFormData';
import { cardsData } from '../data/homeCardsData';
import OurStory from "../components/ui/Story/Story";
import { ourStoryData } from '../data/ourStoryData';
import TeamSection from '../components/ui/TeamSection/TeamSection';
import { aboutData } from '../data/teamData';
import { HeroAbout } from '../data/home';

const About = () => {
    const handleFormSubmit = async (formData: Record<string, string>) => {
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });
            const data = await res.json();
            alert('Thank you for your message! We will contact you soon.');
        } catch (error) {
            console.error(error);
            alert('Failed to send message. Try again later.');
        }
    };

    const aboutCards = cardsData.about;

    return (
        <div className="about-page">
            <HeroSection data={HeroAbout} />
            <OurStory
                title={ourStoryData.title}
                subtitle={ourStoryData.subtitle}
                description={ourStoryData.description}
                quote={ourStoryData.quote}
                imageUrl={ourStoryData.imageUrl}
            />
            <CardsSection
                mainTitle={aboutCards.title}
                mainDescription={aboutCards.description}
                cards={aboutCards.cards}
            />
            <TeamSection data={aboutData} />
            <ContactForm
                {...toursContactForm}
                onSubmit={handleFormSubmit}
            />
        </div>
    );
};

export default About;
