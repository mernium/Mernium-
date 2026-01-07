import { useState } from 'react'
import { motion } from 'framer-motion'
import { AlertTriangle, CheckCircle2, Send } from 'lucide-react'
import { submitForm } from '../api/api.ts'
import { toast } from 'react-hot-toast'

const Apply = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    batch: '',
    background: '',
    motivation: '',
  })
  const [submitted, setSubmitted] = useState<boolean>(false)
  const [loading, setLoading] = useState<boolean>(false)

  const handleSubmit =async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    try {
      setLoading(true)
      const response = await submitForm(formData)
      if (response.success) {
        toast.success(response.message)
        setSubmitted(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          batch: '',
          background: '',
          motivation: '',
        })
      } else {
        toast.error(response.error)
      }
      setLoading(false)
    } catch (error) {
      toast.error(error.message as string)
    }finally{
      setLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="relative pt-20">
      {/* Hero Section */}
      <section className="min-h-[40vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-5xl md:text-6xl font-bold mb-6 text-gradient-emerald-gold"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Apply as a Mernian
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Start your transformation into a fearless, interview-ready developer
          </motion.p>
        </div>
      </section>

      {/* Warning Section */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-6 border-2 border-yellow-500/30 bg-yellow-500/5 flex items-start gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AlertTriangle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">Important Notice</h3>
              <p className="text-gray-300">
                <strong className="text-yellow-400">Not for shortcut seekers.</strong> This program requires 
                commitment, daily practice, and a genuine desire to become interview-ready. We focus on 
                readiness, not certificates. If you're looking for an easy path, this isn't for you.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Discipline Explanation */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-8 border border-emerald-500/20"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-2xl font-bold text-white mb-4">What We Expect</h2>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Daily attendance and active participation in live sessions</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Camera on during sessions for better engagement</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Daily coding practice and consistent effort</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Commitment to becoming interview-ready, not just completing a course</span>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-1" />
                <span>Openness to feedback and continuous improvement</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          {submitted ? (
            <motion.div
              className="glass rounded-2xl p-12 border-2 border-emerald-500/30 bg-gradient-to-br from-emerald-500/10 to-gold-500/10 text-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
            >
              <CheckCircle2 className="w-16 h-16 text-emerald-400 mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-white mb-4">Application Submitted!</h2>
              <p className="text-gray-300 text-lg">
                We've received your application. Our team will review it and get back to you soon.
              </p>
            </motion.div>
          ) : (
            <motion.form
              className="glass rounded-2xl p-8 md:p-12 border-2 border-emerald-500/30"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-white font-semibold mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    // required
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                    placeholder="+1234567890"
                  />
                </div>

                <div>
                  <label htmlFor="batch" className="block text-white font-semibold mb-2">
                    Preferred Batch *
                  </label>
                  <select
                    id="batch"
                    name="batch"
                    value={formData.batch}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all"
                  >
                    <option value="">Select a batch</option>
                    <option value="international">International</option>
                    <option value="school">School (7th+)</option>
                    <option value="kerala">Kerala / Normal</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="background" className="block text-white font-semibold mb-2">
                    Background / Experience
                  </label>
                  <textarea
                    id="background"
                    name="background"
                    value={formData.background}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                    placeholder="Tell us about your programming background, if any"
                  />
                </div>

                <div>
                  <label htmlFor="motivation" className="block text-white font-semibold mb-2">
                    Why do you want to join MERNIUM? *
                  </label>
                  <textarea
                    id="motivation"
                    name="motivation"
                    value={formData.motivation}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 bg-black/40 border border-emerald-500/30 rounded-lg text-white focus:outline-none focus:border-emerald-500 focus:ring-2 focus:ring-emerald-500/20 transition-all resize-none"
                    placeholder="Share your motivation and goals"
                  />
                </div>

                <motion.button
                  type="submit"
                  className="w-full px-8 py-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white rounded-full font-semibold text-lg glow-emerald-strong hover:from-emerald-400 hover:to-emerald-500 transition-all flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? 'Submitting...' : 'Submit Application'}
                </motion.button>
              </div>
            </motion.form>
          )}
        </div>
      </section>
    </div>
  )
}

export default Apply
