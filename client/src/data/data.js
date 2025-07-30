// data.js
export const navItems = [
  { id: 1, href: "#home", icon: "fa-solid fa-house", label: "Inicio" },
  { id: 2, href: "#we", icon: "fa-solid fa-users", label: "Sobre nosotros" },
  { id: 3, href: "#services", icon: "fa-solid fa-earth-americas", label: "Servicios" },
  { id: 4, href: "#planes", icon: "fa-regular fa-clipboard", label: "Planes" },
  { id: 5, href: "#contact", icon: "fa-solid fa-envelope", label: "Contacto", disabled: true }
];
export const servicesData = [
  {
    id: 1,
    title: "DISEÑO WEB",
    description: "Creamos diseños modernos, funcionales y personalizados para tu negocio. Desde sitios web hasta logos y flyers, nos enfocamos en la estética, usabilidad y optimización para garantizar una identidad visual coherente y atractiva.",
    imgSrc: "./img/icon/web-design.png",
    imgAlt: "DISEÑO WEB"
  },
  {
    id: 2,
    title: "SITIOS WEB PROFESIONALES",
    description: "Desarrollamos sitios web y landing pages personalizados, optimizados para convertir visitantes en clientes. Combinamos diseño atractivo, navegación fluida y estrategia digital para que tu presencia online sea impactante, funcional y alineada a tus objetivos de negocio.",
    imgSrc: "./img/icon/web-profesionales.png",
    imgAlt: "SITIOS WEB PROFESIONALES"
  },
  {
    id: 3,
    title: "SOPORTE Y MANTENIMIENTO",
    description: "Ofrecemos mantenimiento continuo para asegurar que tu sitio web funcione sin problemas. Desde actualizaciones de seguridad hasta mejoras en rendimiento y solución de errores, nos encargamos de mantener tu web siempre operativa y optimizada.",
    imgSrc: "./img/icon/support.png",
    imgAlt: "SOPORTE Y MANTENIMIENTO"
  },
  {
    id: 4,
    title: "SERVIDOR Y DOMINIO",
    description: "Gestionamos tu dominio y alojamiento web para que tengas presencia online estable y segura. Nos encargamos de configuraciones técnicas, renovaciones, correos profesionales y todo lo necesario para que tu sitio esté siempre disponible.",
    imgSrc: "./img/icon/landing-pages.png",
    imgAlt: "DISEÑO DE LANDING PAGES"
  },
  {
    id: 5,
    title: "DISEÑO GRAFICO",
    description: "Creamos piezas visuales que representan la identidad de tu marca. Desde logos hasta flyers, banners y más, nuestro diseño gráfico comunica profesionalismo y creatividad en cada detalle.",
    imgSrc: "./img/icon/support.png",
    imgAlt: "SOPORTE Y MANTENIMIENTO"
  },
  {
    id: 6,
    title: "MARKETING DIGITAL",
    description: "Impulsamos tu negocio con estrategias digitales enfocadas en resultados. Publicidad online, posicionamiento, campañas efectivas y análisis de datos para atraer más clientes y aumentar tus ventas.",
    imgSrc: "./img/icon/support.png",
    imgAlt: "SOPORTE Y MANTENIMIENTO"
  },
  {
    id: 7,
    title: "COMMUNITY MANAGER",
    description: "Administramos tus redes sociales con contenido estratégico y creativo. Construimos una comunidad activa alrededor de tu marca, generando interacción real y mejorando tu presencia digital día a día.",
    imgSrc: "./img/icon/support.png",
    imgAlt: "SOPORTE Y MANTENIMIENTO"
  },
  {
    id: 8,
    title: "REPARACIÓN DE COMPUTADORAS",
    description: "Solucionamos problemas técnicos en computadoras de escritorio y notebooks. Ofrecemos diagnóstico sin costo, reparación de hardware y software, optimización del sistema y atención personalizada.",
    imgSrc: "./img/icon/support.png",
    imgAlt: "SOPORTE Y MANTENIMIENTO"
  },
  {
  id: 9,
  title: "REPARACIÓN DE CELULARES",
  description: "Reparamos todo tipo de celulares: cambio de pantallas, baterías, conectores de carga, y resolución de problemas de software. Ofrecemos diagnóstico sin costo, repuestos originales y garantía en todas nuestras reparaciones.",
  imgSrc: "./img/icon/mobile-repair.png",
  imgAlt: "REPARACIÓN DE CELULARES"
}
];

