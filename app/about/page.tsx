'use client'

import { motion } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { Award, Users, Heart, Target } from 'lucide-react'

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

export default function About() {
  const values = [
    {
      icon: Heart,
      title: 'Compassion',
      description: 'We approach every client with genuine care and empathy, understanding the courage it takes to seek help.',
    },
    {
      icon: Users,
      title: 'Connection',
      description: 'Building meaningful therapeutic relationships is at the heart of effective counseling and healing.',
    },
    {
      icon: Target,
      title: 'Growth',
      description: 'We empower clients to achieve personal growth and develop sustainable strategies for lasting change.',
    },
    {
      icon: Award,
      title: 'Excellence',
      description: 'Our team maintains the highest standards of professional practice and continuous learning.',
    },
  ]

  const team = [
    {
      name: 'Dr. Sarah Mitchell',
      role: 'Clinical Director & Licensed Therapist',
      bio: 'Ph.D. in Clinical Psychology with 15+ years of experience in individual and couples therapy.',
    },
    {
      name: 'James Anderson',
      role: 'Senior Counselor',
      bio: 'M.S. in Counseling Psychology specializing in anxiety, depression, and life transitions.',
    },
    {
      name: 'Maya Patel',
      role: 'Licensed Professional Counselor',
      bio: 'Specialized in trauma-informed care and cultural competency in mental health services.',
    },
    {
      name: 'Michael Chen',
      role: 'Family Therapist',
      bio: 'Expert in family dynamics and relationship counseling with 10 years of clinical experience.',
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
            About Radianz
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-xl text-gray-600 text-balance leading-relaxed"
          >
            Empowering lives through compassionate, professional counseling and mental health support.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <h2 className="text-4xl font-bold text-foreground mb-6">Our Story</h2>
              <p className="text-gray-600 leading-relaxed mb-4">
                Radianz was founded on the belief that mental health care should be accessible, professional, and deeply compassionate. We recognized a gap in the market for authentic, online counseling that doesn&apos;t compromise on quality.
              </p>
              <p className="text-gray-600 leading-relaxed mb-4">
                Since our inception, we&apos;ve been committed to connecting individuals and couples with licensed therapists who genuinely care about their wellbeing and personal growth. Every session is designed to be a safe space for healing and transformation.
              </p>
              <p className="text-gray-600 leading-relaxed">
                Today, Radianz serves hundreds of clients seeking professional mental health support in a confidential, convenient online environment.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-8 border border-primary/20"
            >
              <div className="space-y-4">
                <div>
                  <div className="text-4xl font-bold text-primary">500+</div>
                  <p className="text-gray-600">Clients Supported</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">15+</div>
                  <p className="text-gray-600">Years Combined Experience</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">4</div>
                  <p className="text-gray-600">Licensed Therapists</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-primary">98%</div>
                  <p className="text-gray-600">Client Satisfaction Rate</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600">What guides us in everything we do</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => {
              const Icon = value.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="p-8 bg-gradient-to-br from-gray-50 to-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 to-accent/5">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experienced, compassionate professionals dedicated to your mental health journey.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="p-8 bg-white rounded-xl border border-gray-100 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
              >
                <div className="w-16 h-16 bg-gradient-to-br from-primary to-primary/70 rounded-full mb-4 flex items-center justify-center">
                  <div className="text-2xl font-bold text-white">{member.name[0]}</div>
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-primary font-semibold mb-3">{member.role}</p>
                <p className="text-gray-600 leading-relaxed">{member.bio}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-12 bg-gradient-to-br from-primary/10 to-accent/5 rounded-2xl border border-primary/20"
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Mission</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                To provide accessible, professional, and compassionate online counseling that empowers individuals and couples to achieve mental wellness, personal growth, and meaningful relationships.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="p-12 bg-gradient-to-br from-accent/10 to-primary/5 rounded-2xl border border-accent/20"
            >
              <h3 className="text-3xl font-bold text-foreground mb-4">Our Vision</h3>
              <p className="text-gray-700 leading-relaxed text-lg">
                A world where quality mental health support is just a click away, breaking down barriers to accessing care and creating a society where emotional wellbeing is prioritized.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
