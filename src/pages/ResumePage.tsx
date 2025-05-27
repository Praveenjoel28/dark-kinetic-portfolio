
import { motion } from "framer-motion";
import { Download, Eye, FileText, Star } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";
import { toast } from "sonner";

const ResumePage = () => {
  const handleDownload = () => {
    // Create a link to the resume image
    const link = document.createElement('a');
    link.href = '/lovable-uploads/5709ec3a-ecd6-4660-a9c6-61581d3a506d.png';
    link.download = 'Praveen_Joel_P_Resume.png';
    link.click();
    toast.success("Resume downloaded successfully!");
  };

  const handlePreview = () => {
    window.open('/lovable-uploads/5709ec3a-ecd6-4660-a9c6-61581d3a506d.png', '_blank');
  };

  const resumeHighlights = [
    {
      icon: <Star className="w-6 h-6" />,
      title: "Education",
      content: "Bachelor of Computer Application (7.0 CGPA) from Agurchand manmull jain college"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Key Project",
      content: "Dynamic E-commerce Website with 30% improved load speed"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Skills",
      content: "HTML, CSS, JavaScript, Adobe Photoshop, Canva, Microsoft Excel"
    },
    {
      icon: <Star className="w-6 h-6" />,
      title: "Certifications",
      content: "Web Development, Python, SQL from Skillradar and Udemy"
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
          My <span className="neon-text">Resume</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {/* Resume Preview Card */}
          <motion.div
            className="glass-effect rounded-2xl p-8 mb-12 text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <motion.div
              className="w-24 h-24 mx-auto mb-6 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full flex items-center justify-center"
              whileHover={{ scale: 1.1, rotate: 360 }}
              transition={{ duration: 0.6 }}
            >
              <FileText className="w-12 h-12 text-white" />
            </motion.div>

            <h3 className="text-2xl font-bold text-white mb-4">
              Praveen Joel P - Resume
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Full Stack Developer with expertise in web technologies, creative design tools, 
              and a passion for building innovative digital solutions. Download my resume to 
              learn more about my experience and qualifications.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                onClick={handleDownload}
                className="flex items-center justify-center px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold text-lg hover:shadow-lg transition-all duration-300 glow-effect"
                whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(0, 212, 255, 0.6)" }}
                whileTap={{ scale: 0.95 }}
              >
                <Download className="mr-2" size={20} />
                Download Resume
              </motion.button>

              <motion.button
                onClick={handlePreview}
                className="flex items-center justify-center px-8 py-4 border-2 border-neon-blue rounded-full text-neon-blue font-semibold text-lg hover:bg-neon-blue hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Eye className="mr-2" size={20} />
                Preview Resume
              </motion.button>
            </div>
          </motion.div>

          {/* Resume Highlights */}
          <motion.div
            className="grid md:grid-cols-2 gap-6"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            {resumeHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="glass-effect rounded-xl p-6 hover:glow-effect transition-all duration-300"
                initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div
                    className="text-neon-blue flex-shrink-0"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    {highlight.icon}
                  </motion.div>
                  <div>
                    <h4 className="text-lg font-bold text-white mb-2">{highlight.title}</h4>
                    <p className="text-gray-300 text-sm leading-relaxed">{highlight.content}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="text-center mt-12 glass-effect rounded-2xl p-8"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            <h4 className="text-2xl font-bold text-neon-blue mb-4">Interested in Working Together?</h4>
            <p className="text-gray-300 mb-6">
              I'm currently available for freelance projects and full-time opportunities. 
              Let's discuss how I can contribute to your team!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.a
                href="mailto:praveenjo2822@gmail.com"
                className="px-6 py-3 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Email Me
              </motion.a>
              <motion.a
                href="tel:9962660862"
                className="px-6 py-3 border border-neon-blue rounded-full text-neon-blue hover:bg-neon-blue hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Call Me
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ResumePage;
