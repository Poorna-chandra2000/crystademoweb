import { motion } from 'framer-motion';
import { GraduationCap, Code, Target, Rocket } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
};

export default function Hero() {
  return (
    <div className="relative bg-[#2D1B48] text-white min-h-screen overflow-hidden">
      <motion.div
        initial={{ scale: 1.5, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80')]"
        style={{ backgroundPosition: 'center', backgroundSize: 'cover' }}
      />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, type: "spring" }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              Ignite Your <span className="text-rose-300">Brilliance</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto">
              Transform your future with our comprehensive learning platform. From competitive exams to software development and entrepreneurship.
            </p>
          </motion.div>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="bg-rose-300 text-[#2D1B48] px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              Start Learning
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05, borderColor: "#fff" }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-rose-300 text-rose-300 px-8 py-3 rounded-full font-semibold text-lg hover:shadow-lg transition-shadow"
            >
              View Courses
            </motion.button>
          </div>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="mt-24 grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          {[
            { icon: GraduationCap, title: "Competitive Exams", desc: "IAS, IPS & more" },
            { icon: Code, title: "Software Development", desc: "React, Spring Boot, DSA" },
            { icon: Target, title: "Focused Learning", desc: "Expert-led courses" },
            { icon: Rocket, title: "Founders Launchpad", desc: "Build your startup" }
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -10,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 text-center transform transition-all duration-300 hover:shadow-2xl"
            >
              <item.icon className="w-12 h-12 mx-auto mb-4 text-rose-300" />
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-300">{item.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}