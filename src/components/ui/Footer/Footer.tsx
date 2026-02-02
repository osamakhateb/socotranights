import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaWhatsapp
} from 'react-icons/fa';
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
                    {/* LEFT */}
                    <div className="footer-left">
                        <p className="footer-description">
                            {data.title}
                        </p>

                        <div className="footer-social">
                            {data.socialLinks.map(link => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social ${link.platform}`}
                                >
                                    {link.platform === 'facebook' && <FaFacebookF />}
                                    {link.platform === 'instagram' && <FaInstagram />}
                                    {link.platform === 'twitter' && <FaTwitter />}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* CENTER */}
                    <div className="footer-center">
                        <img
                            src={data.logo?.url}
                            alt={data.logo?.alt}
                            className="footer-logo"
                        />
                    </div>

                    {/* RIGHT */}
                    <div className="footer-right">
                        <div className="contact-row">
                            <FaWhatsapp />
                            <span>{data.contact.phoneLabel}:</span>
                            <a
                                href={`https://wa.me/${data.contact.phone.replace(/\D/g, '')}`}
                                target="_blank"
                            >
                                {data.contact.phone}
                            </a>
                        </div>

                        <div className="contact-row">
                            <span>{data.contact.emailLabel}:</span>
                            <a href={`mailto:${data.contact.email}`}>
                                {data.contact.email}
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
