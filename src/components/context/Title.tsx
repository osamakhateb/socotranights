import colors from "../../colors";
import plusIcon from "../../../public/assets/images/logo/logo.png";
import closeIcon from "../../../public/assets/images/logo/logo.png";

interface FaqItemProps {
    question: string;
    answer: string;
    isOpen: boolean;
    onToggle: () => void;
}

const FaqItem: React.FC<FaqItemProps> = ({
    question,
    answer,
    isOpen,
    onToggle,
}) => {
    return (
        <div
            className="faq-item"
            style={{
                border: `1px solid ${colors.primary}`,
                background: isOpen ? colors.lightBg : colors.primary,
            }}
        >
            <div className="faq-header" onClick={onToggle}>
                <h3
                    className="faq-question"
                    style={{ color: colors.textDark }}
                >
                    {question}
                </h3>

                <button className="faq-toggle">
                    <img
                        src={isOpen ? closeIcon : plusIcon}
                        alt="toggle"
                        className="faq-toggle-icon"
                    />
                </button>
            </div>

            {isOpen && (
                <p
                    className="faq-answer"
                    style={{ color: colors.textGray }}
                >
                    {answer}
                </p>
            )}
        </div>
    );
};

export default FaqItem;
