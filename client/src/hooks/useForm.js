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

    try {
      // Primera petición fetch
      const response1 = await fetch('http://localhost:3000/api/info', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data1 = await response1.json();
      console.log('Respuesta API Info:', data1);

      // Segunda petición fetch
      const response2 = await fetch('http://localhost:3000/send-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data2 = await response2.json();
      console.log('Respuesta API Send-Form:', data2);
      
      setFormData({
        name: '',
        lastname: '',
        tel: '',
        email: '',
        message: '',
      });
    } catch (error) {
      console.error('Error en la solicitud:', error);
    }
  };

  return { formData, handleChange, handleSubmit };
}
