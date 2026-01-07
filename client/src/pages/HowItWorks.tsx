import { motion } from 'framer-motion'
import { Video, Code, MessageSquare, CheckCircle2, Layers, ArrowUp } from 'lucide-react'

const HowItWorks = () => {
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
            How The Course Works
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Online, interactive, level-based progression
          </motion.p>
        </div>
      </section>

      {/* Model Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Online Live Class Model
              </h2>
              <p className="text-xl text-gray-300 mb-6">
                Interactive sessions where your camera is on, your voice is heard, and your code is shared.
              </p>
              <div className="space-y-4">
                {[
                  'Real-time interaction',
                  'Camera & participation required',
                  'Live coding sessions',
                  'Immediate feedback',
                ].map((feature, index) => (
                  <motion.div
                    key={feature}
                    className="flex items-center gap-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                  >
                    <CheckCircle2 className="w-6 h-6 text-emerald-400 flex-shrink-0" />
                    <span className="text-gray-300 text-lg">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              className="glass rounded-2xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-gold-500/5"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Video className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h3 className="text-2xl font-semibold text-white text-center mb-4">
                Live Sessions
              </h3>
              <p className="text-gray-300 text-center">
                Every session is live, interactive, and focused on your growth.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Daily Routine Section */}
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
              Daily Routine
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              A structured approach to building real confidence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: 'Coding',
                description: 'Daily coding practice with real projects and challenges',
              },
              {
                icon: MessageSquare,
                title: 'Interview Questions',
                description: 'Technical questions answered and explained every day',
              },
              {
                icon: Video,
                title: 'Explanation Practice',
                description: 'Learn to explain concepts clearly and confidently',
              },
              {
                icon: CheckCircle2,
                title: 'Evaluation',
                description: 'Regular assessments to track your progress',
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
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <Icon className="w-8 h-8 text-emerald-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                  <p className="text-gray-400">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Level-Based Progression Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              Level-Based Progression
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Levels &gt; Duration. You progress when you&apos;re ready, not when time passes.
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  level: 'Level 1',
                  title: 'Foundation',
                  description: 'Master the basics. Clear fundamentals. Clear explanations.',
                  requirement: 'Pass assessments to proceed',
                },
                {
                  level: 'Level 2',
                  title: 'Intermediate',
                  description: 'Build projects. Handle complexity. Explain confidently.',
                  requirement: 'Demonstrate readiness through projects',
                },
                {
                  level: 'Level 3',
                  title: 'Advanced',
                  description: 'Real-world scenarios. Interview-level challenges.',
                  requirement: 'Ace mock interviews',
                },
                {
                  level: 'MERNMADE',
                  title: 'Ready',
                  description: 'Interview-ready. Confident. Job-ready.',
                  requirement: 'Earn your badge',
                },
              ].map((level, index) => (
                <motion.div
                  key={level.level}
                  className="glass rounded-2xl p-8 border-2 border-emerald-500/20 relative"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, borderColor: 'rgba(16, 185, 129, 0.4)' }}
                >
                  {index < 3 && (
                    <ArrowUp className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-8 h-8 text-emerald-400" />
                  )}
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <div className="text-emerald-400 font-semibold mb-2">{level.level}</div>
                      <h3 className="text-2xl font-bold text-white mb-2">{level.title}</h3>
                    </div>
                    {index === 3 && (
                      <Layers className="w-8 h-8 text-gold-400" />
                    )}
                  </div>
                  <p className="text-gray-300 text-lg mb-4">{level.description}</p>
                  <div className="flex items-center gap-2 text-emerald-400">
                    <CheckCircle2 size={16} />
                    <span className="text-sm">{level.requirement}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            className="mt-16 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="glass rounded-2xl p-8 border border-emerald-500/30 inline-block">
              <p className="text-2xl font-semibold text-white mb-2">
                Next level only after passing
              </p>
              <p className="text-xl text-gray-300">
                No gaps. No rushing. Real confidence.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default HowItWorks
