import useTeamMembersWithCarousel from "../hooks/useTeamMembers.js";

export default function AboutSection() {
    const { members, trackRef, itemsRef } = useTeamMembersWithCarousel(); // Usamos el hook combinado

    return (

        <article className="about">
            <div className="about_container">
                <h2 className="about__title">SOBRE NOSOTROS</h2>
                <p className="about__description">
                    Somos un equipo de desarrolladores apasionados por crear diseños web modernos y personalizados.
                    Cada miembro aporta su experiencia única para transformar tus ideas en sitios y aplicaciones web
                    que se adaptan perfectamente a tus necesidades.
                </p>
                <p className="about__description--last">
                    Nuestra misión es impulsar tu empresa o emprendimiento ofreciendo soluciones innovadoras y de
                    vanguardia. Desarrollamos cada proyecto con código 100% puro, sin el uso de plantillas ni
                    plataformas como WordPress. Transformamos tus ideas en realidades digitales únicas, garantizando
                    experiencias de usuario impecables y resultados sobresalientes para tu negocio.
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
