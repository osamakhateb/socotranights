/* import { useState, useEffect } from "react";
import TourCard from "../../components/ui/TourCard/TourCard";
import colors from "../../colors";
import "./ToursSection.css";

const ToursSection = () => {
  const  [tours, setTours: _setTours] = useState([
    {
      id: 1,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Group Experiences (Comfort Journey)",
      description:
        "Explore Socotra in a curated small group of like-minded travelers. Our Comfort Journey offers an authentic, simple, and welcoming experience designed for those who want to enjoy the island without the higher cost of private travel. Groups are intentionally kept small to maintain an intimate and harmonious rhythm.",
      price: "From $1,400 USD per person",
      duration: "8 days / 7 nights",
      setup: [
        "Comfort tents (cozy, simple, reliable)",
        "Optional upgrade: Barefoot Luxury tent setup available for the entire group at an additional cost.",
      ],
      to: "/tours/group",
    },
    {
      id: 2,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Private Adventures (Private Journey)",
      description:
        "Discover Socotra at your own pace with a fully private experience. Ideal for couples, families, and close groups of friends, the Private Journey lets you choose your rhythm, your landscapes, and the style of journey that feels most aligned with you.",
      price: "Starting from $1,400 USD per person",
      duration: "8 days / 7 nights",
      setup: [
        "Comfort Tent Setup — simple, cozy, and authentic",
        "Barefoot Luxury Upgrade — refined comfort and elevated details",
      ],
      to: "/tours/private",
    },
    {
      id: 3,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Barefoot Luxury",
      description:
        "Immerse yourself in Socotra's wild beauty with elevated comfort. Our Barefoot Luxury setup features spacious bell tents styled with refined details.",
      features: [
        "Turkish cotton linens",
        "Soft duvets and two pillows per person",
        "Warm bedside lighting",
        "Outdoor carpets and lounge area",
        "Decorative light chain for nighttime ease",
      ],
      price: "Starting from $2,400 USD per person",
      duration: "8 days / 7 nights",
      to: "/tours/luxury",
    },
  ]);

  useEffect(() => {
    localStorage.setItem("tours", JSON.stringify(tours));
  }, [tours]);

  return (
    <section className="tours-section" id="tours">
      <header className="tours-header">
        <h1 className="tours-main-title" style={{ color: colors.textDark }}>
          Our Tours
        </h1>
        <p className="tours-subtitle" style={{ color: colors.textGray }}>
          Choose from three unique experiences designed for different travel styles
        </p>
      </header>

      <div className="tours-container">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            description={tour.description}
            features={tour.features}
            price={tour.price}
            duration={tour.duration}
            setup={tour.setup}
            to={tour.to}
            colors={colors} 
          />
        ))}
      </div>
    </section>
  );
};

export default ToursSection;
 */

import { useState, useEffect } from "react";
import TourCard from "../../components/ui/TourCard/TourCard";
import colors from "../../colors"; 
import "./ToursSection.css";

const ToursSection = () => {
  const [tours] = useState([
    {
      id: 1,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Group Experiences (Comfort Journey)",
      description: "Explore Socotra in a curated small group of like-minded travelers.",
      price: "From $1,400 USD per person",
      duration: "8 days / 7 nights",
      setup: [
        "Comfort tents (cozy, simple, reliable)",
        "Optional upgrade: Barefoot Luxury tent setup available"
      ],
      to: "/tours/group"
    },
    {
      id: 2,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Private Adventures (Private Journey)",
      description: "Discover Socotra at your own pace with a fully private experience.",
      price: "Starting from $1,400 USD per person",
      duration: "8 days / 7 nights",
      setup: [
        "Comfort Tent Setup — simple, cozy, and authentic",
        "Barefoot Luxury Upgrade — refined comfort"
      ],
      to: "/tours/private"
    },
    {
      id: 3,
      image: "/assets/images/hero/SocotraSection.jpg",
      title: "Barefoot Luxury",
      description: "Immerse yourself in Socotra's wild beauty with elevated comfort.",
      features: [
        "Turkish cotton linens",
        "Turkish cotton linens",
        "Turkish cotton linens",
        "Soft duvets and two pillows per person"
      ],
      price: "Starting from $2,400 USD per person",
      duration: "8 days / 7 nights",
      to: "/tours/luxury"
    }
  ]);

  useEffect(() => {
    localStorage.setItem("tours", JSON.stringify(tours));
  }, [tours]);

  return (
    <section className="tours-section" id="tours">
      <header className="tours-header">
        <h1 className="tours-main-title" style={{ color: colors.textDark }}>
          Our Tours
        </h1>
        <p className="tours-subtitle" style={{ color: colors.textGray }}>
          Choose from three unique experiences designed for different travel styles
        </p>
      </header>

      <div className="tours-container">
        {tours.map((tour) => (
          <TourCard
            key={tour.id}
            image={tour.image}
            title={tour.title}
            description={tour.description}
            features={tour.features}
            price={tour.price}
            duration={tour.duration}
            setup={tour.setup}
            to={tour.to}
            colors={colors}
          />
        ))}
      </div>
    </section>
  );
};

export default ToursSection; 