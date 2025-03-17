import { useState, useEffect } from "react";
//LOGICA

export default function useMenu() {
    //*Destructuring de objetos
    //Esto permite acceder a las propiedades de un objeto
    //Estado   y  Función
    const [isOpen, setIsOpen] = useState(false);

    // Función para alternar el estado del menú
    const toggleMenu = (event) => {
        event.stopPropagation(); // Evita que el evento se propague
        setIsOpen(!isOpen);
         //*Operador ternario
        /* console.log(isOpen ? "Cerrado" : "Abierto"); */
    };

    // Cierra el menú si se hace clic fuera de él
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (!event.target.closest('.nav')) {
                setIsOpen(false); // Cierra el menú si clicas fuera
            }
        };
        document.addEventListener('click', handleClickOutside);
        return () => {
            document.removeEventListener('click', handleClickOutside);
        };
    }, []);

    return [isOpen, toggleMenu]; // Retorna el estado y la función
}


