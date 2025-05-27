
import { motion } from "framer-motion";
import { ExternalLink, Github, Code, Trophy } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const ProfilesPage = () => {
  const profiles = [
    {
      name: "GitHub",
      description: "My open source projects and contributions",
      url: "https://github.com/praveenjoel",
      icon: <Github className="w-8 h-8" />,
      color: "from-gray-600 to-gray-800",
      stats: "20+ Repositories",
      featured: true
    },
    {
      name: "LeetCode",
      description: "Algorithmic problem solving and coding challenges",
      url: "#",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-500 to-orange-700",
      stats: "Coming Soon",
      featured: false
    },
    {
      name: "SkillRack",
      description: "Programming practice and skill development",
      url: "#",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-blue-500 to-blue-700",
      stats: "Active Profile",
      featured: false
    },
    {
      name: "CodePen",
      description: "Frontend experiments and creative coding",
      url: "#",
      icon: <Code className="w-8 h-8" />,
      color: "from-green-500 to-green-700",
      stats: "HTML/CSS/JS Demos",
      featured: false
    },
    {
      name: "HackerRank",
      description: "Coding challenges and certifications",
      url: "#",
      icon: <Trophy className="w-8 h-8" />,
      color: "from-green-600 to-green-800",
      stats: "Problem Solving",
      featured: false
    },
    {
      name: "Stack Overflow",
      description: "Community contributions and Q&A",
      url: "#",
      icon: <Code className="w-8 h-8" />,
      color: "from-orange-600 to-orange-800",
      stats: "Growing Reputation",
      featured: false
    }
  ];

  const achievements = [
    {
      title: "Web Development Certificate",
      platform: "Skillradar Platform",
      description: "Comprehensive web development course completion",
      date: "2024"
    },
    {
      title: "Python Programming Certificate",
      platform: "Udemy Platform",
      description: "Python fundamentals and advanced concepts",
      date: "2024"
    },
    {
      title: "SQL Database Certificate",
      platform: "Udemy Platform",
      description: "Database design and SQL query optimization",
      date: "2024"
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
          Coding <span className="neon-text">Profiles</span>
        </motion.h2>

        {/* Profiles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {profiles.map((profile, index) => (
            <motion.a
              key={index}
              href={profile.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block glass-effect rounded-2xl p-6 hover:glow-effect transition-all duration-500 group"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="flex items-center justify-between mb-4">
                <motion.div
                  className={`p-3 rounded-xl bg-gradient-to-r ${profile.color} text-white`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  {profile.icon}
                </motion.div>
                {profile.featured && (
                  <span className="px-2 py-1 bg-neon-blue rounded-full text-white text-xs font-semibold">
                    Featured
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors">
                {profile.name}
              </h3>
              
              <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                {profile.description}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-xs text-gray-400">{profile.stats}</span>
                <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-neon-blue transition-colors" />
              </div>
            </motion.a>
          ))}
        </div>

        {/* Achievements Section */}
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <h3 className="text-3xl font-bold text-center mb-8 text-neon-blue">
            Certifications & Achievements
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 1 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="text-center">
                  <motion.div
                    className="w-12 h-12 mx-auto mb-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full flex items-center justify-center"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Trophy className="w-6 h-6 text-white" />
                  </motion.div>
                  
                  <h4 className="text-lg font-bold text-white mb-2">{achievement.title}</h4>
                  <p className="text-neon-blue text-sm font-semibold mb-2">{achievement.platform}</p>
                  <p className="text-gray-300 text-xs mb-3">{achievement.description}</p>
                  <span className="text-gray-400 text-xs">{achievement.date}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.4 }}
        >
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm constantly learning and improving my skills across various platforms. 
            Follow my coding journey and connect with me on these platforms!
          </p>
          <motion.a
            href="https://github.com/praveenjoel"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github className="mr-2" size={20} />
            Follow on GitHub
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfilesPage;
