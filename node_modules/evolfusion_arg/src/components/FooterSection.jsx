import { Footer } from "../data/data"; 

export default function FooterSection() {
    return (
        <footer className="footer">
            <div className="footer__data">
                <div className="footer__start">
                    <img className="footer__logo" src="img/logo-sin-fondo.png" alt="Logo Evolfusion" />
                    <div className="footer__information">
                        <p className="footer__text">
                            Somos un equipo apasionado por el desarrollo web, creando soluciones digitales a medida para impulsar tu negocio. ¡Hablemos y hagámoslo realidad!
                        </p>
                        <div className="footer__socialMedia">
                            {Footer.socialLinks.map((link, index) => (
                                <a key={index} target="_blank" href={link.href}>
                                    <img className={`footer__icon${index + 1}`} src={link.src} alt={link.alt} />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="footer__end">
                    {Footer.contactLinks.map((info, index) => (
                        <div key={index} className={info.label === "UBICACIÓN" ? "footer__ubication" : "footer__contact"}>
                            <h2 className="footer__title">{info.label}</h2>
                            <p className="footer__text">
                                <a target="_blank" href={info.href} aria-label={info.label}>
                                    {info.text}
                                </a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="btns">
                <a href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa optener mas información" target="_blank" aria-label="WhatsApp">
                    <i className="fa-brands fa-whatsapp footer__whatsapp"></i>
                </a>
            </div>
            <div className="footer__author">
                <p>© 2025 Evolfusion derechos de autor</p>
            </div>
        </footer>
    );
}
