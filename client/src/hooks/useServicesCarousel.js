import { useState, useEffect, useRef } from "react";
import { servicesData } from "../data/data";

const useServicesCarousel = () => {
  const [services, setServices] = useState([]);
  const trackRef = useRef(null);
  const itemsRef = useRef([]);
  const currentIndex = useRef(0);
  const itemWidthRef = useRef(0);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeftStart = useRef(0);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const items = itemsRef.current;
    if (!track || items.length === 0) return;

    const originals = [...items];
    const total = originals.length;

    // Clonar solo al final para hacer loop infinito
    originals.forEach(item => {
      track.appendChild(item.cloneNode(true));
    });

    // Obtener ancho de ítem
    itemWidthRef.current = originals[0].offsetWidth + parseInt(getComputedStyle(originals[0]).marginRight);

    // Iniciar scroll en 0
    track.scrollLeft = 0;
    currentIndex.current = 0;

    // Evento scroll para loop infinito
    const handleScroll = () => {
      if (track.scrollLeft >= itemWidthRef.current * total) {
        // Cuando pasa la última tarjeta original, salta al inicio sin animación
        track.style.scrollBehavior = "auto";
        track.scrollLeft = 0;
        track.style.scrollBehavior = "smooth";
        currentIndex.current = 0;
      }
    };

    track.addEventListener("scroll", handleScroll);

    // Autoplay para avanzar una tarjeta cada 5 segundos
    const moveCarousel = () => {
      currentIndex.current++;
      if (currentIndex.current > total) {
        currentIndex.current = 1; // Si pasa total, salto manual
        track.style.scrollBehavior = "auto";
        track.scrollLeft = 0;
        track.style.scrollBehavior = "smooth";
      }
      track.scrollTo({
        left: currentIndex.current * itemWidthRef.current,
        behavior: "smooth",
      });
    };

    const interval = setInterval(moveCarousel, 5000);

    return () => {
      clearInterval(interval);
      track.removeEventListener("scroll", handleScroll);
    };
  }, [services]);

  // Swipe táctil y mouse para scroll manual
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const startDrag = (pageX) => {
      isDragging.current = true;
      startX.current = pageX - track.offsetLeft;
      scrollLeftStart.current = track.scrollLeft;
    };

    const duringDrag = (pageX, e) => {
      if (!isDragging.current) return;
      e.preventDefault();
      const x = pageX - track.offsetLeft;
      const walk = x - startX.current;
      track.scrollLeft = scrollLeftStart.current - walk;
    };

    const stopDrag = () => {
      isDragging.current = false;
    };

    track.addEventListener("mousedown", e => startDrag(e.pageX));
    track.addEventListener("mousemove", e => duringDrag(e.pageX, e));
    track.addEventListener("mouseup", stopDrag);
    track.addEventListener("mouseleave", stopDrag);

    track.addEventListener("touchstart", e => startDrag(e.touches[0].pageX), { passive: false });
    track.addEventListener("touchmove", e => duringDrag(e.touches[0].pageX, e), { passive: false });
    track.addEventListener("touchend", stopDrag);
    track.addEventListener("touchcancel", stopDrag);

    return () => {
      track.removeEventListener("mousedown", e => startDrag(e.pageX));
      track.removeEventListener("mousemove", e => duringDrag(e.pageX, e));
      track.removeEventListener("mouseup", stopDrag);
      track.removeEventListener("mouseleave", stopDrag);

      track.removeEventListener("touchstart", e => startDrag(e.touches[0].pageX));
      track.removeEventListener("touchmove", e => duringDrag(e.touches[0].pageX, e));
      track.removeEventListener("touchend", stopDrag);
      track.removeEventListener("touchcancel", stopDrag);
    };
  }, []);

  // Flechas que avanzan / retroceden el scroll 1 item
  const handlePrev = () => {
    const track = trackRef.current;
    currentIndex.current = Math.max(0, currentIndex.current - 1);
    track.scrollTo({
      left: currentIndex.current * itemWidthRef.current,
      behavior: "smooth",
    });
  };

  const handleNext = () => {
    const track = trackRef.current;
    const total = itemsRef.current.length;
    currentIndex.current++;
    if (currentIndex.current > total) {
      currentIndex.current = 1;
      track.style.scrollBehavior = "auto";
      track.scrollLeft = 0;
      track.style.scrollBehavior = "smooth";
    }
    track.scrollTo({
      left: currentIndex.current * itemWidthRef.current,
      behavior: "smooth",
    });
  };

  return {
    services,
    trackRef,
    itemsRef,
    handlePrev,
    handleNext,
  };
};

export default useServicesCarousel;
