import { useState } from "react";
import emailjs from "emailjs-com";

export default function useForm() {
  const [formData, setFormData] = useState({
    name: "",
    lastname: "",
    tel: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async () => {
    const { name, lastname, tel, email, message } = formData;

    // Validación de campos vacíos
    if (!name || !lastname || !tel || !email || !message) {
      alert("Por favor, completa todos los campos.");
      return false; // Para indicar error
    }

    try {
      await emailjs.send(
        "evolfusion_ar1234",   // Reemplaza con tu Service ID
        "template_evolfusion",  // Reemplaza con tu Template ID
        {
          name: formData.name,
          lastname: formData.lastname,
          tel: formData.tel,
          email: formData.email,
          message: formData.message,
        },
        "YXUA4C14a2k6fzJMh"    // Reemplaza con tu Public Key
      );

      // Limpiar el formulario
      setFormData({
        name: "",
        lastname: "",
        tel: "",
        email: "",
        message: "",
      });

      return true; // Éxito
    } catch (error) {
      console.error("Error al enviar:", error);
      return false; // Error
    }
  };

  return { formData, handleChange, handleSubmit };
}
