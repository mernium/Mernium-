import { motion } from 'framer-motion'
import { Code, Database, Globe, Layers, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Courses = () => {
  return (
    <div className="relative pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient-emerald-gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Courses / Curriculum
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MERN Stack with real projects and interview mapping
          </motion.p>
        </div>
      </section>

      {/* Teaching Method Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10 text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Layers className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Teaching Method
            </h2>
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xl text-gray-300">
              <span className="px-6 py-3 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                What it is
              </span>
              <ArrowRight className="w-6 h-6 text-emerald-400" />
              <span className="px-6 py-3 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                Why it exists
              </span>
              <ArrowRight className="w-6 h-6 text-emerald-400" />
              <span className="px-6 py-3 bg-emerald-500/20 rounded-full border border-emerald-500/30">
                How interviewers ask it
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* MERN Stack Overview */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              MERN Stack
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Complete full-stack development with frontend and backend
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mb-16">
            {/* Frontend */}
            <motion.div
              className="glass rounded-2xl p-8 border-2 border-emerald-500/30"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Globe className="w-16 h-16 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Frontend</h3>
              <div className="space-y-4">
                {[
                  'React.js fundamentals',
                  'State management',
                  'Hooks and advanced patterns',
                  'Routing and navigation',
                  'Component architecture',
                  'UI/UX best practices',
                  'Performance optimization',
                  'Real-world projects',
                ].map((topic, index) => (
                  <motion.div
                    key={topic}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Backend */}
            <motion.div
              className="glass rounded-2xl p-8 border-2 border-emerald-500/30"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Database className="w-16 h-16 text-emerald-400 mb-6" />
              <h3 className="text-3xl font-bold text-white mb-6">Backend</h3>
              <div className="space-y-4">
                {[
                  'Node.js fundamentals',
                  'Express.js framework',
                  'RESTful APIs',
                  'Database design (MongoDB)',
                  'Authentication & authorization',
                  'Middleware and security',
                  'API optimization',
                  'Real-world projects',
                ].map((topic, index) => (
                  <motion.div
                    key={topic}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.05 }}
                  >
                    <div className="w-2 h-2 rounded-full bg-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{topic}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Real Projects Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Code className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              Real Projects
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build projects that showcase real skills, not just tutorials
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: 'E-Commerce Platform',
                description: 'Full-stack e-commerce with payment integration, user management, and admin panel.',
              },
              {
                title: 'Social Media App',
                description: 'Build a social platform with real-time features, authentication, and media handling.',
              },
              {
                title: 'Project Management Tool',
                description: 'Create a comprehensive project management system with teams, tasks, and analytics.',
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                className="glass rounded-2xl p-8 border border-emerald-500/20"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <h3 className="text-2xl font-semibold text-white mb-4">{project.title}</h3>
                <p className="text-gray-300 text-lg">{project.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interview Mapping Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              Interview Mapping
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Every topic is mapped to real interview questions
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-12 border-2 border-emerald-500/30 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl text-gray-300 text-center mb-8">
              For every concept we teach, you'll learn:
            </p>
            <div className="space-y-4">
              {[
                'How interviewers ask about this topic',
                'Common variations of questions',
                'Expected answer structure',
                'Edge cases and advanced scenarios',
                'Related follow-up questions',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  className="flex items-start gap-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-400 to-gold-400 flex items-center justify-center flex-shrink-0 mt-1">
                    <div className="w-2 h-2 rounded-full bg-black" />
                  </div>
                  <span className="text-gray-300 text-lg">{point}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/apply">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald-strong hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Learning
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Courses
