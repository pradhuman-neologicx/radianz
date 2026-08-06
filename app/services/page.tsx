'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import Link from 'next/link'
import { Heart, Users, Brain, AlertCircle, Zap, BookOpen } from 'lucide-react'

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

export default function Services() {
  const services = [
    {
      icon: Heart,
      title: 'Individual Counseling',
      description: 'One-on-one therapy sessions addressing personal challenges, emotional wellbeing, and mental health concerns.',
      benefits: [
        'Personalized treatment plans',
        'Confidential and private sessions',
        'Flexible scheduling options',
        'Evidence-based therapeutic approaches',
      ],
      features: ['50-minute sessions', 'Weekly or bi-weekly', 'Secure video platform'],
    },
    {
      icon: Users,
      title: 'Couples Therapy',
      description: 'Professional guidance for couples seeking to strengthen their relationship and improve communication.',
      benefits: [
        'Improved communication skills',
        'Conflict resolution strategies',
        'Rekindled emotional connection',
        'Relationship maintenance tools',
      ],
      features: ['60-minute sessions', 'Safe space for dialogue', 'Practical exercises'],
    },
    {
      icon: Brain,
      title: 'Mental Wellness Programs',
      description: 'Comprehensive programs focusing on mental health, stress management, and emotional resilience.',
      benefits: [
        'Stress reduction techniques',
        'Mindfulness practices',
        'Coping strategies development',
        'Resilience building',
      ],
      features: ['Multi-session programs', 'Skill-building focus', 'Take-home resources'],
    },
    {
      icon: AlertCircle,
      title: 'Crisis Support',
      description: 'Immediate support during difficult times with compassionate care and practical guidance.',
      benefits: [
        'Immediate availability',
        'Compassionate support',
        'Safety planning',
        'Resource referrals',
      ],
      features: ['Emergency sessions', 'Fast scheduling', 'Professional guidance'],
    },
    {
      icon: Zap,
      title: 'Life Transitions Coaching',
      description: 'Navigate major life changes including career transitions, relationships, relocations, and life goals.',
      benefits: [
        'Clarity on life direction',
        'Confidence building',
        'Decision-making support',
        'Transition planning',
      ],
      features: ['Short-term coaching', 'Goal-oriented approach', 'Action planning'],
    },
    {
      icon: BookOpen,
      title: 'Psychoeducation & Workshops',
      description: 'Educational sessions on mental health topics, self-care, and personal development.',
      benefits: [
        'Mental health awareness',
        'Practical knowledge',
        'Self-care techniques',
        'Prevention strategies',
      ],
      features: ['Interactive sessions', 'Take-home materials', 'Q&A included'],
    },
  ]

  const process = [
    {
      step: '01',
      title: 'Initial Consultation',
      description: 'Free 15-minute call to understand your needs and see if we&apos;re a good fit.',
    },
    {
      step: '02',
      title: 'Assessment',
      description: 'Comprehensive evaluation to develop a personalized counseling plan.',
    },
    {
      step: '03',
      title: 'Treatment',
      description: 'Regular sessions with your assigned therapist using evidence-based methods.',
    },
    {
      step: '04',
      title: 'Progress Monitoring',
      description: 'Continuous assessment and adjustment of your treatment plan as needed.',
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/10 to-accent/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl font-bold text-foreground mb-6 text-balance"
          >
            Our Services
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 text-balance leading-relaxed"
          >
            Comprehensive mental health services designed for your wellbeing and growth.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-2xl border border-gray-100 p-8 hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 overflow-hidden"
                >
                  {/* Gradient background on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <div className="relative z-10">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-xl flex items-center justify-center mb-6 group-hover:shadow-lg group-hover:shadow-primary/30">
                      <Icon className="w-8 h-8 text-white" />
                    </div>

                    <h3 className="text-2xl font-bold text-foreground mb-3">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed mb-6">{service.description}</p>

                    {/* Benefits */}
                    <div className="mb-6">
                      <h4 className="font-semibold text-foreground mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {service.benefits.map((benefit, i) => (
                          <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                            <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0 mt-1.5" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Features */}
                    <div className="mb-6 pb-6 border-b border-gray-100">
                      <div className="flex flex-wrap gap-2">
                        {service.features.map((feature, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <button className="w-full py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                      Learn More
                    </button>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">How It Works</h2>
            <p className="text-xl text-gray-600">Four simple steps to start your healing journey</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-4 gap-8"
          >
            {process.map((item, index) => (
              <motion.div key={index} variants={itemVariants} className="relative">
                {/* Connector line */}
                {index < process.length - 1 && (
                  <div className="absolute top-24 left-[calc(50%+3rem)] w-[calc(100%-6rem)] h-0.5 bg-gradient-to-r from-primary to-transparent hidden md:block" />
                )}

                <div className="text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary/70 rounded-full flex items-center justify-center mx-auto mb-6 text-white text-3xl font-bold shadow-lg shadow-primary/30">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Transparent Pricing</h2>
            <p className="text-xl text-gray-600">Affordable options for your mental health needs</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { name: 'Single Session', price: '$79', sessions: '1 session', desc: 'Try our services' },
              { name: 'Monthly Package', price: '$299', sessions: '4 sessions', desc: 'Most popular', highlight: true },
              { name: 'Quarterly Package', price: '$849', sessions: '12 sessions', desc: 'Best value' },
            ].map((plan, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className={`p-8 rounded-2xl border-2 transition-all duration-300 ${
                  plan.highlight
                    ? 'border-primary bg-white shadow-xl shadow-primary/20'
                    : 'border-gray-100 bg-white hover:border-primary/30'
                }`}
              >
                {plan.highlight && (
                  <div className="mb-4">
                    <span className="px-4 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold">
                      {plan.desc}
                    </span>
                  </div>
                )}
                <h3 className="text-2xl font-bold text-foreground mb-2">{plan.name}</h3>
                <div className="mb-4">
                  <span className="text-4xl font-bold text-primary">{plan.price}</span>
                  <p className="text-gray-600 text-sm mt-2">{plan.sessions}</p>
                </div>
                <button
                  className={`w-full py-3 rounded-lg font-semibold transition-all ${
                    plan.highlight
                      ? 'bg-primary text-white hover:bg-primary/90'
                      : 'border-2 border-primary text-primary hover:bg-primary/5'
                  }`}
                >
                  Get Started
                </button>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true, margin: '-100px' }}
            className="mt-12 p-8 bg-white rounded-xl border border-gray-100 text-center"
          >
            <p className="text-gray-600 mb-4">
              All sessions include unlimited email support and access to wellness resources. Free initial consultation available.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-colors"
            >
              Schedule Your Free Consultation
            </Link>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
