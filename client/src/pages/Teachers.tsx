import { motion } from 'framer-motion'
import { User, Code, BookOpen, Heart, Award } from 'lucide-react'

const Teachers = () => {
  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient-emerald-gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Teachers / Mentors
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Real developers. Real experience. Real mentorship.
          </motion.p>
        </div>
      </section>

      {/* Founder Profile */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="glass rounded-3xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10 text-center"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-gold-500 flex items-center justify-center">
                <User className="w-16 h-16 text-black" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-4">Founder</h2>
              <p className="text-emerald-400 text-xl mb-6">Real Developer Background</p>
              <div className="space-y-4 text-left">
                <div className="flex items-start gap-3">
                  <Code className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Years of real-world development experience</p>
                </div>
                <div className="flex items-start gap-3">
                  <Award className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Interview experience from both sides</p>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="w-6 h-6 text-emerald-400 flex-shrink-0 mt-1" />
                  <p className="text-gray-300">Passion for creating confident developers</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass rounded-2xl p-8 border border-emerald-500/20">
                <BookOpen className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Teaching Philosophy</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  We believe in interview-first learning. Every concept is taught with the question: 
                  "How will this be asked in an interview?" We don't just teach code; we teach confidence, 
                  clarity, and readiness.
                </p>
              </div>

              <div className="glass rounded-2xl p-8 border border-emerald-500/20">
                <Heart className="w-12 h-12 text-emerald-400 mb-4" />
                <h3 className="text-2xl font-semibold text-white mb-4">Mentorship Role</h3>
                <p className="text-gray-300 text-lg leading-relaxed">
                  As mentors, we're not just instructors. We're your guides through the transformation 
                  from learner to confident developer. We provide feedback, support, and real-world 
                  insights from our own experience.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              What Makes Us Different
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Real Developer Experience',
                description: 'We\'ve been through interviews, built real projects, and faced the challenges you\'ll face.',
              },
              {
                icon: BookOpen,
                title: 'Interview-First Approach',
                description: 'Every lesson is designed with interviews in mind. No fluff. Only what matters.',
              },
              {
                icon: Heart,
                title: 'Personal Mentorship',
                description: 'We care about your growth. Individual attention, feedback, and support throughout.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="glass rounded-2xl p-8 border border-emerald-500/20 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                >
                  <Icon className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final Message */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Heart className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              We're not just teachers.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gradient-emerald-gold">
              We're your partners in transformation.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Teachers
