import { teamMembers, Footer } from "../data/data";

export default function AboutSection() {
    return (
        <article className="about">
            <div className="about_container">
                <div className="about__company">
                    <h2 className="about__title">NUESTRA EMPRESA</h2>
                    <p className="about__description">
                        Evolfusion crea sitios web modernos y personalizados para que negocios y emprendedores se destaquen en el mundo digital, ofreciendo además otros servicios digitales diseñados para potenciar su presencia online.
                    </p>
                    <p className="about__description--last">
                        Nuestra misión es impulsar empresas y emprendimientos ofreciendo soluciones digitales integrales, que incluyen desarrollo web, marketing, diseño, gestión de redes y otros servicios pensados para potenciar su crecimiento y presencia online.
                    </p>
                </div>
                <div className="about__socialMedia">
                    {Footer.socialLinks.map((link, index) => (
                        <a key={index} target="_blank" href={link.href}>
                            <img className={`about__icon${index + 1}`} src={link.src} alt={link.alt} />
                        </a>
                    ))}
                </div>
            </div>
            <div className="about__img-container">
                {teamMembers.map(({ id, name, role, imgSrc, alt }) => (
                    <div key={id} className="about__img-container--left">
                        <img src={imgSrc} alt={alt} className="about__img" />
                        <h2 className="about__name">{name}</h2>
                        <span className="about__ability">{role}</span>
                    </div>
                ))}
            </div>
        </article>
    );
}