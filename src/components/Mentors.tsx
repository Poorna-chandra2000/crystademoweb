import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
};

const cardVariants = {
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

export default function Mentors() {
  const mentors = [
    {
      name: "Dr. Rajesh Kumar",
      role: "IAS Officer & UPSC Expert",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Former IAS officer with 20+ years of experience in civil services coaching.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Sarah Chen",
      role: "Tech Lead & Software Architect",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Senior architect at leading tech companies, specializing in full-stack development.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Amit Sharma",
      role: "Startup Founder & Mentor",
      image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "Serial entrepreneur with 3 successful exits, passionate about nurturing new founders.",
      linkedin: "#",
      twitter: "#"
    },
    {
      name: "Dr. Priya Patel",
      role: "DSA & Algorithms Expert",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=80",
      description: "PhD in Computer Science, specializing in algorithms and competitive programming.",
      linkedin: "#",
      twitter: "#"
    }
  ];

  return (
    <section className="py-24 bg-[#1A0F2E]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">Learn from the Best</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our mentors are industry leaders, successful entrepreneurs, and subject matter experts committed to your success.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {mentors.map((mentor, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ 
                y: -10,
                transition: { type: "spring", stiffness: 300 }
              }}
              className="bg-gradient-to-b from-white/10 to-white/5 backdrop-blur-lg rounded-xl p-6 transform transition-all duration-300 hover:shadow-2xl"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="relative w-32 h-32 mx-auto mb-6"
              >
                <div className="absolute inset-0 bg-rose-300/20 rounded-full animate-pulse" />
                <img
                  src={mentor.image}
                  alt={mentor.name}
                  className="w-full h-full object-cover rounded-full ring-4 ring-rose-300/30"
                />
              </motion.div>
              
              <h3 className="text-xl font-semibold text-white mb-1">{mentor.name}</h3>
              <p className="text-rose-300 font-medium mb-3">{mentor.role}</p>
              <p className="text-gray-300 text-sm mb-4">{mentor.description}</p>
              
              <div className="flex justify-center space-x-4">
                <motion.a
                  href={mentor.linkedin}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-rose-300 transition-colors"
                >
                  <Linkedin size={20} />
                </motion.a>
                <motion.a
                  href={mentor.twitter}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-white/70 hover:text-rose-300 transition-colors"
                >
                  <Twitter size={20} />
                </motion.a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}