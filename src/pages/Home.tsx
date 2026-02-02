import HeroSection from '../components/ui/Hero/HeroSection';
import SocotraSection from '../components/ui/ExperienceSection/SocotraSection';
import ToursSection from '../data/ToursSection/ToursSection';
import Faq from '../components/ui/Faq/Faq';
import TripInfo from '../components/ui/TripInfo/TripInfo';

import { heroContent } from '../data/home';

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
                <TripInfo/>
            </div>
        </div>
    );
};

export default Home;