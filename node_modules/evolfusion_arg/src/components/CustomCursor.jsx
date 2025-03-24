import useCustomCursor from '../hooks/useCustomCursor.js'; // Asegúrate de importar el hook

export default function CustomCursor() {
  useCustomCursor(); // Usar el hook personalizado para el cursor

  return (
    <div className="cursor"></div> // Mantén solo la clase 'cursor' sin agregar estilos aquí
  );
};


