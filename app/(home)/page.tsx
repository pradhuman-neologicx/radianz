'use client'

import { motion, Variants } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { CtaBanner } from '@/components/cta-banner'
import { ContactSection } from '@/components/contact-section'
import Link from 'next/link'
import Image from 'next/image'
import { Heart, Users, Brain, Shield, Calendar, ArrowRight, CheckCircle2, Target, Eye, ChevronLeft, ChevronRight, Plus, Minus } from 'lucide-react'
import { useRef, useState } from 'react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.3,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: 'easeOut' },
  },
}

function FAQItem({ question, answer, isOpen, onClick }: { question: string; answer: string; isOpen: boolean; onClick: () => void }) {
  return (
    <div
      className={`rounded-2xl border transition-all duration-300 overflow-hidden ${isOpen ? 'border-primary/30 bg-primary/5 shadow-sm' : 'border-border/50 bg-white hover:border-primary/20'
        }`}
    >
      <button
        onClick={onClick}
        className="w-full flex items-center justify-between p-6 text-left gap-4"
      >
        <span className="text-base sm:text-lg font-semibold text-foreground">{question}</span>
        <span className={`shrink-0 w-9 h-9 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
          }`}>
          {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
        </span>
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="overflow-hidden"
      >
        <div className="px-6 pb-6 text-sm sm:text-base text-muted-foreground leading-relaxed">
          {answer}
        </div>
      </motion.div>
    </div>
  )
}

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number>(0)

  const faqs = [
    {
      question: "What is counselling and how can it help me?",
      answer: "Counselling is a professional process where a trained psychologist helps you explore your thoughts, emotions, and challenges in a safe, confidential space. It can help you gain clarity, build emotional resilience, and make better life and career decisions."
    },
    {
      question: "Is therapy only for serious mental health conditions?",
      answer: "Not at all. Therapy is for anyone who wants to better understand themselves, navigate life transitions, manage stress, improve relationships, or gain clarity in their career. You don't need to be in crisis to benefit from counselling."
    },
    {
      question: "How do I know if therapy is right for me?",
      answer: "If you're feeling stuck, overwhelmed, confused about life decisions, or simply want a safe space to talk — therapy can help. Our initial consultation helps determine if our approach is the right fit for your needs."
    },
    {
      question: "Is everything discussed in therapy confidential?",
      answer: "Absolutely. Confidentiality is the cornerstone of our practice. Everything discussed during sessions remains strictly private, unless there is a risk of harm to yourself or others, as required by ethical guidelines."
    },
    {
      question: "What should I expect during my first session?",
      answer: "Your first session is a relaxed, introductory conversation. We'll discuss what brought you to counselling, understand your background, and set goals together. There's no pressure — it's all about creating a comfortable starting point."
    }
  ]

  return (
    <div className="space-y-5">
      {faqs.map((faq, index) => (
        <FAQItem
          key={index}
          question={faq.question}
          answer={faq.answer}
          isOpen={openIndex === index}
          onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
        />
      ))}
    </div>
  )
}

