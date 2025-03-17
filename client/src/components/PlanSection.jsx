import { planFeatures } from "../data/data";

export default function Plan() {
    return (

        <article className="plan__container">
            <h2 className="plan__title">CREA TU PLAN PERSONALIZADO</h2>
            <h3 className="plan__subtitle">Tus proyectos, tus reglas</h3>
            <p className="plan__text"> Si nuestros planes no se ajustan a lo que buscas, ¡estamos listos para crear uno específicamente para ti! Personaliza tu plan eligiendo solo los servicios que necesitas, y nosotros te brindamos una propuesta a medida para hacer realidad tu visión.</p>
            <ul className="plan__list">
                {planFeatures.map((plan, index) =>
                    <li key={index} className="plan__list-item">
                        <i className="fa-solid fa-check"></i>{plan}
                    </li>
                )}
            </ul>
            <p className="plan__subtitle--last"> ¡Contactanos y crea tu plan perfecto hoy! </p>
            <a href="https://api.whatsapp.com/send?phone=541127728592&text=¡Hola!%20Me%20gustaría%20crear%20un%20Plan%20Personalizado%20para%20mi%20proyecto%20y%20recibir%20asesoramiento%20para%20elegir%20los%20servicios%20que%20mejor%20se%20adapten%20a%20mis%20necesidades.%20%F0%9F%9A%80" aria-label="Solicitar información para crear un Plan Personalizado" className="plan__button " target="_blank">
                Solicitar cotización
            </a>
        </article>

    );
}