import {
    FaFacebookF,
    FaInstagram,
    FaTwitter,
    FaWhatsapp
} from 'react-icons/fa';
import { SiTelegram, SiVk } from 'react-icons/si';
import { useFooter } from '../../hooks/useFooter';
import './Footer.css';
import type { JSX } from 'react';

interface FooterProps {
    apiUrl?: string;
}

const socialIcons: Record<string, JSX.Element> = {
    whatsapp: <FaWhatsapp />,
    telegram: <SiTelegram />,
    instagram: <FaInstagram />,
    vk: <SiVk />,
    facebook: <FaFacebookF />,
    twitter: <FaTwitter />,
};

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

                        {/* <div className="footer-social">
                            {data.socialLinks.map(link => (
                                <a
                                    key={link.platform}
                                    href={link.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`social ${link.platform}`}
                                >
                                    {socialIcons[link.platform] || null}
                                </a>
                            ))}
                        </div> */}

                    </div>

                    <div className="footer-center">
                        <img
                            src={data.logo?.url}
                            alt={data.logo?.alt}
                            className="footer-logo"
                        />
                    </div>

                    <div className="footer-right">
                        {/* <div className="contact-row">
                            <FaWhatsapp />
                            <span>{data.contact.phoneLabel}:</span>
                            <a
                                href={`https://wa.me/${data.contact.phone.replace(/\D/g, '')}`}
                                target="_blank"
                            >
                                {data.contact.phone}
                            </a>
                        </div> */}

                        <div className="contact-row">
                            <span>{data.contact.emailLabel}:</span>
                            <a href={`mailto:${data.contact.email}`}>
                                {/* {data.contact.email} */}tour@socotra-secrets.com
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
