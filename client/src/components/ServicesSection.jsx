import useServicesCarousel from "../hooks/useServicesCarousel.js";
/* import { ChevronLeft, ChevronRight } from 'lucide-react'; // opcional, si usás íconos */

export default function ServicesSection() {
    const { services, trackRef, itemsRef, handlePrev, handleNext } = useServicesCarousel();

    return (
        <>
            <div className="services__container">
                <h2 className="services__title-servi">NUESTROS SERVICIOS</h2>
                <h3 className="services__subtitle-servi">No solo creamos sitios web</h3>
                <p className="services__description-servi">
                    Ofrecemos soluciones digitales y tecnológicas integrales para impulsar el crecimiento de tu negocio.
                </p>
            </div>

            <div className="services__carousel-wrapper">
                <button className="carousel__arrow left" onClick={handlePrev}>
                    {/* Ícono o texto */}
                    ‹
                </button>

                <div className="services__carousel-container" style={{ overflow: "hidden" }}>
                    <div className="services__articles" ref={trackRef}>
                        {services.map((service, index) => (
                            <article
                                key={index}
                                className="services__article"
                                ref={(el) => (itemsRef.current[index] = el)}
                            >
                                <div className="services__icon">
                                    <img className="services__image" src={service.imgSrc} alt={service.imgAlt} />
                                </div>
                                <h2 className="services__title">{service.title}</h2>
                                <p className="services__description" >{service.description}</p>
                                <a href={service.link} className="services__button" target="_blank">Solicitar información</a>
                            </article>
                        ))}
                    </div>
                </div>

                <button className="carousel__arrow right" onClick={handleNext}>
                    {/* Ícono o texto */}
                    ›
                </button>
            </div>
        </>
    );
}
