export const profile = {
  fullName: 'RANDRIAMALALA Bruno Justin',
  initials: 'RBJ',
  title: 'Étudiant en Informatique | Développeur Web',

  tagline:
    `Passionné par le développement web et les nouvelles technologies, je conçois des applications web et des solutions informatiques simples, modernes et fonctionnelles.`,

  introduction:
    `Actuellement étudiant en deuxième année de Licence en Informatique Générale à l’École Nationale d’Informatique, je souhaite mettre en pratique mes connaissances et acquérir une première expérience professionnelle.`,

  location: 'Fianarantsoa Madagascar',
  email: 'randriamalalabrunojustin@gmail.com',
  phone: '+261 34 10 297 51',

  availability:
    `Disponible immédiatement pour un stage de Licene 2 en Informatique.`,

  cvUrl: '/CV-Bruno.pdf',
  avatarUrl: '/photo-profil.jpg',

  githubUrl:
    'https://github.com/randriamalalabrunojustin-dotcom',

  linkedinUrl: 'https://www.linkedin.com/in/bruno-justin-randriamalala-87a931359/',
}

export const about = {
  paragraphs: [
    `Actuellement étudiant en deuxième année de Licence en Informatique Générale à l’École Nationale d’Informatique, je m’intéresse particulièrement au développement web et aux nouvelles technologies.`,

    `Sérieux, motivé, créatif et doté d’un bon esprit d’équipe, je souhaite mettre en pratique mes connaissances à travers des projets concrets. Mon objectif est de renforcer mes compétences techniques et d’acquérir une expérience professionnelle dans le domaine du développement web.`,

    `Au cours de ma formation, j’ai réalisé plusieurs projets académiques en développement web, développement logiciel, bases de données et réseaux informatiques.`,
  ],

  goals: [
    `Développer mes compétences en développement web front-end et back-end.`,

    `Participer à la réalisation de projets informatiques concrets.`,

    `Acquérir une première expérience professionnelle grâce à un stage.`,

    `Améliorer progressivement la qualité, l’organisation et la maintenance de mon code.`,
  ],

  interests: [
    'Développement web',
    'Nouvelles technologies',
    'Football',
    'Karaté',
    'Musique',
  ],
}

export const skills = [
  {
    name: 'HTML5',
    category: 'Développement web',
    level: 80,
    description:
      `Création de pages web structurées avec des balises sémantiques.`,
  },
  {
    name: 'CSS3',
    category: 'Développement web',
    level: 75,
    description:
      `Mise en forme des interfaces, responsive design et animations.`,
  },
  {
    name: 'JavaScript',
    category: 'Développement web',
    level: 65,
    description:
      `Création d’interactions et de fonctionnalités dynamiques.`,
  },
  {
    name: 'Vue.js',
    category: 'Développement web',
    level: 60,
    description:
      `Développement d’interfaces web dynamiques avec des composants.`,
  },
  {
    name: 'PHP',
    category: 'Développement web',
    level: 65,
    description:
      `Développement côté serveur et traitement des données.`,
  },
  {
    name: 'C#',
    category: 'Programmation',
    level: 60,
    description:
      `Développement d’applications de bureau avec Windows Forms.`,
  },
  {
    name: 'Python',
    category: 'Programmation',
    level: 55,
    description:
      `Notions en algorithmique, programmation et création de scripts.`,
  },
  {
    name: 'Windows Forms',
    category: 'Développement logiciel',
    level: 55,
    description:
      `Création d’interfaces graphiques et d’applications de bureau.`,
  },
  {
    name: 'MySQL',
    category: 'Bases de données',
    level: 65,
    description:
      `Création de bases de données et réalisation de requêtes SQL.`,
  },
  {
    name: 'SQLite',
    category: 'Bases de données',
    level: 55,
    description:
      `Gestion de bases de données légères pour les applications.`,
  },
  {
    name: 'Git et GitHub',
    category: 'Outils',
    level: 55,
    description:
      `Versionnement du code et publication des projets.`,
  },
  {
    name: 'Outils de développement',
    category: 'Outils',
    level: 70,
    description:
      `Visual Studio, Visual Studio Code, XAMPP, phpMyAdmin et outils d’intelligence artificielle.`,
  },
  {
    name: 'Réseaux informatiques',
    category: 'Réseaux',
    level: 50,
    description:
      `Adressage IPv4 et configuration des protocoles RIPv2 et OSPF avec Cisco Packet Tracer et GNS3.`,
  },
]

