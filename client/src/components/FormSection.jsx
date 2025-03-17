import { links } from "../data/data";
import useForm from "../hooks/useForm";

export default function FormSection() {
    const { formData, handleChange, handleSubmit } = useForm();  // Usamos el hook
  
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
            <form onSubmit={handleSubmit} autoComplete="off">
              <div className="form__grupo">
                <input
                  type="text"
                  name="name"
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Nombre"
                />
              </div>
              <div className="form__grupo">
                <input
                  type="text"
                  name="lastname"
                  id="lastname"
                  value={formData.lastname}
                  onChange={handleChange}
                  placeholder="Apellido"
                />
              </div>
              <div className="form__grupo">
                <input
                  type="tel"
                  name="tel"
                  id="tel"
                  value={formData.tel}
                  onChange={handleChange}
                  placeholder="Teléfono"
                />
              </div>
              <div className="form__grupo">
                <input
                  type="email"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email"
                />
              </div>
              <div className="form__grupo">
                <textarea
                  className="form__message"
                  name="message"
                  id="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Mensaje"
                />
              </div>
              <div className="form__btn">
                <button type="submit">Solicitar asesoramiento</button>
              </div>
            </form>
          </div>
        </article>
      </>
    );
  }