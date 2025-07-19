import useTeamMembersWithCarousel from "../hooks/useTeamMembers.js";

export default function AboutSection() {
    const { members, trackRef, itemsRef } = useTeamMembersWithCarousel(); // Usamos el hook combinado

    return (

        <article className="about">
            <div className="about_container">
                <h2 className="about__title">NUESTRA EMPRESA</h2>
                <p className="about__description">
                Evolfusion crea sitios web modernos y personalizados para que negocios y emprendedores se destaquen en el mundo digital, ofreciendo además otros servicios digitales diseñados para potenciar su presencia online.
                </p>
                <p className="about__description--last">
                Nuestra misión es impulsar empresas y emprendimientos ofreciendo soluciones digitales integrales, que incluyen desarrollo web, marketing, diseño, gestión de redes y otros servicios pensados para potenciar su crecimiento y presencia online.
                </p>
            </div>

            <div className="about__img-container">
                <div className="about__img-track" ref={trackRef}>
                    {members.map(({ id, name, role, imgSrc, alt }, index) => (
                        <div
                            key={id}
                            className="about__img-container--left"
                            ref={(el) => (itemsRef.current[index] = el)}
                        >
                            <img src={imgSrc} alt={alt} className="about__img" />
                            <h2 className="about__name">{name}</h2>
                            <span className="about__ability">{role}</span>
                        </div>
                    ))}
                </div>
            </div>
        </article>

    );
}
