'use client'

import { useState } from 'react'
import { motion, Variants } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import Link from 'next/link'
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle2,
  MessageSquare,
  ArrowRight,
  Calendar,
  Shield,
} from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const contactCards = [
  {
    icon: Phone,
    title: 'Call Us',
    value: '+91 98765 43210',
    description: 'Mon – Sat, 10 AM – 7 PM',
    href: 'tel:+919876543210',
    color: 'from-blue-500/10 to-blue-600/5',
    iconBg: 'bg-blue-500/10',
    iconColor: 'text-blue-600',
  },
  {
    icon: Mail,
    title: 'Email Us',
    value: 'contact@radianz.in',
    description: 'We respond within 24 hours',
    href: 'mailto:contact@radianz.in',
    color: 'from-primary/10 to-primary/5',
    iconBg: 'bg-primary/10',
    iconColor: 'text-primary',
  },
  {
    icon: MapPin,
    title: 'Visit Us',
    value: 'Jaipur, Rajasthan',
    description: 'India',
    href: '#',
    color: 'from-emerald-500/10 to-emerald-600/5',
    iconBg: 'bg-emerald-500/10',
    iconColor: 'text-emerald-600',
  },
  {
    icon: Clock,
    title: 'Working Hours',
    value: 'Mon – Sat: 10 AM – 7 PM',
    description: 'Sunday: Closed',
    href: '#',
    color: 'from-amber-500/10 to-amber-600/5',
    iconBg: 'bg-amber-500/10',
    iconColor: 'text-amber-600',
  },
]

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
    setTimeout(() => setSubmitted(false), 6000)
  }

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        badge="Contact Us"
        title="Get In"
        titleAccent="Touch"
        description="Have a question or need guidance? We're here to listen. Reach out and we'll get back to you as soon as possible."
      />

      {/* Contact Cards */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactCards.map((card) => {
              const Icon = card.icon
              return (
                <motion.a
                  key={card.title}
                  href={card.href}
                  variants={itemVariants}
                  className={`group relative p-7 bg-gradient-to-br ${card.color} rounded-3xl border border-border/30 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1`}
                >
                  <div className={`w-14 h-14 ${card.iconBg} rounded-2xl flex items-center justify-center mb-5`}>
                    <Icon className={`w-6 h-6 ${card.iconColor}`} strokeWidth={1.5} />
                  </div>
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-2">{card.title}</h3>
                  <p className="text-lg font-bold text-foreground mb-1">{card.value}</p>
                  <p className="text-sm text-muted-foreground">{card.description}</p>
                </motion.a>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Form + Sidebar */}
      <section className="py-20 bg-primary/[0.03] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Form — 3 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-3"
            >
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-foreground">Send Us a Message</h2>
                  <p className="text-sm text-muted-foreground">Fill out the form and we&apos;ll get back to you shortly.</p>
                </div>
              </div>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="p-10 bg-white border-2 border-emerald-200 rounded-3xl text-center"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-10 h-10 text-emerald-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Message Sent!</h3>
                  <p className="text-muted-foreground">
                    Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="bg-white rounded-3xl border border-border/40 p-8 sm:p-10 space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Full Name <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email <span className="text-red-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                        placeholder="+91 98765 43210"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                        Subject <span className="text-red-400">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="services">About Services</option>
                        <option value="pricing">Pricing & Plans</option>
                        <option value="feedback">Feedback</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message <span className="text-red-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-background"
                      placeholder="Tell us how we can help..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 bg-primary text-white rounded-xl font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group"
                  >
                    <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    Send Message
                  </button>
                </form>
              )}
            </motion.div>

            {/* Sidebar — 2 cols */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-2 space-y-6"
            >
              {/* Book Appointment CTA */}
              <div className="bg-foreground rounded-3xl p-8 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
                <div className="relative z-10">
                  <Calendar className="w-8 h-8 text-primary mb-4" />
                  <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
                  <p className="text-white/60 text-sm mb-6 leading-relaxed">
                    Skip the form and book your appointment directly. Choose your preferred date, time, and service.
                  </p>
                  <Link
                    href="/book"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group text-sm"
                  >
                    Book an Appointment
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Confidentiality */}
              <div className="bg-white rounded-3xl border border-border/40 p-8">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">Confidentiality</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Your privacy is our top priority. All communications are 100% confidential. We never share your personal information with anyone.
                </p>
              </div>

              {/* FAQ Quick */}
              <div className="bg-white rounded-3xl border border-border/40 p-8">
                <h3 className="text-lg font-bold text-foreground mb-5">Common Questions</h3>
                <div className="space-y-4">
                  {[
                    { q: 'How long is a session?', a: 'Each session is 45–60 minutes.' },
                    { q: 'Is it online or in-person?', a: 'We offer both online (video call) and in-person sessions.' },
                    { q: 'Is the first session free?', a: 'Yes, the initial consultation is completely free.' },
                    { q: 'How soon can I get an appointment?', a: 'Typically within 1–3 working days.' },
                  ].map((faq, i) => (
                    <div key={i} className="pb-4 border-b border-border/30 last:border-0 last:pb-0">
                      <p className="text-sm font-semibold text-foreground mb-1">{faq.q}</p>
                      <p className="text-xs text-muted-foreground">{faq.a}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div className="bg-white rounded-3xl border border-border/40 p-8">
                <h3 className="text-lg font-bold text-foreground mb-4">Follow Us</h3>
                <div className="flex gap-3">
                  {[
                    {
                      label: 'Instagram',
                      href: '#',
                      svg: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
                      ),
                    },
                    {
                      label: 'Facebook',
                      href: '#',
                      svg: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
                      ),
                    },
                    {
                      label: 'LinkedIn',
                      href: '#',
                      svg: (
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" /></svg>
                      ),
                    },
                  ].map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-12 h-12 rounded-xl bg-primary/5 hover:bg-primary hover:text-white border border-primary/10 flex items-center justify-center text-muted-foreground transition-all duration-300"
                    >
                      {social.svg}
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
