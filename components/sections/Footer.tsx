// components/Footer.tsx
"use client"
import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter, FaEnvelope } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { useMediaQuery } from '@/hooks/use-media-query';

const Footer: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Ayounsni' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/ayoub-snini/' },
    { icon: FaInstagram, href: 'https://www.instagram.com/ayoub_snini/' },
    { icon: FaXTwitter, href: 'https://x.com/nftparkji?s=21&t=_BjmpDPx8' },
    { icon: FaEnvelope, href: 'mailto:ayoubsnini@gmail.com' },
  ];

  return (
    <motion.footer
      className="py-8 mt-20 bg-background"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4">
        {isMobile && (
          <div className="flex justify-center space-x-6 mb-6">
            {socialLinks.map((link, index) => (
              <motion.a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-primary transition-colors duration-200"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <link.icon size={24} />
              </motion.a>
            ))}
          </div>
        )}
    <motion.div
      className="text-center text-foreground"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.5 }}
    >
      <p className="text-lg font-mono">
        Conçu et réalisé par{' '}
        <span className="text-primary font-bold">
          Snini Ayoub
        </span>{' '}
        <span className="animate-pulse inline-block">🚀</span>
      </p>
      <p className="mt-2 text-sm">
        Alimenté par du café, de la curiosité et une touche d&#39;enthousiasme !
      </p>
    </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;
