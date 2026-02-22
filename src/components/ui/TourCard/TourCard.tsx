import { Link } from "react-router-dom";
import "./TourCard.css";

interface TourCardProps {
  id: number;
  title: string;
  description: string;
  price_per_person: string;
  duration: string;
  main_image: string;
  google_map_link: string;
  is_selectable: number | string; // السماح بأن يكون string أو number
  created_at?: string;
  updated_at?: string;
}

const TourCard = ({
  id,
  title,
  description,
  price_per_person,
  duration,
  main_image,
  google_map_link,
  is_selectable,
}: TourCardProps) => {
  // تحويل القيمة إلى رقم للمقارنة الآمنة
  const isAvailable = Number(is_selectable) === 1;
  
  // للتشخيص - يمكنك إزالته بعد التأكد من العمل
  console.log(`Tour ${id}: is_selectable =`, is_selectable, '| isAvailable =', isAvailable);

  return (
    <div className={`tour-card ${!isAvailable ? 'tour-card-unavailable' : ''}`}>
      <div className="tour-image-container">
        <img src={main_image} alt={title} className="tour-image" />
        {!isAvailable && (
          <div className="tour-unavailable-overlay">
            <span className="soon-badge">SOON</span>
          </div>
        )}
      </div>

      <div className="tour-content">
        <h3 className="tour-title">{title}</h3>
        
        <p className="tour-description">{description}</p>

        {/* معلومات إضافية من الـ Response */}
        <div className="tour-additional-info">
          {google_map_link && (
            <div className="info-item">
              <span className="info-label">🗺️ الموقع:</span>
              <a 
                href={google_map_link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="map-link"
              >
                عرض على الخريطة
              </a>
            </div>
          )}
        </div>

        <div className="tour-details">
          <div className="price-duration">
            <div className="tour-price">
              {price_per_person} $
            </div>
            <div className="tour-duration">
              {duration}
            </div>
          </div>

          {isAvailable ? (
            <Link 
              to={`/tour/${id}`}
              className="tour-button"
            >
              BOOK NOW
            </Link>
          ) : (
            <button 
              className="tour-button tour-button-disabled"
              disabled
            >
              BOOK NOW
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TourCard;