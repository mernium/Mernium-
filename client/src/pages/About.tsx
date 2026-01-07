import { motion } from 'framer-motion'
import { Target, Lightbulb, Shield, TrendingUp } from 'lucide-react'

const About = () => {
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
            About MERNIUM
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            We don't just train developers. We remove fear.
          </motion.p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-red-500/20 bg-red-500/5 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              The Problem with Traditional Institutes
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Certificate-focused, not skill-focused',
                'Time-based completion, not readiness-based',
                'No interview preparation',
                'No confidence building',
                'No communication training',
                'Students graduate unprepared',
              ].map((problem, index) => (
                <motion.div
                  key={problem}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="w-2 h-2 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                  <p className="text-gray-300 text-lg">{problem}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
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
              The MERNIUM Solution
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Interview-First Learning',
                description: 'Every concept is taught with interview questions in mind. You learn what matters.',
              },
              {
                icon: Lightbulb,
                title: 'Confidence Transformation',
                description: 'We build your confidence through daily practice, mock interviews, and real feedback.',
              },
              {
                icon: Shield,
                title: 'No Shortcuts',
                description: 'You proceed only when you\'re ready. No forced completion. No time pressure.',
              },
              {
                icon: TrendingUp,
                title: 'Real Development',
                description: 'Real projects, real interviews, real confidence. You become job-ready, not certificate-ready.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="glass rounded-2xl p-8 border border-emerald-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Icon className="w-12 h-12 text-emerald-400 mb-4" />
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Final Goal Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12 md:p-16 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              We don't just train developers.
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-emerald-gold"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              We remove fear.
            </motion.p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About
