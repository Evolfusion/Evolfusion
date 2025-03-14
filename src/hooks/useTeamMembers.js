import { useState, useEffect, useRef } from "react";
import {teamMembers} from "../data/data"

const useTeamMembersWithCarousel = () => {
    const [members, setMembers] = useState([]);
    const trackRef = useRef(null); // Referencia al contenedor del carrusel
    const itemsRef = useRef([]); // Array de referencias a cada item del carrusel

    useEffect(() => {
        // Carga los miembros del equipo cuando el componente se monta
        setMembers(teamMembers);
    }, []);

    useEffect(() => {
        const track = trackRef.current;
        const items = itemsRef.current;
        const totalItems = items.length;
        let currentIndex = 0;

        // Si no hay elementos, no ejecutar la lógica del carrusel
        if (totalItems === 0) return;

        // Duplicamos los nodos para hacer el efecto infinito
        items.forEach(item => {
            const clone = item.cloneNode(true);
            track.appendChild(clone);
        });

        // Función para mover el carrusel
        const moveCarousel = () => {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * (items[0].offsetWidth + parseInt(getComputedStyle(items[0]).marginRight) * 2)}px)`;

            // Si llegamos al último elemento, reiniciamos la posición
            if (currentIndex >= totalItems) {
                setTimeout(() => {
                    track.style.transition = 'none';
                    currentIndex = 0;
                    track.style.transform = `translateX(0)`;
                    setTimeout(() => {
                        track.style.transition = 'transform 0.8s ease-in-out';
                    }, 50);
                }, 800);
            }
        };

        // Mueve el carrusel cada 3 segundos
        const interval = setInterval(moveCarousel, 3000);

        // Limpiar el intervalo cuando el componente se desmonte
        return () => clearInterval(interval);
    }, [members]); // Solo ejecuta la lógica del carrusel cuando cambian los miembros

    return { members, trackRef, itemsRef };
};

export default useTeamMembersWithCarousel;
