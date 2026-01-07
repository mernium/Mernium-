import { motion } from 'framer-motion'
import { MessageCircle, Mail, Phone, Instagram, ArrowRight } from 'lucide-react'

const Contact = () => {
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
            Contact Us
          </motion.h1>
          <motion.p
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Get in touch with us. We're here to help you on your journey.
          </motion.p>
        </div>
      </section>

      {/* Contact Methods */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MessageCircle,
                title: 'WhatsApp',
                description: 'Chat with us directly',
                link: 'https://wa.me/your-number',
                color: 'emerald',
                action: 'Open WhatsApp',
              },
              {
                icon: Mail,
                title: 'Email',
                description: 'Send us an email',
                link: 'mailto:mernium.learn@gmail.com',
                color: 'emerald',
                action: 'Send Email',
              },
              {
                icon: Phone,
                title: 'Phone',
                description: 'Call us',
                link: 'tel:+1234567890',
                color: 'emerald',
                action: 'Call Now',
              },
              {
                icon: Instagram,
                title: 'Instagram',
                description: 'Follow our updates',
                link: 'https://instagram.com/mern_ium',
                color: 'gold',
                action: 'Follow Us',
              },
            ].map((contact, index) => {
              const Icon = contact.icon
              const iconBgClass = contact.color === 'emerald'
                ? 'bg-gradient-to-br from-emerald-500/20 to-emerald-600/20'
                : 'bg-gradient-to-br from-gold-500/20 to-gold-600/20'
              const iconColorClass = contact.color === 'emerald' ? 'text-emerald-400' : 'text-gold-400'
              return (
                <motion.a
                  key={contact.title}
                  href={contact.link}
                  target={contact.link.startsWith('http') ? '_blank' : undefined}
                  rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="glass rounded-2xl p-8 border-2 border-emerald-500/20 hover:border-emerald-500/40 transition-all group block"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ y: -10, scale: 1.02 }}
                >
                  <div className={`w-16 h-16 rounded-full ${iconBgClass} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <Icon className={`w-8 h-8 ${iconColorClass}`} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white mb-2">{contact.title}</h3>
                  <p className="text-gray-400 mb-4">{contact.description}</p>
                  <div className="flex items-center gap-2 text-emerald-400 group-hover:gap-3 transition-all">
                    <span className="font-semibold">{contact.action}</span>
                    <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                </motion.a>
              )
            })}
          </div>
        </div>
      </section>

      {/* Additional Info */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black/40">
        <div className="max-w-4xl mx-auto">
          <motion.div
            className="glass rounded-2xl p-12 border border-emerald-500/20 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Have Questions?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              We're here to help. Reach out to us through any of the channels above, 
              and we'll get back to you as soon as possible.
            </p>
            <p className="text-emerald-400 font-semibold text-lg">
              Prefer WhatsApp? Click the WhatsApp button for instant chat!
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Contact
