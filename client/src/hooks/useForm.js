import { useState } from 'react';

export default function useForm() {
  const [formData, setFormData] = useState({
    name: '',
    lastname: '',
    tel: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Validación de campos vacíos
    const { name, lastname, tel, email, message } = formData;
    if (!name || !lastname || !tel || !email || !message) {
      alert('Please fill all the fields');
      return;
    }

    console.log('Info a enviar:', formData);

    // Realizar el fetch para enviar los datos
    try {
      const response = await fetch('http://localhost:5000/api/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      const data = await response.json();
      console.log('Respuesta:', data);
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
};


