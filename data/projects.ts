// data/projects.ts
import { FaReact, FaNodeJs, FaPython, FaDatabase, FaLinkedin, FaSyncAlt, FaJava, FaSeedling, FaPoll, FaCalculator,FaHandshake, FaCar, FaCalendarAlt } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiTensorflow, SiPostgresql } from 'react-icons/si';

export interface Skill {
  name: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  technologies: string[];
  githubLink: string;
  skills: Skill[];
}

export const projects: Project[] = [
  {
    id: 1, // ID unique
    title: "Citronix - Gestion de Ferme de Citrons",
    description: "Une application Java Spring Boot pour gérer les fermes de citrons, suivre la production, la récolte et les ventes tout en optimisant la productivité des arbres.",
    icon: FaSeedling, // Icône qui correspond au thème agricole
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "Swagger"
    ],
    githubLink: "https://github.com/Ayounsni/Citronix", // Mets ton lien GitHub ici
    skills: [
      { name: "Développement Backend" },
      { name: "Architecture en Couches" },
      { name: "Validation des Données" },
      { name: "Tests Unitaires" },
      { name: "Modélisation UML" }
    ]
  },
  {
    id: 2, // ID unique
    title: "ITLens - Application de sondages IT",
    description: "Une application Spring Boot pour gérer et participer à des surveys IT structurés en chapitres, sous-chapitres et questions, avec des statistiques de résultats.",
    icon: FaPoll, // Icône qui correspond au thème des sondages
    technologies: [
      "Java",
      "Spring Boot",
      "PostgreSQL",
      "JUnit",
      "Mockito",
      "Swagger",
      "Docker"
    ],
    githubLink: "https://github.com/Ayounsni/ITLens", // Mets ton lien GitHub ici
    skills: [
      { name: "Développement Backend" },
      { name: "Architecture RESTful" },
      { name: "Validation des Données" },
      { name: "Gestion des Exceptions" },
      { name: "Documentation API avec Swagger" }
    ]
  },
  {
    id: 3, // ID unique
    title: "SmartBank - Simulation des Crédits",
    description: "Une application JEE pour simuler et calculer les mensualités de crédits, gérer les demandes, et suivre leur historique avec des filtres et détails.",
    icon: FaCalculator, // Icône qui correspond au thème financier
    technologies: [
      "Java",
      "JEE",
      "Tomcat",
      "Maven",
      "JUnit",
      "Mockito",
      "SASS"
    ],
    githubLink: "https://github.com/Ayounsni/SmartBank", // Mets ton lien GitHub ici
    skills: [
      { name: "Développement Backend en JEE" },
      { name: "ORM avec JPA/Hibernate" },
      { name: "Conception et Validation de Formules Financières" },
      { name: "Gestion des États et Historique" },
      { name: "Intégration Frontend avec SASS" }
    ]
  },
  {
    id: 4, // ID unique
    title: "DigitalHub - Plateforme de Mise en Relation entre Startups et Investisseurs",
    description: "Une plateforme connectant startups et investisseurs, avec gestion de profils et suivi des opportunités.",
    icon: FaHandshake, // Icône correspondant au thème de collaboration et mise en relation
    technologies: [
      "React",
      "Laravel",
      "TailwindCSS",
      "MySQL",
      "cPanel",
      "UML",
      "Git"
    ],
    githubLink: "https://github.com/RocketMeUp/DigitalHub", // Mets ton lien GitHub ici
    skills: [
      { name: "Développement Full-Stack" },
      { name: "Intégration Frontend avec React et TailwindCSS" },
      { name: "Conception et Modélisation UML" },
      { name: "Gestion des Bases de Données avec MySQL" },
      { name: "Déploiement via cPanel" }
    ]
  },
  {
    id: 5, // ID unique
    title: "CoVo - Plateforme de Covoiturage",
    description: "Une plateforme facilitant la mise en relation entre conducteurs et passagers pour partager des trajets en toute sécurité.",
    icon: FaCar, // Icône pour le covoiturage
    technologies: [
      "TailwindCSS",
      "Laravel",
      "Blade",
      "MySQL",
      "UML",
      "Docker",
      "Git"
    ],
    githubLink: "https://github.com/Ayounsni/Covo",
    skills: [
      { name: "Développement Backend" },
      { name: "Gestion des Bases de Données" },
      { name: "Conception UML" },
      { name: "Développement Responsive" }
    ]
  },
  {
    id: 6,
    title: "Evento - Plateforme de Gestion et Réservation d'Événements",
    description: "Une plateforme permettant aux utilisateurs de réserver des places pour des événements, aux organisateurs de gérer leurs événements et aux administrateurs de contrôler et gérer les utilisateurs et événements.",
    icon: FaCalendarAlt, // Icône pour la gestion d'événements
    technologies: [
      "Laravel",
      "Blade",
      "TailwindCSS",
      "MySQL",
      "PHP",
      "JavaScript"
    ],
    githubLink: "https://github.com/Ayounsni/Evento",
    skills: [
      { "name": "Développement Backend avec Laravel" },
      { "name": "Gestion des Utilisateurs et Authentification" },
      { "name": "Création d'Événements et Réservation" },
      { "name": "Conception et gestion des Bases de Données MySQL" },
      { "name": "Utilisation de Blade pour le rendu des vues" },
      { "name": "Validation des Formulaires et Sécurité" },
      { "name": "Optimisation des Requêtes Eloquent" }
    ]
  }
  
];
