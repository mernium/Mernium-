import { motion } from 'framer-motion'
import { UserCheck, MessageCircle, Brain, Target, Code } from 'lucide-react'

const InterviewTraining = () => {
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
            Interview-First Training
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            They don't just know answers. They know how to say them.
          </motion.p>
        </div>
      </section>

      {/* Key Message Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="glass rounded-3xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10 text-center"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Brain className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
            <p className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
              They don't just know answers.
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gradient-emerald-gold">
              They know how to say them.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Training Types Section */}
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
              Comprehensive Interview Training
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Code,
                title: 'Technical Interviews',
                description: 'Master data structures, algorithms, system design, and MERN stack specifics. Learn to code on the spot and explain your thinking process.',
                features: [
                  'Live coding challenges',
                  'Problem-solving strategies',
                  'Time complexity analysis',
                  'Code optimization',
                ],
              },
              {
                icon: UserCheck,
                title: 'HR Interviews',
                description: 'Prepare for behavioral questions, salary negotiations, and cultural fit assessments. Learn to present yourself confidently.',
                features: [
                  'Behavioral questions',
                  'Salary discussions',
                  'Self-introduction',
                  'Cultural fit',
                ],
              },
              {
                icon: MessageCircle,
                title: 'Mock Interviews',
                description: 'Regular mock interviews with real scenarios. Practice under pressure and receive detailed feedback.',
                features: [
                  'Real interview scenarios',
                  'Pressure simulation',
                  'Detailed feedback',
                  'Improvement tracking',
                ],
              },
              {
                icon: Target,
                title: 'Pressure Handling',
                description: 'Build mental resilience. Learn to stay calm, think clearly, and perform your best under interview pressure.',
                features: [
                  'Stress management',
                  'Mental preparation',
                  'Confidence building',
                  'Performance optimization',
                ],
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
                  <p className="text-gray-300 text-lg mb-6">{item.description}</p>
                  <ul className="space-y-2">
                    {item.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-gray-400">
                        <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Answer Structuring Section */}
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
              Answer Structuring
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Learn to structure your answers clearly and confidently
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Understand the Question',
                  description: 'Take a moment to understand what\'s being asked. Ask clarifying questions if needed.',
                },
                {
                  step: '02',
                  title: 'Structure Your Approach',
                  description: 'Outline your approach before diving in. Show your thinking process.',
                },
                {
                  step: '03',
                  title: 'Explain While Solving',
                  description: 'Verbally explain your thought process. Interviewers want to see how you think.',
                },
                {
                  step: '04',
                  title: 'Test and Optimize',
                  description: 'Test your solution with examples. Discuss edge cases and potential optimizations.',
                },
              ].map((step, index) => (
                <motion.div
                  key={step.step}
                  className="glass rounded-2xl p-8 border border-emerald-500/20 flex items-start gap-6"
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <div className="text-4xl font-bold text-gradient-emerald-gold flex-shrink-0">
                    {step.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default InterviewTraining
