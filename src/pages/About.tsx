import React from "react";
import CardsSection from "../components/ui/CardsSection/CardsSection"; 

const About: React.FC = () => {
    return (
        <div>
            <h1>Welcome to Socotra Nights</h1>
            <p>Discover the beauty of Socotra Island</p>

            <CardsSection
                mainTitle="Our Services"
                cards={[
                    { title: "Tour Planning", description: "We help you plan the perfect trip tailored to your preferences." },
                    { title: "Local Guides", description: "Experienced guides ensure you get the best local insights." },
                    { title: "Custom Packages", description: "Flexible packages that fit any budget." },
                    { title: "Support 24/7", description: "Always here to help during your trip." },
                ]}
            />
        </div>
    );
};

export default About;
