import { useLanguage } from '@/hooks/useLanguage';
import { motion } from 'framer-motion';
import { Globe } from 'lucide-react';

export default function LanguageSwitch() {
  const { currentLanguage, toggleLanguage } = useLanguage();

  return (
    <motion.button
      onClick={toggleLanguage}
      className="relative flex items-center gap-2 px-3 py-2 rounded-glass glass hover:bg-white/10 transition-colors"
      whileTap={{ scale: 0.95 }}
      aria-label="Toggle language"
    >
      <Globe className="w-4 h-4 text-text-secondary" />
      <span className="text-sm font-medium text-text-primary">
        {currentLanguage === 'zh' ? 'EN' : '中'}
      </span>
      <motion.div
        className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-accent-primary rounded-full"
        initial={false}
        animate={{
          scaleX: currentLanguage === 'en' ? 1 : 0,
        }}
        transition={{ duration: 0.2 }}
      />
    </motion.button>
  );
}
