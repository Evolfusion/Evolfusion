import useTeamMembersWithCarousel from "../hooks/useTeamMembers.js";

export default function AboutSection() {
    const { members, trackRef, itemsRef } = useTeamMembersWithCarousel(); // Usamos el hook combinado

    return (

        <article className="about">
            <div className="about_container">
                <h2 className="about__title">SOBRE NOSOTROS</h2>
                <p className="about__description">
                Somos un equipo apasionado por crear soluciones digitales modernas, auténticas y funcionales. Nos inspira la innovación, la tecnología y el compromiso con cada cliente. Escuchamos tus ideas, las transformamos en proyectos únicos y te acompañamos desde el inicio hasta después del lanzamiento.
                </p>
                <p className="about__description--last">
                También resolvemos problemas técnicos, reparamos tus equipos y te orientamos para que tomes decisiones digitales acertadas sin pagar de más. Trabajamos sin plantillas, con atención personalizada y un enfoque real en lo que tu negocio necesita.
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
