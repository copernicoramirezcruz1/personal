export const personal = {
  fullName: 'Copérnico Ramírez Cruz',
  firstName: 'Copérnico',
  lastName: 'Ramírez Cruz',
  profession: 'Ingeniero Informático & Desarrollador Fullstack Senior',
  tagline: 'Tres décadas transformando ideas en soluciones tecnológicas',
  bio: `Ingeniero Informático con más de 30 años de experiencia en tecnología, especializado en desarrollo de software, consultoría IT, administración de sistemas y docencia universitaria. Apasionado por crear soluciones eficientes que generan impacto real.`,
  email: 'copernico_rc@hotmail.com',
  phone: '+591 76106148',
  location: 'Bolivia',
  nationality: 'Boliviana',
  birthDate: '10 de mayo de 1973',
  photo: '/copernico.jpeg',
  photoMin: '/copernico_min.jpg',
  photoSecondary: '/copernico_01.jpeg',
  cvFile: '/cv.pdf',
  social: {
    github: 'https://github.com/copernicoramirezcruz1',
    linkedin: 'https://www.linkedin.com/in/copernico-ramirez-cruz-b491501b9/',
    twitter: 'https://twitter.com/copernicorc',
    email: 'mailto:copernico.rc1@gmail.com'
  }
}

export const stats = [
  { label: 'Años de Experiencia', value: 36, suffix: '+' },
  { label: 'Proyectos Completados', value: 200, suffix: '+' },
  { label: 'Tecnologías Dominadas', value: 30, suffix: '+' },
  { label: 'Empresas & Instituciones', value: 12, suffix: '+' }
]

export const education = [
  {
    degree: 'Maestría en Innovación y Tecnología Educativa',
    institution: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    period: 'En curso — Tesis en elaboración',
    description: 'Investigación avanzada sobre integración de tecnologías emergentes en procesos educativos.'
  },
  {
    degree: 'Especialidad en Gestión del Aprendizaje',
    institution: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    period: 'Completado',
    description: 'Diseño y gestión de entornos de aprendizaje efectivos con soporte tecnológico.'
  },
  {
    degree: 'Diplomado en Metodología de la Investigación Científica',
    institution: 'Universidad Amazónica de Pando (UAP)',
    period: 'Completado',
    description: 'Formación rigurosa en métodos de investigación cuantitativa y cualitativa.'
  },
  {
    degree: 'Diplomado en Educación Superior',
    institution: 'Universidad Autónoma del Beni (UABJB)',
    period: 'Completado',
    description: 'Pedagogía universitaria, diseño curricular y evaluación en educación superior.'
  },
  {
    degree: 'Ingeniería Informática',
    institution: 'Universidad Autónoma Gabriel René Moreno (UAGRM)',
    period: 'Completado',
    description: 'Formación integral en ciencias de la computación, desarrollo de software y sistemas de información.'
  }
]

