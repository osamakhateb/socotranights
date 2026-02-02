import "./TourCard.css";

interface TourCardProps {
  image: string;
  title: string;
  description: string;
  price: string;
  duration: string;
  setup?: string[];
  features?: string[];
  to: string;
  buttonText?: string;
  colors: {
    textDark: string;
    textGray: string;
    textMuted: string;
    blueMain: string;
    blueDark: string;
    blueDarker: string;
    success: string;
    lightBg: string;
  };
}

const TourCard = ({
  image,
  title,
  description,
  price,
  duration,
  setup = [],
  features = [],
  to,
  buttonText = "BOOK NOW",
  colors,
}: TourCardProps) => {
  return (
    <div className="tour-card">
      <div className="tour-image-container">
        <img src={image} alt={title} className="tour-image" />
      </div>

      <div className="tour-content">
        <h3 className="tour-title" style={{ color: colors.textDark }}>
          {title}
        </h3>

        <p className="tour-description" style={{ color: colors.textGray }}>
          {description}
        </p>

        {features && features.length > 0 && (
          <div className="features-section">
            <ul className="features-list">
              {features.map((feature, index) => (
                <li
                  key={index}
                  className="feature-item"
                  style={{ color: colors.textGray }}
                >
                  {feature}
                </li>
              ))}
            </ul>
          </div>
        )}

        {setup && setup.length > 0 && (
          <div
            className="setup-section"
            style={{
              background: colors.lightBg,
              borderLeft: `4px solid ${colors.blueMain}`,
            }}
          >
            {setup.map((item, index) => (
              <div
                key={index}
                className="setup-item"
                style={{ color: colors.textDark }}
              >
                {item}
              </div>
            ))}
          </div>
        )}

        <div className="tour-details">
          <div className="price-duration">
            <div className="tour-price" style={{ color: colors.success }}>
              {price}
            </div>
            <div className="tour-duration" style={{ color: colors.textMuted }}>
              {duration}
            </div>
          </div>

          <a href={to} className="book-button">
            <button
              className="tour-button"
              style={{
                background: `linear-gradient(135deg, ${colors.blueMain}, ${colors.blueDark})`,
              }}
            >
              {buttonText}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TourCard;
