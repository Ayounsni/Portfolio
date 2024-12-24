"use client";
import React from 'react'
import { motion } from 'framer-motion';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import StyledPic from '../Styledpic';
import { FaLightbulb, FaCode, FaPizzaSlice, FaHiking, FaPuzzlePiece, FaChalkboardTeacher } from 'react-icons/fa';
import { useScrollSection } from '@/hooks/use-scroll-section';
import { CardSpotlight } from '../ui/card-spotlight';

const AboutMe: React.FC = () => {
  const { ref, isVisible } = useScrollSection();

  return (
    <div id="about" className="relative w-full flex flex-col sm:flex-row py-20 scroll-mt-20" ref={ref}>
      <motion.div 
      className="w-full sm:w-[70%] pr-0 sm:pr-8 mb-8 sm:mb-0"
        initial={{ opacity: 0, x: -50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5 }}
      >
      <Card className="w-full bg-card text-card-foreground">
        <CardHeader>
          <CardTitle className="text-2xl sm:text-3xl font-bold text-primary flex items-center">
            <FaLightbulb className="mr-2" /> À Propos de Moi
          </CardTitle>
        </CardHeader>
        <CardContent className="text-sm sm:text-base text-foreground space-y-4">
          <p>
            👋 Bonjour! Je suis <strong>Snini Ayoub</strong>, un Développeur Fullstack passionné par la création de solutions web innovantes et élégantes. Mon parcours atypique, allant des sciences physiques à la programmation, m&#39;a permis de développer une approche unique pour résoudre des problèmes complexes.
          </p>
          <p>
            <FaCode className="inline-block mr-2" />
            Avec une solide expérience dans le développement web, je maîtrise des technologies comme Java, React, et Laravel, que j utilise pour transformer des idées en projets concrets. Mon objectif ? Construire des applications qui allient performance et design pour offrir une expérience utilisateur exceptionnelle.
          </p>
          <p>
            Quand je ne suis pas en train de coder ou de concevoir des interfaces, vous pourriez me trouver :
          </p>
          <ul className="list-disc pl-5 space-y-2">
            <li>
              <FaPizzaSlice className="inline-block mr-2" /> À la recherche du plat parfait qui ravira mes papilles (je suis aussi un fin cuisinier !)
            </li>
            <li>
              <FaHiking className="inline-block mr-2" /> Explorant de nouveaux sentiers de randonnée et me ressourçant dans la nature
            </li>
            <li>
              <FaPuzzlePiece className="inline-block mr-2" /> Résolvant des casse-têtes pour cultiver ma curiosité et ma créativité
            </li>
          </ul>
          <p>
            Aujourd’hui, je suis pleinement engagé dans le perfectionnement de mes compétences en développement fullstack et dans l&#39;exploration de nouvelles technologies comme l&#39;intelligence artificielle. J&#39;ai une philosophie simple : apprendre en continu, m&#39;améliorer sans cesse, et partager mes connaissances pour créer un impact positif autour de moi. La technologie est un outil puissant, et je suis déterminé à l’utiliser pour simplifier la vie et résoudre des défis du quotidien.
          </p>
        </CardContent>
      </Card>

      </motion.div>
      <motion.div 
        className="w-full sm:w-[30%] flex justify-center items-center"
        initial={{ opacity: 0, x: 50 }}
        animate={isVisible ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className='w-full max-w-[250px] aspect-square'>
          <StyledPic />
        </div>
      </motion.div>
    </div>
  )
}

export default AboutMe
