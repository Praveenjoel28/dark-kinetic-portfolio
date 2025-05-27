
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

const ArticlesPage = () => {
  const articles = [
    {
      title: "Building Modern Web Applications with React",
      excerpt: "Explore the latest trends and best practices in React development, including hooks, context, and performance optimization techniques.",
      date: "2024-01-15",
      readTime: "5 min read",
      category: "React",
      image: "/api/placeholder/400/200",
      featured: true
    },
    {
      title: "The Future of Web Development",
      excerpt: "Discover upcoming technologies and frameworks that will shape the future of web development in the next decade.",
      date: "2024-01-10",
      readTime: "8 min read",
      category: "Technology",
      image: "/api/placeholder/400/200",
      featured: false
    },
    {
      title: "Optimizing Website Performance",
      excerpt: "Learn proven strategies to improve your website's loading speed and overall performance for better user experience.",
      date: "2024-01-05",
      readTime: "6 min read",
      category: "Performance",
      image: "/api/placeholder/400/200",
      featured: false
    },
    {
      title: "CSS Grid vs Flexbox: When to Use What",
      excerpt: "A comprehensive guide to understanding the differences between CSS Grid and Flexbox and when to use each layout method.",
      date: "2023-12-28",
      readTime: "7 min read",
      category: "CSS",
      image: "/api/placeholder/400/200",
      featured: false
    },
    {
      title: "JavaScript ES6+ Features You Should Know",
      excerpt: "Master the essential ES6+ features that every modern JavaScript developer should understand and use in their projects.",
      date: "2023-12-20",
      readTime: "10 min read",
      category: "JavaScript",
      image: "/api/placeholder/400/200",
      featured: false
    },
    {
      title: "Responsive Design Best Practices",
      excerpt: "Create beautiful, mobile-first designs that work seamlessly across all devices and screen sizes.",
      date: "2023-12-15",
      readTime: "4 min read",
      category: "Design",
      image: "/api/placeholder/400/200",
      featured: false
    }
  ];

  const featuredArticle = articles.find(article => article.featured);
  const regularArticles = articles.filter(article => !article.featured);

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
          Featured <span className="neon-text">Articles</span>
        </motion.h2>

        {/* Featured Article */}
        {featuredArticle && (
          <motion.div
            className="max-w-4xl mx-auto mb-16"
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500">
              <div className="md:flex">
                <div className="md:w-1/2">
                  <motion.div
                    className="h-64 md:h-full bg-gradient-to-br from-neon-blue to-neon-purple"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:w-1/2 p-8">
                  <div className="flex items-center mb-4">
                    <span className="px-3 py-1 bg-neon-blue rounded-full text-white text-sm font-semibold">
                      Featured
                    </span>
                    <span className="ml-3 px-3 py-1 bg-white/10 rounded-full text-gray-300 text-sm">
                      {featuredArticle.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">{featuredArticle.title}</h3>
                  <p className="text-gray-300 mb-6 leading-relaxed">{featuredArticle.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(featuredArticle.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {featuredArticle.readTime}
                      </div>
                    </div>
                    <motion.button
                      className="flex items-center text-neon-blue hover:text-white transition-colors"
                      whileHover={{ x: 5 }}
                    >
                      Read More <ArrowRight size={16} className="ml-1" />
                    </motion.button>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}

        {/* Regular Articles Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {regularArticles.map((article, index) => (
            <motion.article
              key={index}
              className="glass-effect rounded-2xl overflow-hidden hover:glow-effect transition-all duration-500"
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.4 + index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <motion.div
                className="h-48 bg-gradient-to-br from-neon-purple to-neon-pink"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3 }}
              />
              
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-gray-300 text-xs">
                    {article.category}
                  </span>
                  <span className="text-gray-400 text-xs">{article.readTime}</span>
                </div>
                
                <h3 className="text-lg font-bold text-white mb-3 line-clamp-2">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-xs text-gray-400">
                    <Calendar size={12} className="mr-1" />
                    {new Date(article.date).toLocaleDateString()}
                  </div>
                  <motion.button
                    className="text-neon-blue hover:text-white transition-colors text-sm flex items-center"
                    whileHover={{ x: 3 }}
                  >
                    Read <ArrowRight size={12} className="ml-1" />
                  </motion.button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1 }}
        >
          <p className="text-gray-300 mb-6">
            Want to stay updated with my latest articles and insights?
          </p>
          <motion.button
            className="px-8 py-4 bg-gradient-to-r from-neon-purple to-neon-pink rounded-full text-white font-semibold hover:shadow-lg transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Subscribe to Newsletter
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
};

export default ArticlesPage;
