import { useState, useEffect } from "react";
import TourCard from "../../components/ui/TourCard/TourCard";
import colors from "../../colors"; 
import "./ToursSection.css";
import axios from "axios";


interface Tory {
  id : number;
  title: string;
  description: string;
  price_per_person: string;
  duration: string;
  features: string[];
  setup: string[];
  main_image: string;
  to: string;
  google_map_link: string;
  is_selectable: number;
}

const ToursSection = () => {

  const [trips, setTrips] = useState<Tory[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('http://127.0.0.1:8000/api/trips');
        setTrips(response.data.data);
        console.log(response.data.data)
        setLoading(false);
      } catch (err : any) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);


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
        {trips.map((tour) => (
        <TourCard
          key={tour.id}
          id={tour.id}
          title={tour.title}
          description={tour.description}
          price_per_person={tour.price_per_person}
          duration={tour.duration}
          main_image={tour.main_image}
          google_map_link={tour.google_map_link}
          is_selectable={tour.is_selectable} // تأكد من أن القيمة تمرر كما هي
        />
))}
      </div>
    </section>
  );
};

export default ToursSection; 