import { motion } from 'framer-motion'
import { Award, Clock, Target, CheckCircle2, XCircle, ArrowRight, Shield } from 'lucide-react'
import { Link } from 'react-router-dom'

const Mernmade = () => {
  return (
    <div className="relative pt-20 overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-gold-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            MERNMADE
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Not a Course. Not a Certificate.
            <span className="block text-gradient-emerald-gold mt-2">A Readiness Badge.</span>
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            MERNMADE is earned through readiness, not time.
          </motion.p>
        </div>
      </section>

      {/* What is MERNMADE Section */}
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
              What is MERNMADE?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: XCircle,
                title: 'Not a Course',
                description: 'MERNMADE is not about completing a curriculum. It\'s about being ready.',
                color: 'red',
              },
              {
                icon: XCircle,
                title: 'Not a Certificate',
                description: 'No piece of paper. No time-based completion. Only real readiness.',
                color: 'red',
              },
              {
                icon: Award,
                title: 'A Readiness Badge',
                description: 'A status earned when you become interview-ready and confident.',
                color: 'emerald',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className={`glass rounded-2xl p-8 border-2 ${
                    item.color === 'emerald' 
                      ? 'border-emerald-500/40 bg-emerald-500/5' 
                      : 'border-red-500/20 bg-red-500/5'
                  }`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Icon className={`w-12 h-12 ${
                    item.color === 'emerald' ? 'text-emerald-400' : 'text-red-400'
                  } mb-4`} />
                  <h3 className="text-2xl font-semibold text-white mb-4">{item.title}</h3>
                  <p className="text-gray-300 text-lg">{item.description}</p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* How to Become MERNMADE Section */}
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
              How One Becomes MERNMADE
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              It's not about time. It's about readiness.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {[
              {
                icon: Target,
                title: 'Interview-Ready',
                description: 'You can handle technical interviews confidently. You know the answers and how to explain them.',
              },
              {
                icon: CheckCircle2,
                title: 'Clear Explanation',
                description: 'You can explain complex concepts clearly. Communication is as important as knowledge.',
              },
              {
                icon: Shield,
                title: 'Pressure Handling',
                description: 'You perform under pressure. Mock interviews and real scenarios don\'t shake you.',
              },
              {
                icon: Award,
                title: 'Developer Mindset',
                description: 'You think like a developer. You solve problems, not just memorize solutions.',
              },
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  className="glass rounded-2xl p-8 border border-emerald-500/20"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
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

      {/* Until MERNMADE Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-black"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
              Until MERNMADE
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                'Course continues',
                'No shortcuts',
                'No forced completion',
              ].map((point, index) => (
                <motion.div
                  key={point}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                >
                  <CheckCircle2 className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                  <p className="text-xl text-gray-300">{point}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12 md:p-16 border-2 border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-emerald-500/10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Clock className="w-16 h-16 text-gold-400 mx-auto mb-6" />
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Time doesn't decide completion.
            </motion.p>
            <motion.p
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gradient-emerald-gold mt-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              Readiness does.
            </motion.p>
          </motion.div>

          <motion.div
            className="mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Link to="/apply">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald-strong hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Mernmade
