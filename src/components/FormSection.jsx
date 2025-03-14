import { links } from "../data/data";

export default function FormSection() {
    return (
        <>
            <div className="links">
                <div className="links__container1">
                    {links.slice(0, 2).map((link, index) => (
                        <address key={index} className="links__container">
                            <i className={link.icon}></i>
                            <h2 className="link__title">{link.title}</h2>
                            <a target="_blank" href={link.url} aria-label={link.label}>
                                <p className="link__information">{link.info}</p>
                            </a>
                        </address>
                    ))}
                </div>
                <div className="links__container2">
                    {links.slice(2).map((link, index) => (
                        <address key={index} className="links__container">
                            <i className={link.icon}></i>
                            <h2 className="link__title">{link.title}</h2>
                            <a target="_blank" href={link.url} aria-label={link.label}>
                                <p className="link__information">{link.info}</p>
                            </a>
                        </address>
                    ))}
                </div>
            </div>
            <article className="form" id="contact">
                <div className="form__container">
                    <form action="#" method="post" autoComplete="off">
                        <div className="form__grupo">
                            <input type="text" name="name" id="name" placeholder="Nombre" />
                        </div>
                        <div className="form__grupo">
                            <input type="text" name="lastname" id="lastname" placeholder="Apellido" />
                        </div>
                        <div className="form__grupo">
                            <input type="tel" name="tel" id="tel" placeholder="Teléfono" />
                        </div>
                        <div className="form__grupo">
                            <input type="email" name="email" id="email" placeholder="Email" />
                        </div>
                        <div className="form__grupo">
                            <textarea className="form__message" name="message" id="message" placeholder="Mensaje"></textarea>
                        </div>
                        <div className="form__btn">
                            <button type="submit" value="#">Solicitar asesoramiento</button>
                        </div>
                    </form>
                </div>
            </article>
        </>
    );
}