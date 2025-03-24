import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {CardsPlanes} from '../data/data';

export default function CardsSection() {
    useEffect(() => {
                AOS.init({ duration: 2000, once: true });
            }, []);
    return (
        <>
            <div className="cards__quote">
                <h2 className="cards__quote-title">COTIZACIÓNES A MEDIDA</h2>
                <h3 className="cards__quote-subtitle">Eligí tu plan</h3>
            </div>
            <div className="cards__container">
                <div className="cards__subcontainer">
                    {CardsPlanes.map((plan) =>(
                        <article key={plan.id} className="cards__item" data-aos="fade-up">
                        <div className="cards__container-title">
                            <h3 className="cards__item-title">{plan.title}</h3>
                        </div>
                        <ul className="cards__list">
                            {Object.keys(plan.features).map((key)=>(
                                <li key={key} className="cards__list-item">
                                <i className="fa-solid fa-check"></i> {plan.features[key]}
                            </li>
                            ))}
                        </ul>
                        <div className="cards__container-button">
                            <a href={plan.link}
                                aria-label={`Solicitar información sobre ${plan.title}`}
                                className="cards_button-item"
                                target='_blank'>
                                Solicitar información
                            </a>
                        </div>
                    </article>
                    ))}
                </div>
            </div>
        </>
    );
}