export const teamMembers = [
  {
    id: 1,
    name: "Erik Salinas",
    role: "Front-end | Marketing",
    imgSrc: "img/perfil-erik.png",
    alt: "Programador Front-end Erik"
  },
  {
    id: 2,
    name: "Victoria Rios",
    role: "Back-end | UX-UI",
    imgSrc: "img/perfil-vicky.jpg",
    alt: "Programadora Back-end Victoria"
  },
  {
    id: 3,
    name: "Lola Costich",
    role: "Analista de sistemas",
    imgSrc: "img/perfil-lola.png",
    alt: "Analista de sistemas Lola"
  },
  {
    id: 4,
    name: "Abril Botello",
    role: "Diseñadora gráfica",
    imgSrc: "img/perfil-abril.jpg",
    alt: "Diseñadora gráfica Abril"
  }
];
export const CardsPlanes = [
  {
    id: 1,
    title: "DISEÑO WEB",
    features: {
      feature1: "Creación de sitios web modernos y funcionales.",
      feature2: "Diseño de identidad visual (logos y branding).",
      feature3: "Diseño de flyers, banners y material gráfico publicitario.",
      feature4: "Optimización de diseño para usabilidad y experiencia de usuario (UX/UI).",
      feature5: "Adaptación de diseños para web y redes sociales."
    },
    link: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola!%20Estoy%20interesado%20en%20el%20Plan%20de%20Diseño%20Web%20y%20me%20gustaría%20recibir%20más%20información.%20%F0%9F%9A%80"
  },
  {
    id: 2,
    title: "DISEÑO DE LANDING PAGES",
    features: {
      feature1: "Incluye diseño personalizado.",
      feature2: "Página única optimizada para conversiones.",
      feature3: "Integración con herramientas de marketing.",
      feature4: "Formulario de contacto o suscripción.",
      feature5: "SEO y análisis de rendimiento.",
      feature6: "Hosting y dominio."
    },
    link: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola!%20Estoy%20interesado%20en%20el%20Plan%20de%20Diseño%20de%20Landing%20Pages%20y%20me%20gustaría%20recibir%20más%20información.%20%F0%9F%9A%80"
  },
  {
    id: 3,
    title: "SITIOS WEB PROFESIONALES",
    features: {
      feature1: "Incluye diseño personalizado.",
      feature2: "Páginas adaptadas a las necesidades de tu negocio.",
      feature3: "Blog o portafolio integrado.",
      feature4: "Funcionalidades avanzadas según requerimientos.",
      feature5: "Optimización SEO y seguridad avanzada.",
      feature6: "Hosting y Dominio."
    },
    link: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola!%20Estoy%20interesado%20en%20el%20Plan%20de%20Sitios%20Web%20Profesionales%20y%20quisiera%20más%20detalles%20sobre%20cómo%20funciona.%20%F0%9F%9A%80"
  },
  {
    id: 4,
    title: "SOPORTE Y MANTENIMIENTO",
    features: {
      feature1: "Actualización de contenido y revisión de errores.",
      feature2: "Optimización de velocidad y rendimiento.",
      feature3: "Backups de seguridad y monitoreo constante.",
      feature4: "Protección contra ataques y solución de problemas.",
      feature5: "Soporte técnico especializado."
    },
    link: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola!%20Estoy%20interesado%20en%20el%20Plan%20de%20Soporte%20y%20Mantenimiento%20para%20mi%20sitio%20web.%20¿Podrían%20enviarme%20más%20información,%20por%20favor?%20%F0%9F%9A%80"
  }
];
export const planFeatures = [
  "Elige tu servicio.",
  "Define tus necesidades.",
  "Recibe tu propuesta personalizada."
];
export const links = [
  {
    id: 'location',
    icon: 'fa-solid fa-location-dot',
    title: 'Ubicación',
    url: 'https://www.google.com.ar/maps/place/Recoleta,+Cdad.+Aut%C3%B3noma+de+Buenos+Aires/@-34.5848096,-58.4066426,15z/data=!3m1!4b1!4m6!3m5!1s0x95bcca99c609fc2f:0x392ca99351808a75!8m2!3d-34.5873825!4d-58.3972762!16zL20vMDVoMmJr?entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoJLDEwMjExNDU1SAFQAw%3D%3D',
    label: 'Ubicación',
    info: 'Recoleta, Argentina',
  },
  {
    id: 'instagram',
    icon: 'fa-brands fa-instagram',
    title: 'Instagram',
    url: 'https://www.instagram.com/evolfusion_arg/',
    label: 'Instagram',
    info: 'evolfusion_arg',
  },
  {
    id: 'whatsapp',
    icon: 'fa-brands fa-whatsapp',
    title: 'WhatsApp',
    url: 'https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa optener mas información',
    label: 'WhatsApp',
    info: '+54 11 2772-8592',
  },
  {
    id: 'email',
    icon: 'fa-solid fa-envelope',
    title: 'Email',
    url: 'mailto:evolfusion.ok@gmail.com',
    label: 'Email',
    info: 'evolfusion.ok@gmail.com',
  }
];
export const Footer = {
  socialLinks: [
    { href: "https://www.instagram.com/evolfusion_arg/", src: "img/icon/instagram.png", alt: "Icon Instagram" },
    { href: "https://www.facebook.com/profile.php?id=61573090351158", src: "img/icon/facebook.png", alt: "Icon Facebook" },
    { href: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa optener mas información", src: "img/whatsapp.png", alt: "Icon WhatsApp" }
  ],

  contactLinks: [
    { label: "Email", href: "mailto:evolfusion.ok@gmail.com", text: "evolfusion.ok@gmail.com" },
    { label: "WhatsApp", href: "https://api.whatsapp.com/send?phone=541127728592&text=¡Hola! Me interesa optener mas información", text: "+54 11 2772-8592" }
  ]
};


