import { useEffect, useState } from "react";
import FaqItem from "../../context/Title";
import colors from "../../../colors";
import { FaqData, FaqSectionData } from "../../../data/home";
import "./Faq.css";

export interface Faq {
    question: string;
    answer: string;
}

interface FaqProps {
    language: 'en' | 'ru';
}

const Faq: React.FC<FaqProps> = ({ language }) => {
    const [faqs, setFaqs] = useState<Faq[]>([]);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [loading] = useState<boolean>(false);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        // Load FAQs based on language
        setFaqs(FaqData[language]);
    }, [language]);

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    const sectionData = FaqSectionData[language];

    return (
        <section className="faq-container">
            <div className="faq-content">

                <div className="faq-left-section">
                    <div className="faq-intro">
                        <h1
                            className="faq-main-title"
                            style={{ color: colors.textDark }}
                        >
                            {sectionData.mainTitle}
                        </h1>

                        <h2
                            className="faq-subtitle"
                            style={{ color: colors.textMuted }}
                        >
                            {sectionData.subtitle}
                        </h2>
                    </div>

                    {loading && <p>{language === 'en' ? 'Loading...' : 'Загрузка...'}</p>}
                    {error && <p>{error}</p>}

                    {!loading && !error && (
                        <div className="faq-questions">
                            {faqs.slice(0, 3).map((faq, index) => (
                                <FaqItem
                                    key={index}
                                    question={faq.question}
                                    answer={faq.answer}
                                    isOpen={openIndex === index}
                                    onToggle={() => handleToggle(index)}
                                />
                            ))}
                        </div>
                    )}
                </div>

                <div className="faq-right-section">
                    <img
                        src="/assets/images/hero/faq.jpg"
                        alt={language === 'en' ? "Socotra" : "Сокотра"}
                        className="faq-image"
                    />
                </div>

            </div>
        </section>
    );
};

export default Faq;