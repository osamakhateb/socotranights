import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
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

export default function SingleTrip() {
  const { id } = useParams<{ id: string }>();
  const [trip, setTrip] = useState<TripData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeDay, setActiveDay] = useState<number>(1);


  const API_BASE_URL = 'http://127.0.0.1:8000/api';

 const fetchTripById = async (id: string) => {
  try {
    const response = await fetch(`${API_BASE_URL}/trips/${id}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching trip:', error);
    throw error;
  }
};

  useEffect(() => {
    const loadTrip = async () => {
      try {
        setLoading(true);
        const response = await fetchTripById(id!);
        setTrip(response.data);
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
  }, [id]);

  if (loading) {
    return (
      <div className="loading-container">
        <div className="loader"></div>
        <p>جاري تحميل الرحلة...</p>
      </div>
    );
  }

  if (error || !trip) {
    return (
      <div className="error-container">
        <h2>خطأ</h2>
        <p>{error || 'الرحلة غير موجودة'}</p>
      </div>
    );
  }

  return (
    <div className="single-trip-page">
      {/* Hero Section مع الصورة الرئيسية */}
      <section className="trip-hero">
        <div className="trip-hero-image">
          <img 
            src={`http://127.0.0.1:8000/storage/${trip.main_image}`} 
            alt={trip.title} 
          />
          <div className="trip-hero-overlay">
            <div className="trip-hero-content">
              <h1>{trip.title}</h1>
              <div className="trip-meta">
                <span className="trip-duration">⏱️ {trip.duration}</span>
                <span className="trip-price">💰 {trip.price_per_person} ₽ للشخص</span>
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
              <h2>عن الرحلة</h2>
              <p className="trip-full-description">{trip.description}</p>
              
              {trip.google_map_link && (
                <a 
                  href={trip.google_map_link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="map-button"
                >
                  🗺️ عرض الموقع على الخريطة
                </a>
              )}
            </div>

            {/* جدول أيام الرحلة */}
            <div className="trip-itinerary">
              <h2>جدول الرحلة</h2>
              <div className="days-navigation">
                {trip.sub_trips.map((subTrip) => (
                  <button
                    key={subTrip.id}
                    className={`day-tab ${activeDay === subTrip.order ? 'active' : ''}`}
                    onClick={() => setActiveDay(subTrip.order)}
                  >
                    اليوم {subTrip.order}
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
                      src={`http://127.0.0.1:8000/storage/${subTrip.sub_image}`} 
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
              <h3>احجز رحلتك الآن</h3>
              <div className="price-display">
                <span className="price-label">السعر للشخص</span>
                <span className="price-value">{trip.price_per_person} ₽</span>
              </div>
              <div className="booking-details">
                <p>✅ {trip.duration}</p>
                <p>✅ شامل الإقامة والوجبات</p>
                <p>✅ مرشد سياحي متخصص</p>
                <p>✅ جميع وسائل النقل</p>
              </div>
              <button 
                className={`book-button ${trip.is_selectable ? '' : 'disabled'}`}
                disabled={!trip.is_selectable}
              >
                {trip.is_selectable ? 'احجز الآن' : 'غير متاح حالياً'}
              </button>
              {!trip.is_selectable && (
                <p className="unavailable-message">هذه الرحلة غير متاحة للحجز حالياً</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}