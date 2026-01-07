import { motion } from 'framer-motion'
import { Globe, GraduationCap, MapPin, CheckCircle2, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'

const Batches = () => {
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
            Batches
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Choose the batch that fits your journey
          </motion.p>
        </div>
      </section>

      {/* Batches Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Globe,
                title: 'International',
                description: 'For students worldwide',
                color: 'emerald',
                eligibility: [
                  'Students from any country',
                  'Fluent in English',
                  'Commitment to daily practice',
                  'Stable internet connection',
                ],
                trainingStyle: [
                  'Global timezone support',
                  'International curriculum',
                  'Flexible scheduling',
                  'Diverse community',
                ],
                expectations: [
                  'Daily attendance required',
                  'Camera on during sessions',
                  'Active participation',
                  'Interview-focused approach',
                ],
              },
              {
                icon: GraduationCap,
                title: 'School (7th+)',
                description: 'For young learners',
                color: 'gold',
                eligibility: [
                  'Students from 7th grade onwards',
                  'Basic computer knowledge',
                  'Parental support',
                  'Time management skills',
                ],
                trainingStyle: [
                  'Age-appropriate pacing',
                  'School-friendly schedule',
                  'Early start advantage',
                  'Foundation building',
                ],
                expectations: [
                  'Balance school and training',
                  'Regular practice',
                  'Parent involvement',
                  'Long-term commitment',
                ],
              },
              {
                icon: MapPin,
                title: 'Kerala / Normal',
                description: 'For local students',
                color: 'emerald',
                eligibility: [
                  'Students from Kerala or India',
                  'Basic programming interest',
                  'Commitment to learning',
                  'Availability for live sessions',
                ],
                trainingStyle: [
                  'Regional timings',
                  'Local support',
                  'Community focused',
                  'Cultural context',
                ],
                expectations: [
                  'Consistent attendance',
                  'Daily coding practice',
                  'Interview preparation',
                  'MERNMADE readiness',
                ],
              },
            ].map((batch, index) => {
              const Icon = batch.icon
              const iconBgClass = batch.color === 'emerald' 
                ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20' 
                : 'bg-gradient-to-br from-gold-500/20 to-gold-600/20'
              const iconColorClass = batch.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
              const buttonBgClass = batch.color === 'emerald'
                ? 'bg-gradient-to-r from-emerald-500 to-emerald-600'
                : 'bg-gradient-to-r from-gold-500 to-gold-600'
              return (
                <motion.div
                  key={batch.title}
                  className="glass rounded-2xl p-8 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all"
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-6`}>
                    <Icon className={`w-8 h-8 ${iconColorClass}`} />
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-2">{batch.title}</h2>
                  <p className="text-emerald-400 mb-8">{batch.description}</p>

                  {/* Eligibility */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Eligibility</h3>
                    <ul className="space-y-2">
                      {batch.eligibility.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Training Style */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Training Style</h3>
                    <ul className="space-y-2">
                      {batch.trainingStyle.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Expectations */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-white mb-4">Expectations</h3>
                    <ul className="space-y-2">
                      {batch.expectations.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-gray-300">
                          <CheckCircle2 size={16} className="text-emerald-400 flex-shrink-0 mt-1" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <Link to="/apply">
                    <motion.button
                      className={`w-full px-6 py-3 ${buttonBgClass} text-white rounded-full font-semibold hover:scale-105 transition-all flex items-center justify-center gap-2`}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      Apply Now
                      <ArrowRight size={18} />
                    </motion.button>
                  </Link>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-emerald-500/30"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Choose your batch and begin your transformation into a fearless, interview-ready developer.
            </p>
            <Link to="/apply">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald-strong hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center gap-2 mx-auto"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Check Eligibility & Apply
                <ArrowRight size={20} />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Batches
