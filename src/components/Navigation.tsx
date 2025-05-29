import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

interface NavigationProps {
  currentPage: string;
  onPageChange: (page: string) => void;
}

const Navigation = ({ currentPage, onPageChange }: NavigationProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const pages = [
    { id: "hero", label: "Home" },
    { id: "about", label: "About" },
    { id: "projects", label: "Projects" },
    { id: "skills", label: "Skills" },
    { id: "contact", label: "Contact" },
    { id: "articles", label: "Articles" },
    { id: "profiles", label: "Profiles" },
    { id: "resume", label: "Resume" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 p-6 hidden md:block"
      >
        <div className="max-w-7xl mx-auto">
          <div className="glass-effect rounded-full px-8 py-4">
            <div className="flex items-center justify-between">
              <motion.div
                className="text-2xl font-bold neon-text font-orbitron tracking-wider"
                whileHover={{ scale: 1.05 }}
              >
                ALEX NOVA
              </motion.div>
              <div className="flex space-x-8">
                {pages.map((page) => (
                  <motion.button
                    key={page.id}
                    onClick={() => onPageChange(page.id)}
                    className={`relative px-4 py-2 transition-colors ${
                      currentPage === page.id
                        ? "text-neon-blue"
                        : "text-white hover:text-neon-blue"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {page.label}
                    {currentPage === page.id && (
                      <motion.div
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-neon-blue"
                        layoutId="activeTab"
                      />
                    )}
                  </motion.button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Navigation */}
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="fixed top-0 left-0 right-0 z-50 p-4 md:hidden"
      >
        <div className="glass-effect rounded-xl px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-xl font-bold neon-text font-orbitron tracking-wider">ALEX NOVA</div>
            <motion.button
              onClick={() => setIsOpen(!isOpen)}
              whileTap={{ scale: 0.95 }}
              className="text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="mt-4 glass-effect rounded-xl p-6"
          >
            <div className="space-y-4">
              {pages.map((page) => (
                <motion.button
                  key={page.id}
                  onClick={() => {
                    onPageChange(page.id);
                    setIsOpen(false);
                  }}
                  className={`block w-full text-left px-4 py-3 rounded-lg transition-colors ${
                    currentPage === page.id
                      ? "text-neon-blue bg-white/10"
                      : "text-white hover:text-neon-blue hover:bg-white/5"
                  }`}
                  whileHover={{ x: 10 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {page.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        )}
      </motion.nav>
    </>
  );
};

export default Navigation;
