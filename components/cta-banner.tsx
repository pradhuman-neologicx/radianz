'use client'

import { motion } from 'framer-motion'
import { Phone, ArrowUp } from 'lucide-react'
import Link from 'next/link'

export function CtaBanner() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <section className="relative w-full bg-[#1e4459] overflow-hidden">
      {/* Abstract Background Shapes */}
      <div className="absolute inset-0 z-0">
        <svg className="absolute w-full h-full object-cover" preserveAspectRatio="none" viewBox="0 0 1440 400" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0,150 C300,50 600,250 1440,100 L1440,400 L0,400 Z" fill="#133042" opacity="0.8" />
          <path d="M0,250 C400,150 800,350 1440,150 L1440,400 L0,400 Z" fill="#1b858e" opacity="0.6" />
          <path d="M1000,0 C1200,100 1300,250 1440,400 L1440,0 Z" fill="#c48a5e" opacity="0.8" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[450px] py-16">

          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-white space-y-6"
          >
            <h2 className="text-4xl md:text-5xl lg:text-[54px] font-medium leading-[1.15] tracking-tight">
              Take the First Step Toward <br />
              <span className="font-serif italic text-primary">Better Mental Health</span>
            </h2>

            <p className="text-white/80 text-base sm:text-lg max-w-lg leading-relaxed">
              Our counseling services offer a safe space to talk openly, gain clarity, and develop healthier ways to handle stress, anxiety, relationships, and life challenges.
            </p>

            <div className="flex flex-wrap items-center gap-6 pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-[#e8a38a] hover:bg-[#d8937a] text-white rounded-full font-semibold transition-colors shadow-lg"
              >
                Book a Session
              </Link>

              <div className="flex items-center gap-3 text-white font-semibold text-lg">
                <Phone className="w-5 h-5 text-[#e8a38a]" fill="currentColor" />
                <span>+91 98765 43210</span>
              </div>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="hidden lg:flex justify-end items-end h-full relative"
          >
            {/* Using a neat circular/rounded wrapper since a perfect transparent cutout isn't available by default */}
            <div className="relative w-[380px] h-[380px] rounded-full overflow-hidden border-8 border-white/10 shadow-2xl">
              <img
                src="/counseling_main.png"
                alt="Professional Counselor"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>


    </section>
  )
}