export const projects = [
  {
    id: 1,
    title: 'Application de gestion médicale',
    type: 'Projet académique',

    description:
      `Développement d’une application web permettant de gérer les patients et leurs consultations. Le projet comprend une base de données MySQL et les principales opérations CRUD.`,

    image: '/projects/medical.jpg',

    technologies: [
      'HTML5',
      'CSS3',
      'PHP',
      'MySQL',
      'phpMyAdmin',
    ],

    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 2,
    title: 'Application de gestion pour une coopérative',
    type: 'Projet académique',

    description:
      `Création d’une application avec Vue.js permettant de gérer les membres et les données d’une coopérative à travers une interface dynamique et organisée.`,

    image: '/projects/colis.jpg',

    technologies: [
      'Vue.js',
      'JavaScript',
      'HTML5',
      'CSS3',
    ],

    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 3,
    title: 'Application de prise de rendez-vous',
    type: 'Projet académique',

    description:
      `Développement d’une application de bureau pour un cabinet d’avocats. Elle permet de gérer les rendez-vous, les clients et les avocats grâce à une interface simple et intuitive.`,

    image: '/projects/rdv.jpg',

    technologies: [
      'C#',
      'Windows Forms',
      'SQLite',
    ],

    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 4,
    title: 'Configuration d’un réseau informatique',
    type: 'Projet académique',

    description:
      `Création et configuration d’une topologie réseau, attribution des adresses IPv4 et mise en place des protocoles de routage dynamique RIPv2 et OSPF.`,

    image: '/projects/routIP.jpg',

    technologies: [
      'Cisco Packet Tracer',
      'GNS3',
      'IPv4',
      'RIPv2',
      'OSPF',
    ],

    githubUrl: null,
    demoUrl: null,
  },
]

export const education = [
  {
    period: '2025 – 2026',
    title: 'Licence 2 en Informatique Générale',
    organization: `École Nationale d’Informatique`,

    description:
      `Formation en développement web, programmation, bases de données, développement logiciel et réseaux informatiques.`,
  },
  {
    period: '2024 – 2025',
    title: 'Licence 1 en Informatique Générale',
    organization: `École Nationale d’Informatique`,

    description:
      `Acquisition des bases en algorithmique, programmation, informatique générale, systèmes et bases de données.`,
  },
  {
    period: '2023 – 2024',
    title: 'Baccalauréat série scientifique',
    organization: `Lycée Saint François Xavier`,

    description:
      `Formation scientifique générale avec un intérêt particulier pour les mathématiques, les sciences et l’informatique.`,
  },
]

export const experiences = [
  {
    period: '2025 – 2026',
    title: 'Réalisation de projets en développement web',
    organization: `École Nationale d’Informatique`,

    description:
      `Conception et développement d’une application médicale en PHP et MySQL ainsi que d’une application de gestion pour une coopérative avec Vue.js.`,

    tags: [
      'HTML5',
      'CSS3',
      'JavaScript',
      'Vue.js',
      'PHP',
      'MySQL',
    ],
  },
  {
    period: '2025 – 2026',
    title: 'Développement d’une application de bureau',
    organization: `École Nationale d’Informatique`,

    description:
      `Réalisation d’une application de prise de rendez-vous pour un cabinet d’avocats avec C# et Windows Forms.`,

    tags: [
      'C#',
      'Windows Forms',
      'SQLite',
    ],
  },
  {
    period: '2025 – 2026',
    title: 'Configuration d’un réseau informatique',
    organization: `École Nationale d’Informatique`,

    description:
      `Configuration d’une topologie réseau, des adresses IPv4 et des protocoles de routage dynamique RIPv2 et OSPF.`,

    tags: [
      'Cisco Packet Tracer',
      'GNS3',
      'IPv4',
      'RIPv2',
      'OSPF',
    ],
  },
]