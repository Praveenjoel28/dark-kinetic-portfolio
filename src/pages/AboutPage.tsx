
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { GraduationCap, Award, Code2 } from "lucide-react";

const AboutPage = () => {
  const achievements = [
    {
      icon: <GraduationCap className="w-8 h-8" />,
      title: "Education",
      description: "Bachelor of Computer Application (7.0 CGPA)",
      institution: "Agurchand manmull jain college, Madras University",
      year: "2022-2025"
    },
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Key Project",
      description: "Dynamic E-commerce Website",
      details: "Built with HTML, CSS, JavaScript featuring responsive design and 30% improved load speed"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certifications",
      description: "Web Development, Python, SQL",
      platforms: "Skillradar, Udemy Platforms"
    }
  ];

  return (
    <div className="min-h-screen relative py-20">
      <ParticlesBackground />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h2
            className="text-5xl md:text-6xl font-bold text-center mb-12"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            About <span className="neon-text">Me</span>
          </motion.h2>

          <motion.div
            className="glass-effect rounded-2xl p-8 mb-12"
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <h3 className="text-2xl font-bold mb-6 text-neon-blue">My Journey</h3>
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              I'm a passionate web developer and creative technologist with a strong foundation in 
              computer applications. Currently pursuing my Bachelor's degree, I specialize in 
              creating dynamic, responsive web experiences that blend functionality with aesthetic appeal.
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              My expertise spans across HTML, CSS, JavaScript, and modern frameworks. I'm driven by 
              the challenge of turning complex problems into simple, beautiful, and intuitive solutions. 
              When I'm not coding, you'll find me exploring new technologies, watching movies, or 
              playing cricket.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.2 }}
                whileHover={{ scale: 1.05 }}
              >
                <motion.div
                  className="text-neon-blue mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {achievement.icon}
                </motion.div>
                <h4 className="text-xl font-bold mb-3 text-white">{achievement.title}</h4>
                <p className="text-neon-blue font-semibold mb-2">{achievement.description}</p>
                {achievement.institution && (
                  <p className="text-gray-400 text-sm mb-1">{achievement.institution}</p>
                )}
                {achievement.year && (
                  <p className="text-gray-400 text-sm">{achievement.year}</p>
                )}
                {achievement.details && (
                  <p className="text-gray-400 text-sm">{achievement.details}</p>
                )}
                {achievement.platforms && (
                  <p className="text-gray-400 text-sm">{achievement.platforms}</p>
                )}
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1.2 }}
          >
            <p className="text-xl text-gray-300 mb-6">
              "To secure a position in a company that provides opportunities for career growth 
              and advancement while allowing me to utilize my skills and knowledge to contribute 
              to the organization's success."
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {["Quick Learner", "Creative Problem Solver", "Team Player"].map((trait, index) => (
                <motion.span
                  key={index}
                  className="px-4 py-2 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-white text-sm"
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                >
                  {trait}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutPage;
