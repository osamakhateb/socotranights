
import HeroSection from '../components/ui/Hero/HeroSection';
import SocotraSection from '../components/ui/ExperienceSection/SocotraSection';
import ToursSection from '../data/ToursSection/ToursSection';
import Faq from '../components/ui/Faq/Faq';
import TripInfo from '../components/ui/TripInfo/TripInfo';
import CardsSection from '../components/ui/CardsSection/CardsSection';
import { FaMapMarkerAlt, FaDollarSign, FaBook, FaCheckCircle } from "react-icons/fa";
import { heroContent } from '../data/home';

const cardsData = [
    { title: "Local Expertise", description: "Native Socotri guides with deep knowledge of the island's culture.", icon: <FaMapMarkerAlt /> },
    { title: "Best Prices", description: "Competitive pricing with transparent costs.", icon: <FaDollarSign /> },
    { title: "Diverse Tours", description: "Multiple tour options from group experiences to VIP retreats.", icon: <FaBook /> },
    { title: "Excellent Service", description: "Dedicated support throughout your journey.", icon: <FaCheckCircle /> },
];

const Home = () => {
    const handleBookNow = () => {
        alert('Booking feature coming soon!');
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
                <Faq />
                <TripInfo />
                <CardsSection
                    mainTitle="Why Choose Us?"
                    mainDescription="We are a team of passionate locals dedicated to sharing the beauty of Socotra with the world"
                    cards={cardsData}
                />
            </div>
        </div>
    );
};

export default Home;
