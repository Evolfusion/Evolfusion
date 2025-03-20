import { useState } from "react";
import { links } from "../data/data";
import useForm from "../hooks/useForm";

export default function FormSection() {
  const { formData, handleChange, handleSubmit } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);

  // Función para validar que los campos no estén vacíos
  const isFormValid = () => {
    return (
      formData.name.trim() !== "" &&
      formData.lastname.trim() !== "" &&
      formData.tel.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  };

  // Manejar el envío del formulario
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (!isFormValid()) {
      setIsErrorModalOpen(true); // Muestra modal de error si hay campos vacíos
      return;
    }

    await handleSubmit(e); // Llamamos a la función de envío solo si el formulario es válido
    setIsModalOpen(true); // Mostramos la modal de éxito
  };

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
          <form onSubmit={handleFormSubmit} autoComplete="off">
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
 {/* Modal de éxito */}
 {isModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <h2 className="modal__title">¡Mensaje enviado!</h2>
            <p className="modal__description">Gracias por contactarnos. Nos comunicaremos contigo a la brevedad.</p>
            <button onClick={() => setIsModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}

      {/* Modal de error */}
      {isErrorModalOpen && (
        <div className="modal">
          <div className="modal__content">
            <h2 className="modal__title">¡Faltan datos!</h2>
            <p className="modal__description">Por favor, completa todos los campos antes de enviar el formulario.</p>
            <button onClick={() => setIsErrorModalOpen(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </>
  );
}
