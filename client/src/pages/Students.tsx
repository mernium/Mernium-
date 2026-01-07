import { motion } from 'framer-motion'
import { Award, Star, Users } from 'lucide-react'

const Students = () => {
  // Placeholder data - replace with real data
  const mernmadeStudents = [
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
    { name: 'Student Name', batch: 'Batch Name', status: 'MERNMADE' },
  ]

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="min-h-[60vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            className="inline-block px-6 py-3 bg-gradient-to-r from-emerald-500/20 to-gold-500/20 border border-emerald-500/30 rounded-full text-emerald-400 font-semibold mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            MERNMADE Students
          </motion.div>
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Interview-Ready Developers
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Students who have earned their MERNMADE badge through readiness and confidence
          </motion.p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Award,
                number: '50+',
                label: 'MERNMADE Students',
                color: 'emerald',
              },
              {
                icon: Users,
                number: '100+',
                label: 'Active Learners',
                color: 'gold',
              },
              {
                icon: Star,
                number: '95%',
                label: 'Interview Success Rate',
                color: 'emerald',
              },
            ].map((stat, index) => {
              const Icon = stat.icon
              const iconColorClass = stat.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
              const numberColorClass = stat.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
              return (
                <motion.div
                  key={stat.label}
                  className="glass rounded-2xl p-8 border border-emerald-500/20 text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <Icon className={`w-12 h-12 ${iconColorClass} mx-auto mb-4`} />
                  <div className={`text-5xl font-bold ${numberColorClass} mb-2`}>
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg">{stat.label}</div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* MERNMADE Students List */}
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
              MERNMADE Students
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Interview-ready developers who have earned their badge
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mernmadeStudents.map((student, index) => (
              <motion.div
                key={index}
                className="glass rounded-2xl p-6 border border-emerald-500/20"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-gold-500 flex items-center justify-center text-white font-bold">
                    {student.name.charAt(0)}
                  </div>
                  <div className="px-3 py-1 bg-emerald-500/20 border border-emerald-500/30 rounded-full text-emerald-400 text-sm font-semibold">
                    {student.status}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{student.name}</h3>
                <p className="text-gray-400">{student.batch}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Placeholder */}
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
              Testimonials
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Real experiences from MERNMADE students
            </p>
          </motion.div>

          <motion.div
            className="glass rounded-2xl p-12 border-2 border-emerald-500/30 text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Star className="w-12 h-12 text-gold-400 mx-auto mb-6" />
            <p className="text-xl text-gray-300 mb-6">
              Testimonials will be added as students share their experiences. 
              We focus on real stories, not fake claims.
            </p>
            <p className="text-emerald-400 font-semibold">
              NO fake placement claims. Only real readiness.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Students
