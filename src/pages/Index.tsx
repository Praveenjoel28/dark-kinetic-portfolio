
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navigation from "../components/Navigation";
import AnimatedBackground from "../components/AnimatedBackground";
import SocialLinks from "../components/SocialLinks";
import HeroPage from "./HeroPage";
import AboutPage from "./AboutPage";
import ProjectsPage from "./ProjectsPage";
import SkillsPage from "./SkillsPage";
import ContactPage from "./ContactPage";
import ArticlesPage from "./ArticlesPage";
import ProfilesPage from "./ProfilesPage";
import ResumePage from "./ResumePage";

const Index = () => {
  const [currentPage, setCurrentPage] = useState("hero");

  const pages = {
    hero: HeroPage,
    about: AboutPage,
    projects: ProjectsPage,
    skills: SkillsPage,
    contact: ContactPage,
    articles: ArticlesPage,
    profiles: ProfilesPage,
    resume: ResumePage,
  };

  const CurrentPageComponent = pages[currentPage as keyof typeof pages];

  const pageTransition = {
    initial: { opacity: 0, y: 100, scale: 0.9 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -100, scale: 1.1 },
  };

  return (
    <div className="min-h-screen bg-dark-bg text-white overflow-x-hidden">
      <AnimatedBackground />
      <Navigation currentPage={currentPage} onPageChange={setCurrentPage} />
      <SocialLinks />
      
      <AnimatePresence mode="wait">
        <motion.div
          key={currentPage}
          initial="initial"
          animate="animate"
          exit="exit"
          variants={pageTransition}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="relative z-10"
        >
          <CurrentPageComponent onPageChange={setCurrentPage} />
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
