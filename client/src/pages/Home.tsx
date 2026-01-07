import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, CheckCircle2, Clock, Users, Target } from 'lucide-react'

const Home = () => {
  return (
    <div className="relative overflow-x-hidden">
      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20">
        <div className="max-w-7xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="block text-white mb-2">We don't teach MERN.</span>
            <span className="block text-gradient-emerald-gold">
              We make you interview-ready.
            </span>
          </motion.h1>
          
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            An interview-first, confidence-driven MERN Stack institution creating fearless developers.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link to="/apply">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald-strong hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply as a Mernian
                <ArrowRight size={20} />
              </motion.button>
            </Link>
            <Link to="/mernmade">
              <motion.button
                className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Understand MERNMADE
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* What is Mernium Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gradient-emerald-gold mb-6">
              What is Mernium?
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Online Tech Institution
                </h3>
                <p className="text-gray-300 text-lg">
                  A developer-making system focused on interview readiness, not syllabus completion.
                </p>
              </div>
              
              <div className="glass rounded-2xl p-8 border border-emerald-500/20">
                <h3 className="text-2xl font-semibold text-white mb-4">
                  Not Certificate-Oriented
                </h3>
                <p className="text-gray-300 text-lg">
                  We don't measure success by course completion. We measure it by your confidence in interviews.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass rounded-2xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-gold-500/5 text-center">
                <Target className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
                <p className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
                  The goal is not course completion.
                </p>
                <p className="text-3xl md:text-4xl font-bold text-gradient-emerald-gold">
                  The goal is interview readiness.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Are Mernians Section */}
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
              Who Are Mernians?
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Developers who think clearly, code daily, explain confidently, and face interviews without fear.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: CheckCircle2,
                title: 'Think Clearly',
                description: 'Logical problem-solving mindset',
                color: 'emerald',
              },
              {
                icon: Clock,
                title: 'Code Daily',
                description: 'Consistent practice and growth',
                color: 'gold',
              },
              {
                icon: Users,
                title: 'Explain Confidently',
                description: 'Clear communication skills',
                color: 'emerald',
              },
              {
                icon: Target,
                title: 'Face Interviews',
                description: 'Zero fear, maximum readiness',
                color: 'gold',
              },
            ].map((item, index) => {
              const Icon = item.icon
              const iconBgClass = item.color === 'emerald'
                ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20'
                : 'bg-gradient-to-br from-gold-500/20 to-gold-600/20'
              const iconColorClass = item.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
              return (
                <motion.div
                  key={item.title}
                  className="glass rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all group"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400">
                    {item.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MERNMADE Teaser Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-block px-4 py-2 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold mb-6">
                MERNMADE
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Not a Certificate. A{' '}
                <span className="text-gradient-emerald-gold">Readiness Badge</span>.
              </h2>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                MERNMADE is a status given only when you become interview-ready. 
                No time-based completion. No shortcuts. Only when you're ready.
              </p>
              <Link to="/mernmade">
                <motion.button
                  className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-gold-500 text-white rounded-full font-semibold text-lg glow-emerald hover:scale-105 transition-all flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Learn how MERNMADE works
                  <ArrowRight size={20} />
                </motion.button>
              </Link>
            </motion.div>

            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="glass rounded-2xl p-12 border-2 border-gold-500/30 bg-gradient-to-br from-gold-500/10 to-emerald-500/10">
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-gold-500 flex items-center justify-center text-4xl font-bold text-black">
                    M
                  </div>
                  <p className="text-2xl font-semibold text-white mb-2">
                    MERNMADE Status
                  </p>
                  <p className="text-gray-400">
                    Earned through readiness, not time
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why No Certificates Section */}
      <section className="py-32 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12 md:p-16 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/5 to-black"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.blockquote
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              &quot;If you are confident and interview-ready, you don&apos;t need a certificate.&quot;
            </motion.blockquote>
          </motion.div>
        </div>
      </section>

      {/* Next Batch Info Section */}
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
              Next Batch
            </h2>
            <p className="text-xl text-gray-300">
              Join the next cohort of fearless developers
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {[
              {
                title: 'International',
                description: 'For students worldwide',
                features: ['Global timezone support', 'International curriculum', 'Flexible scheduling'],
              },
              {
                title: 'School (7th+)',
                description: 'For young learners',
                features: ['Age-appropriate pacing', 'School-friendly schedule', 'Early start advantage'],
              },
              {
                title: 'Kerala / Normal',
                description: 'For local students',
                features: ['Regional timings', 'Local support', 'Community focused'],
              },
            ].map((batch, index) => (
              <motion.div
                key={batch.title}
                className="glass rounded-2xl p-8 border border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{batch.title}</h3>
                <p className="text-emerald-400 mb-6">{batch.description}</p>
                <ul className="space-y-2">
                  {batch.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-gray-300">
                      <CheckCircle2 size={16} className="text-emerald-400" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Link to="/batches">
              <motion.button
                className="px-8 py-4 border-2 border-emerald-500 text-emerald-400 rounded-full font-semibold text-lg hover:bg-emerald-500/10 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Eligibility
              </motion.button>
            </Link>
            <Link to="/apply">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Apply Now
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home
