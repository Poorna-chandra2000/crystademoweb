import { motion } from 'framer-motion';
import { BookOpen, Users, Award, BarChart } from 'lucide-react';

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
    y: 0
  }
};

export default function Features() {
  const features = [
    {
      icon: BookOpen,
      title: "Comprehensive Curriculum",
      description: "Expert-crafted courses covering everything from UPSC preparation to full-stack development."
    },
    {
      icon: Users,
      title: "Expert Mentorship",
      description: "Learn from industry veterans and successful entrepreneurs who've been there, done that."
    },
    {
      icon: Award,
      title: "Proven Track Record",
      description: "Thousands of successful alumni in civil services, tech industry, and startup ecosystem."
    },
    {
      icon: BarChart,
      title: "Progress Tracking",
      description: "Advanced analytics and progress tracking to keep you on course to success."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-[#2D1B48] to-[#1A0F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Why Choose Crystal?</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine cutting-edge technology with expert instruction to deliver an unmatched learning experience.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.15)",
              }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-8 transform transition-all duration-300 hover:shadow-2xl"
            >
              <feature.icon className="w-12 h-12 text-rose-300 mb-6" />
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}