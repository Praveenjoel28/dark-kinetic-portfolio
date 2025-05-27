
import { motion } from "framer-motion";
import { Github, Linkedin, Instagram, Youtube, Twitter } from "lucide-react";

const SocialLinks = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-6 h-6" />,
      url: "https://github.com/praveenjoel",
      color: "hover:text-gray-400"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-6 h-6" />,
      url: "#",
      color: "hover:text-blue-400"
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-6 h-6" />,
      url: "#",
      color: "hover:text-pink-400"
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-6 h-6" />,
      url: "#",
      color: "hover:text-red-400"
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-6 h-6" />,
      url: "#",
      color: "hover:text-blue-300"
    }
  ];

  return (
    <motion.div
      className="fixed right-6 top-1/2 transform -translate-y-1/2 z-40 hidden lg:block"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      <div className="flex flex-col space-y-4">
        {socialLinks.map((link, index) => (
          <motion.a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className={`p-3 glass-effect rounded-full text-gray-300 ${link.color} transition-all duration-300 hover:scale-110`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 1.2 + index * 0.1 }}
            whileHover={{ scale: 1.2, boxShadow: "0 0 20px rgba(0, 212, 255, 0.5)" }}
            whileTap={{ scale: 0.9 }}
          >
            {link.icon}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default SocialLinks;
