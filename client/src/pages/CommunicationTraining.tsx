import { motion } from 'framer-motion'
import { Languages, Mic, Eye, Volume2, User, DollarSign, HelpCircle, Sparkles } from 'lucide-react'

const CommunicationTraining = () => {
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
            Communication & Confidence Training
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Your fear will be wiped out. You will become a completely new, job-ready person.
          </motion.p>
        </div>
      </section>

      {/* Promise Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-emerald-500/10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              Your fear will be wiped out.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gradient-emerald-gold">
              You will become a completely new, job-ready person.
            </p>
          </motion.div>
        </div>
      </section>

      {/* English Training Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Languages className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              English Training
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Daily speaking practice to build confidence in technical communication
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Mic,
                title: 'Daily Speaking',
                description: 'Regular speaking practice to build fluency and confidence in English communication.',
              },
              {
                icon: Languages,
                title: 'Technical Explanation',
                description: 'Learn to explain complex technical concepts clearly and effectively in English.',
              },
              {
                icon: Volume2,
                title: 'Sentence Structuring',
                description: 'Master sentence formation, grammar, and clear articulation of thoughts.',
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

      {/* Confidence Training Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Sparkles className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              Confidence Training
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Build unshakeable confidence through body language, voice control, and presence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Eye,
                title: 'Body Language',
                description: 'Master confident posture, gestures, and non-verbal communication.',
              },
              {
                icon: Eye,
                title: 'Eye Contact',
                description: 'Build confidence in maintaining eye contact during conversations.',
              },
              {
                icon: Volume2,
                title: 'Voice Control',
                description: 'Learn to modulate your voice, pace, and tone for maximum impact.',
              },
              {
                icon: Mic,
                title: 'Speaking Drills',
                description: 'Practice speaking in various scenarios to build natural confidence.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="glass rounded-2xl p-6 border border-gold-500/20"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Icon className="w-10 h-10 text-gold-400 mb-4" />
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* HR Training Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <User className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              HR Training
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Prepare for the human side of interviews
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: User,
                title: 'Self-Introduction',
                description: 'Craft and deliver a compelling self-introduction that makes a lasting impression.',
              },
              {
                icon: DollarSign,
                title: 'Salary Discussion',
                description: 'Learn to negotiate salary confidently and professionally.',
              },
              {
                icon: HelpCircle,
                title: 'Tough HR Questions',
                description: 'Prepare for challenging questions about weaknesses, failures, and career goals.',
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
    </div>
  )
}

export default CommunicationTraining
