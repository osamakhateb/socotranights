/* 
import { useFooter } from '../../hooks/useFooter';
import './Footer.css';
interface FooterProps {
    apiUrl?: string;
}

const Footer: React.FC<FooterProps> = ({ apiUrl }) => {
    const { data } = useFooter(apiUrl);

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-left">
                        <p className="footer-description">
                            {data.title}
                        </p>

                    

                    </div>

                    <div className="footer-center">
                        <img
                            src={data.logo?.url}
                            alt={data.logo?.alt}
                            className="footer-logo"
                        />
                    </div>

                    <div className="footer-right">
                    

                        <div className="contact-row">
                            <span>{data.contact.emailLabel}:</span>
                            <a href={`mailto:${data.contact.email}`}>
                            tour@socotra-secrets.com
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <span>{data.copyrightText}</span>

                    <div className="footer-links">
                        <a href="/terms">{data.links.terms}</a>
                        <span>|</span>
                        <a href="/privacy">{data.links.privacy}</a>
                        <span>|</span>
                        <span>{data.links.developer}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;
 */

// components/ui/Footer/Footer.tsx
import { useFooter } from '../../hooks/useFooter';
import './Footer.css';

interface FooterProps {
    apiUrl?: string;
    language: 'en' | 'ru';
}

const Footer: React.FC<FooterProps> = ({ apiUrl, language }) => {
    const { data } = useFooter({ apiUrl, language });

    if (!data) return null;

    // اختيار النصوص حسب اللغة
    const title = language === 'en' ? data.title_en : data.title_ru;
    const buttonText = language === 'en' ? data.buttonText_en : data.buttonText_ru;
    const phoneLabel = language === 'en' ? data.contact.phoneLabel_en : data.contact.phoneLabel_ru;
    const emailLabel = language === 'en' ? data.contact.emailLabel_en : data.contact.emailLabel_ru;
    const copyrightText = language === 'en' ? data.copyrightText_en : data.copyrightText_ru;
    const termsText = language === 'en' ? data.links.terms_en : data.links.terms_ru;
    const privacyText = language === 'en' ? data.links.privacy_en : data.links.privacy_ru;
    const developerText = language === 'en' ? data.links.developer_en : data.links.developer_ru;
    const logoAlt = language === 'en' ? data.logo?.alt_en : data.logo?.alt_ru;

    return (
        <footer className="footer">
            <div className="footer-container">

                <div className="footer-top">
                    <div className="footer-left">
                        <p className="footer-description">
                            {title}
                        </p>
                    </div>

                    <div className="footer-center">
                        <img
                            src={data.logo?.url}
                            alt={logoAlt || ''}
                            className="footer-logo"
                        />
                    </div>

                    <div className="footer-right">
                        <div className="contact-row">
                            <span>{emailLabel}:</span>
                            <a href={`mailto:${data.contact.email}`}>
                                {data.contact.email}
                            </a>
                        </div>
                    </div>
                </div>

                <div className="footer-divider" />

                <div className="footer-bottom">
                    <span>{copyrightText}</span>

                    <div className="footer-links">
                        <a href={data.links.termsUrl || '/terms'}>{termsText}</a>
                        <span>|</span>
                        <a href={data.links.privacyUrl || '/privacy'}>{privacyText}</a>
                        <span>|</span>
                        <span>{developerText}</span>
                    </div>
                </div>

            </div>
        </footer>
    );
};

export default Footer;