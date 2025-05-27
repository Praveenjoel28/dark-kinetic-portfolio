
import { motion } from "framer-motion";
import ParticlesBackground from "../components/ParticlesBackground";
import { Code2, Palette, Database, Globe, Zap, Brain } from "lucide-react";

const SkillsPage = () => {
  const skillCategories = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Programming",
      color: "from-neon-blue to-blue-500",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 88 },
        { name: "JavaScript", level: 85 },
        { name: "Git & GitHub", level: 80 }
      ]
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Design Tools",
      color: "from-neon-purple to-purple-500",
      skills: [
        { name: "Adobe Photoshop", level: 85 },
        { name: "Canva", level: 90 },
        { name: "Filmora", level: 80 },
        { name: "Adobe Premiere Pro", level: 75 }
      ]
    },
    {
      icon: <Database className="w-8 h-8" />,
      title: "Data & Analytics",
      color: "from-neon-pink to-pink-500",
      skills: [
        { name: "Microsoft Excel", level: 85 },
        { name: "SQL", level: 70 },
        { name: "Data Analysis", level: 75 },
        { name: "Database Design", level: 70 }
      ]
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Technologies",
      color: "from-green-400 to-green-600",
      skills: [
        { name: "Responsive Design", level: 90 },
        { name: "Cross-browser Compatibility", level: 85 },
        { name: "Web Performance", level: 80 },
        { name: "SEO Basics", level: 75 }
      ]
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Soft Skills",
      color: "from-yellow-400 to-orange-500",
      skills: [
        { name: "Quick Learner", level: 95 },
        { name: "Problem Solving", level: 90 },
        { name: "Team Collaboration", level: 88 },
        { name: "Communication", level: 85 }
      ]
    },
    {
      icon: <Brain className="w-8 h-8" />,
      title: "Personal Qualities",
      color: "from-indigo-400 to-indigo-600",
      skills: [
        { name: "Creativity", level: 90 },
        { name: "Adaptability", level: 88 },
        { name: "Attention to Detail", level: 85 },
        { name: "Time Management", level: 82 }
      ]
    }
  ];

  const languages = [
    { name: "English", level: 90 },
    { name: "Tamil", level: 100 }
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
          My <span className="neon-text">Skills</span>
        </motion.h2>

        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-500"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: categoryIndex * 0.1 }}
              whileHover={{ scale: 1.02 }}
            >
              <div className="flex items-center mb-6">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${category.color} text-white mr-4`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {category.icon}
                </motion.div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skillIndex}
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: categoryIndex * 0.1 + skillIndex * 0.1 }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300 text-sm">{skill.name}</span>
                      <span className="text-neon-blue text-sm font-semibold">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        className={`h-2 rounded-full bg-gradient-to-r ${category.color}`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: categoryIndex * 0.1 + skillIndex * 0.1 + 0.5 }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Languages Section */}
        <motion.div
          className="max-w-2xl mx-auto glass-effect rounded-2xl p-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-2xl font-bold text-center mb-8 text-neon-blue">Languages</h3>
          <div className="grid md:grid-cols-2 gap-8">
            {languages.map((language, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.2 }}
              >
                <div className="relative w-24 h-24 mx-auto mb-4">
                  <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="8"
                      fill="none"
                    />
                    <motion.circle
                      cx="50"
                      cy="50"
                      r="40"
                      stroke="url(#gradient)"
                      strokeWidth="8"
                      fill="none"
                      strokeLinecap="round"
                      strokeDasharray={`${2 * Math.PI * 40}`}
                      initial={{ strokeDashoffset: 2 * Math.PI * 40 }}
                      animate={{ strokeDashoffset: 2 * Math.PI * 40 * (1 - language.level / 100) }}
                      transition={{ duration: 2, delay: 1 + index * 0.2 }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#00d4ff" />
                        <stop offset="100%" stopColor="#b77dff" />
                      </linearGradient>
                    </defs>
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">{language.level}%</span>
                  </div>
                </div>
                <h4 className="text-xl font-semibold text-white">{language.name}</h4>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default SkillsPage;