export default function Home() {
  const sliderRef = useRef<HTMLDivElement>(null)

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' })
    }
  }

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' })
    }
  }

  const services = [
    {
      icon: Heart,
      title: 'Career & Academic Counseling',
      description: 'For students and young professionals facing career decisions and academic stress.',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: Users,
      title: 'Personal & Relationship',
      description: 'For individuals dealing with personal, emotional, or relationship concerns.',
      image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: Brain,
      title: 'Professional Growth',
      description: 'For professionals seeking clarity, growth, and work-life balance.',
      image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=600'
    },
    {
      icon: Shield,
      title: 'Life Transitions',
      description: 'For young adults navigating life decisions and personal challenges.',
      image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&q=80&w=600'
    },
  ]

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg.png"
            alt="Hero Background"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        </div>

        <div className="relative z-10 max-w-5xl mx-auto text-center pt-20">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 bg-white/20 text-white backdrop-blur-sm border border-white/30 rounded-full text-sm font-semibold shadow-sm">
              ✨ Your Mental Health Matters
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 text-balance leading-tight drop-shadow-md"
          >
            Professional{' '}
            <span className="text-primary-foreground">Counseling</span> for Your
            <br />
            <span className="text-primary-foreground">Well-being</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-lg sm:text-xl text-white/90 mb-8 max-w-2xl mx-auto text-balance leading-relaxed drop-shadow"
          >
            Connect with experienced, compassionate counselors who understand your journey. Get the support you deserve in a safe, confidential environment.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/contact"
              className="px-8 py-4 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Your Session
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 border-2 border-white/80 text-white rounded-lg font-semibold hover:bg-white hover:text-foreground transition-all duration-300 flex items-center justify-center gap-2"
            >
              Explore Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          animate={{ y: [0, 30, 0] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute top-20 right-10 w-20 h-20 bg-primary/10 rounded-full blur-2xl hidden lg:block"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 0.5 }}
          className="absolute bottom-32 left-10 w-32 h-32 bg-accent/5 rounded-full blur-3xl hidden lg:block"
        />
      </section>

      {/* Intro Section */}
      <section className="py-24 bg-primary/5 relative">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid lg:grid-cols-2 gap-16 lg:gap-12 items-center"
          >
            {/* Left: Images */}
            <div className="relative max-w-md mx-auto lg:mx-0 lg:max-w-none mb-12 lg:mb-0">
              <img
                src="/counseling_main.png"
                alt="Counseling session"
                className="rounded-3xl w-full object-cover aspect-[4/5] lg:aspect-[3/4] lg:h-[600px] lg:w-[85%] ml-auto shadow-sm"
              />
              <img
                src="/counseling_small.png"
                alt="Supportive listening"
                className="absolute -bottom-8 -left-6 sm:-left-12 rounded-3xl w-2/3 border-[10px] border-[#fdf9f7] object-cover aspect-square shadow-xl"
              />
            </div>

            {/* Right: Content */}
            <div className="pt-6 lg:pt-0">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-primary/10 shadow-sm text-foreground text-sm font-semibold mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" /> Who We Are
              </div>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-6">
                Trusted Guidance for Life's <span className="text-primary">Emotional Challenges</span>
              </h2>

              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-8">
                We provide compassionate, personalized counselling to help you process challenges, rebuild confidence, and develop emotional resilience.
              </p>

              {/* Mission & Vision */}
              <div className="grid sm:grid-cols-2 gap-8 mb-10">
                <div>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <Target className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Our Mission</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our mission is to provide compassionate, confidential support to help you navigate life's challenges.
                  </p>
                </div>
                <div>
                  <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-4">
                    <Eye className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-bold text-lg text-foreground mb-2">Our Vision</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Our vision is to build a community where mental well-being is prioritized and accessible to all.
                  </p>
                </div>
              </div>

              {/* Checkmarks */}
              <div className="grid sm:grid-cols-2 gap-y-4 gap-x-2 mb-10">
                <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground">
                  <CheckCircle2 className="text-white w-5 h-5 fill-foreground stroke-2 shrink-0" /> Confidential & Safe Environment
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground">
                  <CheckCircle2 className="text-white w-5 h-5 fill-foreground stroke-2 shrink-0" /> Goal-Oriented Therapy Sessions
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground">
                  <CheckCircle2 className="text-white w-5 h-5 fill-foreground stroke-2 shrink-0" /> Flexible Appointment Scheduling
                </div>
                <div className="flex items-center gap-3 text-sm sm:text-base font-medium text-foreground">
                  <CheckCircle2 className="text-white w-5 h-5 fill-foreground stroke-2 shrink-0" /> Experienced Professionals
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center justify-center px-8 py-4 bg-foreground text-background rounded-full font-medium hover:bg-primary hover:text-white transition-colors shadow-sm group"
              >
                More About Us <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24  bg-background relative overflow-hidden">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-16 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Our Services
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
                How We Can <span className="text-primary">Help You</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex items-center gap-4"
            >
              <button
                onClick={slideLeft}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Previous services"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={slideRight}
                className="w-12 h-12 rounded-full bg-primary/20 hover:bg-primary text-primary hover:text-white flex items-center justify-center transition-colors duration-300"
                aria-label="Next services"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true, margin: '-100px' }}
            className="w-full relative"
          >
            <div
              ref={sliderRef}
              className="flex overflow-x-auto gap-12 pb-10 snap-x snap-mandatory [&::-webkit-scrollbar]:hidden [-ms-overflow-style:'none'] [scrollbar-width:'none']"
            >
              {services.map((service, index) => (
                <div
                  key={index}
                  className="snap-start shrink-0 w-[300px] sm:w-[350px] flex flex-col group cursor-pointer bg-white rounded-3xl overflow-hidden border border-border/50 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500"
                >
                  <div className="w-full h-[220px] relative overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/20 transition-colors duration-500" />
                  </div>
                  <div className="p-8">
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed line-clamp-3">
                      {service.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24  bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              How It Works
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Simple steps toward <span className="text-primary">healing</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From your first consultation to ongoing support, our process is designed to make therapy comfortable, structured, and focused on your well-being.
            </p>
          </motion.div>

          {/* Steps Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              {
                step: '01',
                icon: '📋',
                title: 'Book Your Consultation',
                desc: 'Book a confidential consultation online or by phone at a time that suits you.',
                image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=400',
                bullet: 'We ensure a smooth start to your journey',
              },
              {
                step: '02',
                icon: '🧠',
                title: 'Personalized Assessment',
                desc: 'We take time to understand your concerns, goals, and experiences.',
                image: 'https://images.unsplash.com/photo-1516534775068-ba3e7458af70?auto=format&fit=crop&q=80&w=400',
                bullet: 'We create a tailored therapy plan design',
              },
              {
                step: '03',
                icon: '🌱',
                title: 'Ongoing Support & Progress',
                desc: 'Through regular sessions and practical strategies, we help you build resilience.',
                image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=400',
                bullet: 'Achieve lasting emotional well-being',
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group bg-white rounded-3xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-2 flex flex-col"
              >
                {/* Top Row: Icon + Step */}
                <div className="flex items-center justify-between mb-8">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-2xl">
                    {item.icon}
                  </div>
                  <span className="text-sm font-bold text-muted-foreground tracking-wider">Step {item.step}</span>
                </div>

                {/* Title & Description */}
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{item.desc}</p>

                {/* Small Image */}
                <div className="rounded-2xl overflow-hidden mb-6 h-[140px]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>

                {/* Bullet Point */}
                <div className="mt-auto flex items-start gap-3 pt-4 border-t border-border/30">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                  <p className="text-sm text-muted-foreground">{item.bullet}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24  bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Why Radianz
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Why Choose <span className="text-primary">Us?</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that every individual has the potential to grow when provided with the right support.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {[
              { icon: '🎧', title: 'Active Listening', desc: 'We listen with empathy, giving you the safe space to express yourself openly.' },
              { icon: '🧠', title: 'Evidence-Based Methods', desc: 'Proven psychological techniques personalized to your unique needs.' },
              { icon: '🎯', title: 'Tailored Guidance', desc: 'Career and life guidance customized for your individual goals and aspirations.' },
              { icon: '🔒', title: 'Confidential & Safe', desc: 'A supportive, non-judgmental environment where your privacy is our priority.' },
              { icon: '💻', title: 'Online & In-Person', desc: 'Flexible session options that fit your schedule — from anywhere.' },
              { icon: '💡', title: 'Self-Awareness Focus', desc: 'Helping you understand yourself better to make informed life decisions.' },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative p-8 bg-white rounded-3xl border border-border/40 hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl hover:shadow-primary/5 overflow-hidden"
              >
                <div className="absolute -right-4 -top-4 text-8xl opacity-5 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none select-none">
                  {item.icon}
                </div>
                <div className="text-4xl mb-5">{item.icon}</div>
                <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Impact / Stats Section */}
      <section className="py-24  bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          {/* Section Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Fun Facts
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Numbers & moments that make us <span className="text-primary">proud</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              From guided sessions to client milestones, these highlights showcase the passion, dedication, and positive impact we bring to every step.
            </p>
          </motion.div>
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            {/* Left Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden shadow-sm relative border-[8px] border-white/50">
                <img
                  src="/counseling_main.png"
                  alt="Counseling Session"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Right Stats Grid */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:col-span-7 grid sm:grid-cols-2 gap-6"
            >
              {[
                { stat: '4.9/5', title: 'Client Satisfaction', desc: 'A highly rated safe space for your emotional well-being.' },
                { stat: '1,000+', title: 'Lives Impacted', desc: 'Helping students and professionals find clarity and growth.' },
                { stat: '100%', title: 'Confidentiality', desc: 'We ensure a secure, non-judgmental environment for you.' },
                { stat: 'Expert', title: 'Qualified Guidance', desc: 'Led by a qualified counselling psychologist and educator.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ y: -5 }}
                  className="bg-white p-8 sm:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300"
                >
                  <h3 className="text-4xl sm:text-5xl font-black text-foreground mb-4">{item.stat}</h3>
                  <h4 className="text-lg font-bold text-foreground mb-4">{item.title}</h4>
                  <div className="w-12 h-0.5 bg-gray-200 mb-4" />
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* About the Counsellor */}
      <section className="py-24  bg-background relative overflow-hidden">
        <div className="max-w-7xl px-4 sm:px-6 lg:px-8 mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

            {/* Left: Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                About the Counsellor
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-8 leading-tight">
                Dr. Aditi Mathur
              </h2>

              <div className="space-y-5 text-muted-foreground text-base sm:text-lg leading-relaxed">
                <p>
                  Dr. Aditi Mathur is a counselling psychologist and educator with a deep commitment to supporting individuals in their personal and career journeys.
                </p>
                <p>
                  She holds a Master&apos;s degree in Counselling and Guidance (Psychology) and has extensive experience teaching Human Resource Development to MBA students in a government academic institution.
                </p>
                <p>
                  Her counselling approach combines psychological understanding, empathy, and practical guidance to help individuals gain clarity, confidence, and emotional balance.
                </p>
              </div>

              {/* Signature placeholder */}
              <div className="mt-8 pt-8 border-t border-border/40">
                <p className="text-foreground font-semibold text-lg italic font-serif">— Dr. Aditi Mathur</p>
                <p className="text-muted-foreground text-sm mt-1">M.A. Counselling & Guidance (Psychology)</p>
              </div>
            </motion.div>

            {/* Right: Overlapping Images */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="flex justify-center lg:justify-end"
            >
              <div className="w-full max-w-md aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl border-[6px] border-primary/10">
                <img
                  src="/counseling_main.png"
                  alt="Dr. Aditi Mathur"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>
          </div>

          {/* Stats Row */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-12 border-t border-border/30"
          >
            {[
              { stat: '5000+', label: 'Therapy Hours Completed' },
              { stat: '1000+', label: 'Clients Supported' },
              { stat: '50+', label: 'Workshops & Programs' },
              { stat: '10+', label: 'Years of Experience' },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-foreground mb-2">{item.stat}</h3>
                <p className="text-sm text-muted-foreground font-medium">{item.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24  bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Left: Image + Heading */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="lg:sticky lg:top-32"
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                FAQ
              </div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6 leading-tight">
                Frequently Asked <span className="text-primary">Questions</span>
              </h2>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed mb-10">
                We understand that seeking therapy is an important step. Explore common questions about appointments, privacy, and treatment approaches.
              </p>
              <div className="rounded-3xl overflow-hidden shadow-sm border border-border/30">
                <img
                  src="/counseling_small.png"
                  alt="Therapy session"
                  className="w-full h-[350px] object-cover"
                />
              </div>
            </motion.div>

            {/* Right: Accordion */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="w-full"
            >
              <FAQAccordion />
            </motion.div>
          </div>
        </div>
      </section>

      {/* <ContactSection /> */}

      <CtaBanner />

      <Footer />
    </main>
  )
}
