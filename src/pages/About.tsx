import HeroSectionTours from '../components/ui/HeroTours/HeroTours';
import CardsSection from "../components/ui/CardsSection/CardsSection";
import ScrollBtn from '../components/ui/ScrollBtn/ScrollBtn';
import { HeroTours } from '../data/home';

const Tours = () => {
    const handleBookNow = () => {
        alert('Booking feature coming soon!');
    };

    return (
        <div className="tours-page">
            <HeroSectionTours
                customData={HeroTours}
                onBookNow={handleBookNow}
            />

            <CardsSection
                mainTitle="Our Tours"
                cards={[
                    { title: "Socotra Adventure", description: "Experience the unique beauty of Socotra." },
                    { title: "Cultural Journey", description: "Explore the culture and traditions of the island." },
                    { title: "Island Hikes", description: "Discover hidden trails and scenic landscapes." },
                    { title: "Photography Tour", description: "Capture Socotra's stunning nature." },
                ]}
            />
            <ScrollBtn />
        </div>
    );
};

export default Tours;
