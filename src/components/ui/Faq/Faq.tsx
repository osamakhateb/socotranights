import { useEffect, useState } from "react";
import FaqItem from "../../context/Title";
import colors from "../../../colors";
import FaqData from "../../../data/home";
import "./Faq.css";

export interface Faq {
    question: string;
    answer: string;
}

const Faq: React.FC = () => {
    /*  const [faqs, setFaqs] = useState<Faq[]>(FaqData); 
     const [openIndex, setOpenIndex] = useState<number | null>(null);
     const [loading, setLoading] = useState<boolean>(false);
     const [error, setError] = useState<string | null>(null); */
    const [faqs] = useState<Faq[]>(FaqData);
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [loading] = useState<boolean>(false);
    const [error] = useState<string | null>(null);

    useEffect(() => {
        //  لما نضيف API  فك التعليق واحذف FaqData من useState
        /*
        const fetchFaqs = async () => {
            try {
            setLoading(true);
            const res = await fetch("/api/faqs");
    
            if (!res.ok) {
                throw new Error("Failed to fetch FAQs");
            }
    
            const data: Faq[] = await res.json();
            setFaqs(data);
            } catch (err) {
            setError("Something went wrong");
            } finally {
            setLoading(false);
            }
        };
    
        fetchFaqs();
        */
    }, []);

    const handleToggle = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <section className="faq-container">
            <div className="faq-content">

                <div className="faq-left-section">
                    <div className="faq-intro">
                        <h1
                            className="faq-main-title"
                            style={{ color: colors.textDark }}
                        >
                            How To Get To Socotra
                        </h1>

                        <h2
                            className="faq-subtitle"
                            style={{ color: colors.textMuted }}
                        >
                            Flights & Travel Tips
                        </h2>
                    </div>

                    {loading && <p>Loading...</p>}
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
                        src="/assets/images/hero/SocotraSection.jpg"
                        alt="Socotra"
                        className="faq-image"
                    />
                </div>

            </div>
        </section>
    );
};

export default Faq;