export const skills = {
  frontend: [
    { name: 'JavaScript', level: 95 },
    { name: 'PHP', level: 90 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Vue.js', level: 85 },
    { name: 'Angular', level: 80 },
    { name: 'Diseño Responsive', level: 85 }
  ],
  backend: [
    { name: 'Python', level: 95 },
    { name: 'Django', level: 90 },
    { name: 'Java', level: 80 },
    { name: 'PHP / Laravel', level: 80 },
    { name: 'APIs RESTful', level: 75 }
  ],
  databases: [
    { name: 'PostgreSQL', level: 80 },
    { name: 'SQL Server', level: 75 },
    { name: 'Mongo DB', level: 85 },
    { name: 'SQL Avanzado', level: 80 }
  ],
  devops: [
    { name: 'Git & GitHub', level: 80 },
    { name: 'Linux', level: 75 },
    { name: 'Control de Versiones', level: 85 },
    { name: 'Despliegue', level: 70 }
  ],
  tools: [
    { name: 'Android Studio', level: 70 },
    { name: 'Visual Studio', level: 70 },
    { name: 'C / C++', level: 75 },
    { name: 'Microcontroladores PIC', level: 70 },
    { name: 'IoT', level: 85 }
  ],
  ai_data: [
    { name: 'Redes Neuronales', level: 70 },
    { name: 'Python + Keras', level: 75 },
    { name: 'Machine Learning', level: 75 },
    { name: 'Análisis de Datos', level: 70 }
  ]
}

export const skillCategories = [
  {
    id: 'frontend',
    title: 'Frontend',
    icon: 'window',
    description: 'Desarrollo de interfaces modernas y responsivas',
    skills: skills.frontend
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: 'server',
    description: 'Arquitectura robusta y APIs escalables',
    skills: skills.backend
  },
  {
    id: 'databases',
    title: 'Bases de Datos',
    icon: 'database',
    description: 'Modelado, optimización y administración',
    skills: skills.databases
  },
  {
    id: 'devops',
    title: 'DevOps',
    icon: 'terminal',
    description: 'Integración continua y despliegue eficiente',
    skills: skills.devops
  },
  {
    id: 'tools',
    title: 'Herramientas',
    icon: 'wrench',
    description: 'Desarrollo embebido y software especializado',
    skills: skills.tools
  },
  {
    id: 'ai_data',
    title: 'IA & Datos',
    icon: 'brain',
    description: 'Machine Learning y análisis inteligente',
    skills: skills.ai_data
  }
]

export const experience = [
  {
    id: 1,
    role: 'Programador III',
    company: 'SENASAG Nacional',
    period: '2022 — Presente',
    type: 'fulltime',
    description: 'Desarrollo y mantenimiento de sistemas informáticos para sanidad animal e inocuidad alimentaria a nivel nacional.',
    achievements: [
      'Desarrollo de sistemas de gestión sanitaria',
      'Administración de bases de datos institucionales',
      'Optimización de procesos administrativos digitales'
    ],
    technologies: ['JavaScript','PHP', 'HTML/CSS', 'Python', 'Java', 'Vue.js', 'Angular', 'Django','Laravel', 'PostgreSQL', 'SQL Server','Android Studio', 'Docker']
  },
  {
    id: 2,
    role: 'Analista en Administración de Sistemas',
    company: 'SENASAG Nacional',
    period: '2022',
    type: 'fulltime',
    description: 'Administración integral de sistemas informáticos y soporte técnico a nivel nacional.',
    achievements: [
      'Gestión de infraestructura tecnológica',
      'Soporte a usuarios a nivel nacional'
    ],
    technologies: ['Linux', 'PostgreSQL', 'Redes']
  },
  {
    id: 3,
    role: 'Docente Universitario',
    company: 'Universidad Privada Domingo Savio',
    period: '2021',
    type: 'parttime',
    description: 'Docencia en el área de ingeniería de sistemas y programación en Santa Cruz.',
    achievements: [
      'Formación de estudiantes en fundamentos de programación'
    ],
    technologies: ['Programación', 'Bases de Datos']
  },
  {
    id: 4,
    role: 'Jefe de Unidad II — Estadística',
    company: 'Gobierno Autónomo Departamental del Beni',
    period: '2021',
    type: 'fulltime',
    description: 'Dirección de la unidad de estadística departamental, gestión de datos y reportes gubernamentales.',
    achievements: [
      'Implementación de sistemas de reportes estadísticos',
      'Gestión y análisis de datos departamentales'
    ],
    technologies: ['Bases de Datos', 'Análisis de Datos', 'Excel']
  },
  {
    id: 5,
    role: 'Técnico Departamental de Sistemas',
    company: 'Fondo de Inversión Productiva y Social (FPS) - PANDO',
    period: '2013 — 2020',
    type: 'fulltime',
    description: 'Responsable de sistemas informáticos departamentales en Cobija-Pando. Ampliación de funciones incluyendo responsabilidad del programa Plan Niño y miembro de comisiones de calificación para más de 200 procesos de licitación con normativa Boliviana, BID, Banco Mundial y FONPLATA.',
    achievements: [
      'Responsable departamental del programa Plan Niño 2016',
      'Responsable de licitación del programa BO-138',
      'Miembro de comisión de calificación de más de 200 procesos de licitación internacional',
      'Gestión de sistemas informáticos departamentales'
    ],
    technologies: ['Gestión de Proyectos', 'Bases de Datos', 'Sistemas Gubernamentales']
  },
  {
    id: 6,
    role: 'Docente Universitario',
    company: 'Universidad Amazónica de Pando',
    period: '2015 — 2020',
    type: 'parttime',
    description: 'Docente del área de Ciencia y Tecnología impartiendo asignaturas de Programación y Sistemas de Gestión. Ingreso por concurso de méritos y examen de competencia como docente ordinario.',
    achievements: [
      'Docente contratado por concurso de méritos',
      'Formación de ingenieros civiles en programación',
      'Desarrollo de materiales didácticos'
    ],
    technologies: ['Programación', 'Sistemas de Gestión', 'Docencia']
  },
  {
    id: 7,
    role: 'Tecnico Departamental de Sistemas',
    company: 'Fondo de Inversión Productiva y Social (FPS) - Beni',
    period: '2007 — 2012',
    type: 'combined',
    description: 'Técnico Departamental de Sistemas en FPS  ',
    achievements: [     
      'Soporte departamental de sistemas FPS Trinidad'
    ],
    technologies: ['Administracion de sistemas', 'Redes', 'Bases de Datos']
  },
  {
    id: 8,
    role: 'Docente Universitario',
    company: 'Universidad Autónoma del Beni',
    period: '2007 — 2012',
    type: 'parttime',
    description: 'Docente del área de Ingeniería de Sistemas ',
    achievements: [
      'Coordinador Facultativo del Instituto de Investigación CIS',
      'Responsable de Centro de Cómputo',
      'Docente de 8 asignaturas diferentes en Ingeniería de Sistemas (Programación de Bajo Nivel, Programación Gráfica, Análisis Numérico, Redes de Computadoras II, Ingeniería del Mantenimiento y Bases de Datos II.)',
      'Desarrollo de materiales didácticos'
    ],
    technologies: ['Programación de bajo nivel', 'Programación gráfica', 'Análisis Numérico', 'Redes de Computadores', 'Ingeniería del Mantenimiento', 'Base de datos II','Docencia']
  },
  {
    id: 9,
    role: 'Gerente Propietario',
    company: 'Multiservicios La Solución',
    period: '2005 — 2007',
    type: 'entrepreneur',
    description: 'Emprendimiento propio ofreciendo servicios de consultoría IT, desarrollo de software y soporte técnico en Trinidad, Beni.',
    achievements: [
      'Fundación y dirección de empresa de servicios IT',
      'Atención a clientes corporativos y gubernamentales'
    ],
    technologies: ['Desarrollo de Software', 'Consultoría IT', 'Gestión Empresarial']
  },
  {
    id: 10,
    role: 'Soporte Departamental de Sistemas',
    company: 'Fondo de Inversión Productiva y Social (FPS)',
    period: '2001 — 2004',
    type: 'fulltime',
    description: 'Ingreso por concurso de méritos a nivel nacional realizado por Price Waterhouse. Soporte departamental de sistemas informáticos en Trinidad, Beni.',
    achievements: [
      'Seleccionado por concurso nacional de méritos (Price Waterhouse)',
      'Administración de sistemas informáticos departamentales'
    ],
    technologies: ['Sistemas', 'Soporte Técnico', 'Redes']
  },
  {
    id: 11,
    role: 'Consultor Informático',
    company: 'ENLACE S.R.L. / ONG SEMILLA',
    period: '1999 — 2001',
    type: 'fulltime',
    description: 'Consultoría informática para proyectos de desarrollo social con financiamiento internacional (Fundación Interamericana).',
    achievements: [
      'Consultoría IT para ONG internacional',
      'Implementación de soluciones tecnológicas para desarrollo social'
    ],
    technologies: ['Consultoría IT', 'Desarrollo de Software', 'Soporte Técnico']
  },
  {
    id: 12,
    role: 'Gerente Propietario',
    company: 'DATA-SOFT',
    period: '1997 — 1999',
    type: 'entrepreneur',
    description: 'Fundación y dirección de empresa de desarrollo de software y servicios informáticos en Santa Cruz.',
    achievements: [
      'Emprendimiento tecnológico propio',
      'Desarrollo de soluciones de software a medida'
    ],
    technologies: ['Desarrollo de Software', 'Gestión Empresarial', 'Consultoría']
  },
  {
    id: 13,
    role: 'Técnico en Radio y Televisión',
    company: 'Electrónica Central',
    period: '1992 — 1996',
    type: 'fulltime',
    description: 'Soporte técnico especializado en equipos electrónicos de radio y televisión, desarrollando habilidades de hardware y electrónica.',
    achievements: [
      'Reparación y mantenimiento de equipos electrónicos',
      'Desarrollo de habilidades técnicas en hardware'
    ],
    technologies: ['Electrónica', 'Hardware', 'Soporte Técnico']
  },
  {
    id: 14,
    role: 'Operador de Computadoras',
    company: 'ONG SEMILLA',
    period: '1990 — 1991',
    type: 'fulltime',
    description: 'Inicio de carrera profesional como operador de computadoras en ONG de apoyo local financiada por la Fundación Interamericana.',
    achievements: [
      'Primera experiencia profesional en tecnología',
      'Operación de sistemas informáticos para proyectos sociales'
    ],
    technologies: ['Ofimática', 'Sistemas Operativos']
  }
]

export const projects = [
  {
    id: 1,
    title: 'Sistema de Gestión de Registros Sanitaria SENASAG (PPADRON-WEB)',
    description: 'Plataforma integral para la gestión de sanidad animal e inocuidad alimentaria a nivel nacional.',
    image: null,
    category: 'fullstack',
    technologies: ['Python','PHP','Vue.js','Django', 'PostgreSQL'],
    features: ['Administración de usuarios', 'Administración de registro sanitarios', 'Integración con sistemas gubernamentales'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 2,
    title: 'Sistema de Estadísticas Departamentales',
    description: 'Plataforma de análisis y visualización de datos estadísticos para el Gobierno Autónomo Departamental del Beni. Gestión de indicadores y generación de reportes.',
    image: null,
    category: 'fullstack',
    technologies: ['Laravel', 'PostgreSQL'],
    features: ['Dashboard interactivo', 'Exportación de datos', 'Análisis estadístico'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 3,
    title: 'Plataforma de Cursos Online',
    description: 'Desarrollo de plataforma educativa con Laravel, implementando sistema de gestión de cursos, usuarios y contenido multimedia siguiendo buenas prácticas de desarrollo.',
    image: null,
    category: 'backend',
    technologies: ['PHP', 'Laravel', 'PostgreSQL', 'JavaScript'],
    features: ['Sistema de cursos', 'Gestión de usuarios', 'Contenido multimedia'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 4,
    title: 'API RESTful con Django',
    description: 'Desarrollo de API RESTful utilizando Django REST Framework para aplicaciones web y móviles, implementando autenticación JWT y documentación automática.',
    image: null,
    category: 'backend',
    technologies: ['Python', 'Django', 'PostgreSQL', 'REST API'],
    features: ['Autenticación JWT', 'Documentación Swagger', 'Tests automatizados'],
    link: '#',
    github: '#',
    featured: false
  },
  {
    id: 5,
    title: 'Sistema de Licitaciones FPS',
    description: 'Participación en el desarrollo y gestión de sistemas para más de 200 procesos de licitación con normativa Boliviana, BID, Banco Mundial y FONPLATA.',
    image: null,
    category: 'enterprise',
    technologies: ['Bases de Datos', 'Gestión de Proyectos', 'Sistemas Gubernamentales'],
    features: ['Gestión documental', 'Flujos de aprobación', 'Cumplimiento normativo'],
    link: '#',
    github: '#',
    featured: true
  },
  {
    id: 6,
    title: 'Red Neuronal con Python y Keras',
    description: 'Implementación de redes neuronales para clasificación y predicción utilizando Python y Keras como parte de formación continua en inteligencia artificial.',
    image: null,
    category: 'ai',
    technologies: ['Python', 'Keras', 'TensorFlow', 'Machine Learning'],
    features: ['Clasificación de datos', 'Entrenamiento de modelos', 'Evaluación de resultados'],
    link: '#',
    github: '#',
    featured: false
  }
]

export const projectCategories = [
  { id: 'all', label: 'Todos' },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'backend', label: 'Backend' },
  { id: 'enterprise', label: 'Enterprise' },
  { id: 'ai', label: 'IA & Datos' }
]

export const navLinks = [
  { id: 'hero', label: 'Inicio' },
  { id: 'about', label: 'Sobre Mí' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experiencia' },
  { id: 'projects', label: 'Proyectos' },
  { id: 'contact', label: 'Contacto' }
]
