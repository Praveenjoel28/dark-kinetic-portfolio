
import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Dynamic E-commerce Website",
      description: "A fully functional e-commerce platform with responsive design, interactive elements, and optimized performance. Built using modern web technologies.",
      tech: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      features: [
        "Responsive design for all devices",
        "Interactive product filtering",
        "30% improved page load speed",
        "Custom animations and effects",
        "Product cart functionality"
      ],
      image: "/lovable-uploads/095c9629-cdcd-4c79-ad35-b7c59e05081f.png",
      demoUrl: "#",
      githubUrl: "https://github.com/praveenjoel"
    },
    {
      title: "Portfolio Website",
      description: "A modern, animated portfolio website showcasing my skills and projects with stunning visual effects and smooth transitions.",
      tech: ["React", "Three.js", "Framer Motion", "Tailwind CSS"],
      features: [
        "3D animations and effects",
        "Interactive particle system",
        "Smooth page transitions",
        "Mobile-first responsive design",
        "Dark theme with neon accents"
      ],
      image: "/api/placeholder/400/250",
      demoUrl: "#",
      githubUrl: "https://github.com/praveenjoel"
    }
  ];

  return (
    <div className="min-h-screen relative py-20">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.h2
          className="text-5xl md:text-6xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          My <span className="neon-text">Projects</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.2 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                  <div className="text-white text-center">
                    <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                    <p className="text-sm opacity-80">Hover to explore</p>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-white">{project.title}</h3>
                <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="mb-4">
                  <h4 className="text-neon-blue font-semibold mb-2 text-sm">Technologies:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-2 py-1 bg-white/10 rounded-lg text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h4 className="text-neon-purple font-semibold mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, featureIndex) => (
                      <li key={featureIndex} className="text-xs text-gray-300 flex items-center">
                        <span className="w-1 h-1 bg-neon-pink rounded-full mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="flex gap-3">
                  <motion.a
                    href={project.demoUrl}
                    className="flex-1 bg-gradient-to-r from-neon-blue to-neon-purple py-2 px-4 rounded-lg text-white text-center text-sm font-semibold hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={14} className="inline mr-2" />
                    Demo
                  </motion.a>
                  <motion.a
                    href={project.githubUrl}
                    className="flex-1 border border-neon-blue py-2 px-4 rounded-lg text-neon-blue text-center text-sm font-semibold hover:bg-neon-blue hover:text-white transition-all duration-300"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={14} className="inline mr-2" />
                    Code
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <motion.a
            href="https://github.com/praveenjoel"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectsPage;
