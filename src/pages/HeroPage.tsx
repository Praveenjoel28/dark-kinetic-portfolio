
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import AnimatedIcon3D from "../components/AnimatedIcon3D";
import { ChevronDown } from "lucide-react";

interface HeroPageProps {
  onPageChange: (page: string) => void;
}

const HeroPage = ({ onPageChange }: HeroPageProps) => {
  return (
    <div className="min-h-screen relative flex items-center justify-center">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <AnimatedIcon3D className="mx-auto mb-8" />
          
          <motion.h1
            className="text-6xl md:text-8xl font-bold mb-6"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="neon-text">Praveen</span>
            <br />
            <span className="animated-gradient-bg bg-clip-text text-transparent">
              Joel P
            </span>
          </motion.h1>

          <motion.p
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Full Stack Developer & Creative Technologist
            <br />
            Building the future with code and creativity
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <motion.button
              onClick={() => onPageChange("contact")}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-2xl transition-all duration-300 glow-effect"
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" }}
              whileTap={{ scale: 0.95 }}
            >
              Hire Me
            </motion.button>
            
            <motion.button
              onClick={() => onPageChange("projects")}
              className="px-8 py-4 border-2 border-neon-blue rounded-full text-neon-blue font-semibold text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ChevronDown className="text-neon-blue" size={32} />
        </motion.div>
      </div>
    </div>
  );
};

export default HeroPage;
