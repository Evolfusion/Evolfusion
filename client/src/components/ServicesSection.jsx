import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { servicesData } from "../data/data"; // Importa los datos

export default function ServicesSection() {
     useEffect(() => {
            AOS.init({ duration: 2000, once: true });
        }, []);
    return (
        <>
            <div className="services__container">
                <h2 className="services__title-servi">NUESTROS SERVICIOS</h2>
                <h3 className="services__subtitle-servi">No solo creamos sitios web</h3>
                <p className="services__description-servi">
                    Desarrollamos estrategias de marketing que impulsan tu visibilidad y optimizan tu retorno de inversión.
                </p>
            </div>
            <div className="services__articles">
                {servicesData.map((service, index) => (
                    <article key={index} className="services__article" data-aos="fade-up">
                        <div className="services__icon">
                            <img className="services__image" src={service.imgSrc} alt={service.imgAlt} />
                        </div>
                        <h2 className="services__title">{service.title}</h2>
                        <p className="services__description">{service.description}</p>
                    </article>
                ))}
            </div>
        </>
    );
}
