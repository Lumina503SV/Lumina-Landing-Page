// Datos compartidos de la landing. Edita aquí los textos y enlaces.

export const site = {
  name: "Lumina",
  tagline: "Software a medida para empresas salvadoreñas",
  email: "lumina.503sv@gmail.com",
  whatsapp: "50370000000", // ← número con código de país, sin signos
  location: "El Salvador",
};

export const navLinks = [
  { label: "Servicios", href: "#servicios" },
  { label: "Nosotros", href: "#nosotros" },
  { label: "Preguntas", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
] as const;

export const servicesSoftware = [
  {
    name: "Desarrollo web",
    accent: "desk" as const, // teal
    description:
      "Catalogos , Sistemas Corporativo, Landing Page y aplicaciones que tus clientes usan desde el navegador, rápidas y listas para crecer contigo.",
    points: ["Web Corporativo", "Catálogo Web", "Landing pages"],
  },
  {
    name: "Sistemas a medida",
    accent: "core" as const, // indigo
    description:
      "Plataformas internas que reemplazan hojas de cálculo y procesos manuales: inventarios, citas, facturación, control de personal.",
    points: [
      "Paneles de administración",
      "Reportes y métricas",
      "Roles y permisos",
    ],
  },
  {
    name: "Apps móviles",
    accent: "order" as const, // coral
    description:
      "Aplicaciones Android  conectadas a tus sistemas, pensadas para el día a día de tu equipo y tus usuarios.",
    points: ["Apps para clientes", "Apps para empleados", "Apps de citas"],
  },
];

export const servicesMarketing = [
  {
    name: "Diseño de Marca",
    accent: "core" as const, // indigo
    description:
      "Construimos la identidad visual de tu negocio desde cero: un logo y una imagen que se vean igual de profesionales en redes, en la calle y en tu local.",
    points: ["Logo", "Identidad visual", "Manual de marca"],
  },
  {
    name: "Gestión de Redes Sociales",
    accent: "order" as const, // teal
    description:
      "Administramos tus redes para que publiques de forma constante y profesional, sin que tengas que estar pensando todos los días qué subir.",
    points: ["Facebook", "Instagram", "LinkedIn"],
  },
  {
    name: "Creación de Contenido",
    accent: "desk" as const, // coral
    description:
      "Producimos las piezas que necesitas para verte bien en redes: diseños, videos cortos y textos que conectan con tu cliente y venden.",
    points: ["Diseños", "Videos cortos", "Copywriting"],
  },
];

export const steps = [
  {
    title: "Descubrimiento",
    description:
      "Nos sentamos contigo a entender tu operación y definir qué resuelve el software antes de escribir una línea de código.",
  },
  {
    title: "Diseño",
    description:
      "Prototipamos las pantallas y el flujo. Vos lo ves y lo aprobás antes de invertir en desarrollo.",
  },
  {
    title: "Desarrollo",
    description:
      "Construimos por entregas. Cada semana ves avances reales, no promesas.",
  },
  {
    title: "Entrega y soporte",
    description:
      "Lo dejamos funcionando, capacitamos a tu equipo y seguimos cerca para el mantenimiento.",
  },
];

export const faqs = [
  {
    q: "¿Cuánto cuesta un proyecto?",
    a: "Depende del alcance. Después de una primera conversación te damos una cotización clara y por escrito, sin sorpresas. Trabajamos con presupuestos pensados para empresas locales.",
  },
  {
    q: "¿Cuánto tarda en estar listo?",
    a: "Un sistema base suele tomar de 6 a 12 semanas. Entregamos por partes, así que empezás a ver y usar avances mucho antes de la entrega final.",
  },
  {
    q: "¿Dan soporte después de entregar?",
    a: "Sí. Ofrecemos planes de mantenimiento y mejoras continuas. No te dejamos solo el día que entregamos.",
  },
  {
    q: "¿Trabajan con empresas fuera de El Salvador?",
    a: "Sí, trabajamos de forma remota con clientes de la región. Nuestra base y nuestro contexto son salvadoreños.",
  },
  // {
  //   q: "¿Yo soy dueño del código?",
  //   a: "Totalmente. Al finalizar, el código y los datos son tuyos. Te entregamos todo y te explicamos cómo está hecho.",
  // },
];
