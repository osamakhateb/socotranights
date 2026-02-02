import React from 'react';
import { useTripInfo } from '../../hooks/useTripInfo';
import './TripInfo.css';

const IncludedIcon = () => <span className="title-icon">✓</span>;
const NotIncludedIcon = () => <span className="title-icon">✕</span>;

const TripInfo: React.FC = () => {
    const { data } = useTripInfo();

    if (!data) return null;

    return (
        <section className="trip-info-section">
            <div className="trip-info-container">

                <h2 className="trip-info-main-title">
                    {data.title}
                </h2>

                <div className="trip-info-grid">

                    <div className="trip-column">
                        <h3 className="section-title with-icon">
                            <IncludedIcon />
                            {data.sections.included.title}
                        </h3>

                        <ul className="info-list">
                            {data.sections.included.items.map(item => (
                                <li key={item.id} className="info-item">
                                    <span className="icon check">✓</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="trip-column">
                        <h3 className="section-title with-icon">
                            <NotIncludedIcon />
                            {data.sections.notIncluded.title}
                        </h3>

                        <ul className="info-list">
                            {data.sections.notIncluded.items.map(item => (
                                <li key={item.id} className="info-item">
                                    <span className="icon cross">✕</span>
                                    <span>{item.text}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="assistance-box side">
                            <h4>{data.assistance.title}</h4>
                            <p>{data.assistance.description}</p>
                            <button>
                                {data.assistance.buttonText}
                            </button>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default TripInfo;
