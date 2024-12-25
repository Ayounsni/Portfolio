// data/workExperience.ts
import { FaBriefcase, FaPython, FaDatabase, FaChartBar, FaAws, FaReact, FaChalkboardTeacher,FaFacebook, FaGoogle,FaMoneyCheck,FaFileInvoice,FaChartLine } from 'react-icons/fa';
import { SiPowerbi } from 'react-icons/si';
import { PiMathOperationsFill } from "react-icons/pi";
import { SiLaravel, SiTailwindcss , SiGoogleanalytics } from 'react-icons/si';
import React from 'react';

export interface Skill {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}

export interface WorkExperience {
  company: string;
  position: string;
  duration: string;
  year: number;
  description: string[];
  skills: Skill[];
  logo: string;
}

export const workExperiences: WorkExperience[] = [
   {
    company: "RocketMe Up",
    position: "Développeur Full Stack - Stage",
    duration: "Mai 2024 - Juillet 2024",
    year: 2024,
    description: [
      "Création de DigitalHub, une plateforme facilitant la mise en relation entre startups et investisseurs.",
      "Développement des interfaces frontend modernes et réactives avec React et TailwindCSS.",
      "Réalisation de l'API backend en Laravel, connectée à une base de données MySQL.",
      "Déploiement et maintenance de la plateforme sur cPanel.",
      "Conception et modélisation des processus métier avec UML pour structurer l'application."
    ],
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Laravel", icon: SiLaravel },
      { name: "TailwindCSS", icon: SiTailwindcss },
      { name: "MySQL", icon: FaDatabase },
      { name: "Conception UML", icon: PiMathOperationsFill },
    ],
    logo: "/logos/rocket.png" // Ajouter le chemin du logo de RocketMe Up
  },
  {
    company: "AdBlueMedia - Affiliate Marketing Network",
    position: "Spécialiste en Marketing d'Affiliation",
    duration: "2020 - 2023",
    year: 2020,
    description: [
      "Développement et gestion de campagnes de marketing d'affiliation dans le domaine du CPA (Coût par Action).",
      "Collaboration avec des plateformes d'affiliation et des annonceurs pour promouvoir divers produits et services.",
      "Analyse et optimisation des performances des campagnes à l'aide d'outils analytiques comme Google Analytics.",
      "Expertise en publicité en ligne via Facebook Ads, Google Ads et plateformes natives."
    ],
    skills: [
      { name: "Marketing d'affiliation", icon: FaBriefcase },
      { name: "Campagnes CPA", icon: FaChartBar },
      { name: "Google Analytics", icon: SiGoogleanalytics },
      { name: "Facebook Ads", icon: FaFacebook },
      { name: "Google Ads", icon: FaGoogle },
    ],
    logo: "/logos/adb.png" // Ajouter le chemin du logo de AdBlueMedia
  },
  {
    company: "Miza Confort",
    position: "Stagiaire Comptable",
    duration: "Avril 2019 - Juin 2019",
    year: 2019,
    description: [
      "Gestion des commandes et analyse des bilans financiers.",
      "Préparation et révision des états financiers et des bilans.",
      "Assurer une tenue de registre précise pour soutenir les prises de décisions stratégiques."
    ],
    skills: [
      { name: "Comptabilité", icon: FaMoneyCheck },
      { name: "Rapports financiers", icon: FaFileInvoice },
      { name: "Analyse de données", icon: FaChartLine },
    ],
    logo: "/logos/miza.png" // Ajouter le chemin du logo de Miza Confort
  }
];
