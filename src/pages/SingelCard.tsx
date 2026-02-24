import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios'; // إضافة import axios
import './SingleTrip.css';

interface SubTrip {
  id: number;
  sub_title: string;
  sub_image: string;
  description1: string;
  description2: string;
  description3: string | null;
  order: number;
}

interface TripData {
  id: number;
  title: string;
  description: string;
  price_per_person: string;
  duration: string;
  main_image: string;
  google_map_link: string;
  is_selectable: number;
  sub_trips: SubTrip[];
}

interface HomeProps {
    language: 'en' | 'ru';  // تعديل إلى 'ru' للروسية
}

export default function SingleTrip({ language }: HomeProps) {

  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);

  const API_BASE_URL = 'https://dash.socotra-secrets.com/api';

  const fetchTripById = async (id: string, lang: string) => {
    try {
      const response = await axios.get(`${API_BASE_URL}/trips/${id}`, {
        params: { lang }
      });
      return response.data;
    } catch (error) {
      console.error('Error fetching trip:', error);
      throw error;
    }
  };

  useEffect(() => {
    const loadTrip = async () => {
      try {
        setLoading(true);
        const response = await fetchTripById(id!, language); // تمرير اللغة الحالية
        setTrip(response.data);
        setActiveDay(1); // إعادة تعيين اليوم النشط إلى اليوم الأول
        setError(null);
      } catch (err) {
        setError('فشل في تحميل بيانات الرحلة');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      loadTrip();
    }
  }, [id, language]); // إضافة language إلى مصفوفة التبعيات

  // ترجمة النصوص الثابتة حسب اللغة
  const translations = {
    en: {
      loading: "Loading trip...",
      error: "Error",
      tripNotFound: "Trip not found",
      aboutTrip: "About the trip",
      viewOnMap: "🗺️ View on map",
      itinerary: "Trip itinerary",
      day: "Day",
      bookNow: "Book your trip now",
      pricePerPerson: "Price per person",
      included: "✅ Included:",
      accommodation: "Accommodation and meals",
      guide: "Professional tour guide",
      transport: "All transportation",
      bookButton: "Book now",
      notAvailable: "Not available",
      unavailableMessage: "This trip is currently not available for booking",
      duration: "Duration",
      price: "Price"
    },
    ru: {
      loading: "Загрузка тура...",
      error: "Ошибка",
      tripNotFound: "Тур не найден",
      aboutTrip: "О туре",
      viewOnMap: "🗺️ Посмотреть на карте",
      itinerary: "Программа тура",
      day: "День",
      bookNow: "Забронировать сейчас",
      pricePerPerson: "Цена за человека",
      included: "✅ Включено:",
      accommodation: "Проживание и питание",
      guide: "Профессиональный гид",
      transport: "Все трансферы",
      bookButton: "Забронировать",
      notAvailable: "Недоступно",
      unavailableMessage: "Этот тур временно недоступен для бронирования",
      duration: "Длительность",
      price: "Цена"
    }
  };

  const t = translations[language];

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>{t.loading}</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="error-container">
        <h2>{t.error}</h2>
        <p>{error || t.tripNotFound}</p>
      </div>
    );
  }

  return (
    <div className="single-trip-page">
      {/* Hero Section مع الصورة الرئيسية */}
      <section className="trip-hero">
        <div className="trip-hero-image">
          <img 
            src={trip.main_image}
            alt={trip.title} 
          />
          <div className="trip-hero-overlay">
            <div className="trip-hero-content">
              <h1>{trip.title}</h1>
              <div className="trip-meta">
                <span className="trip-duration">⏱️ {t.duration}: {trip.duration}</span>
                <span className="trip-price">💰 {t.price}: {trip.price_per_person} ₽</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* المحتوى الرئيسي */}
      <div className="trip-container">
        <div className="trip-grid">
          {/* العمود الأيمن: الوصف والمعلومات */}
          <div className="trip-main-content">
            <div className="trip-info-card">
              <h2>{t.aboutTrip}</h2>
              <p className="trip-full-description">{trip.description}</p>
              
              {trip.google_map_link && (
                <a 
                  href={trip.google_map_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  {t.viewOnMap}
                </a>
              )}
            </div>

            {/* جدول أيام الرحلة */}
            <div className="trip-itinerary">
              <h2>{t.itinerary}</h2>
              <div className="days-navigation">
                {trip.sub_trips.map((subTrip) => (
                  <button
                    key={subTrip.id}
                    className={`day-tab ${activeDay === subTrip.order ? 'active' : ''}`}
                    onClick={() => setActiveDay(subTrip.order)}
                  >
                    {t.day} {subTrip.order}
                  </button>
                ))}
              </div>

              {/* عرض اليوم المحدد */}
              {trip.sub_trips.map((subTrip) => (
                <div 
                  key={subTrip.id}
                  className={`day-content ${activeDay === subTrip.order ? 'active' : ''}`}
                >
                  <div className="day-image">
                    <img 
                      src={subTrip.sub_image}
                      alt={subTrip.sub_title} 
                    />
                  </div>
                  <div className="day-details">
                    <h3>{subTrip.sub_title}</h3>
                    <div className="day-descriptions">
                      {subTrip.description1 && (
                        <p className="description-item">{subTrip.description1}</p>
                      )}
                      {subTrip.description2 && (
                        <p className="description-item">{subTrip.description2}</p>
                      )}
                      {subTrip.description3 && (
                        <p className="description-item">{subTrip.description3}</p>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* العمود الأيسر: بطاقة الحجز */}
          <div className="trip-sidebar">
            <div className="booking-card">
              <h3>{t.bookNow}</h3>
              <div className="price-display">
                <span className="price-label">{t.pricePerPerson}</span>
                <span className="price-value">{trip.price_per_person} ₽</span>
              </div>
              <div className="booking-details">
                <p>{t.included}</p>
                <p>✅ {t.accommodation}</p>
                <p>✅ {t.guide}</p>
                <p>✅ {t.transport}</p>
              </div>
              <button 
                className={`book-button ${trip.is_selectable ? '' : 'disabled'}`}
                disabled={!trip.is_selectable}
              >
                {trip.is_selectable ? t.bookButton : t.notAvailable}
              </button>
              {!trip.is_selectable && (
                <p className="unavailable-message">{t.unavailableMessage}</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}