import { useEffect } from 'react';

// Hook para gestionar la posición del cursor
export default function useCustomCursor() {
    useEffect(() => {
        const cursor = document.querySelector('.cursor');

        const handleMouseMove = (e) => {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        };

        // Añadir el event listener para el movimiento del mouse
        document.addEventListener('mousemove', handleMouseMove);

        // Limpiar el event listener cuando el componente se desmonte
        return () => {
            document.removeEventListener('mousemove', handleMouseMove);
        };
    }, []); // El array vacío asegura que solo se ejecuta una vez al montar
};


