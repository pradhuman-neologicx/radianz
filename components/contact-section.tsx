'use client'

import { motion } from 'framer-motion'
import { Phone } from 'lucide-react'
import Image from 'next/image'

export function ContactSection() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-foreground relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Content & Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary text-sm font-medium mb-8 border border-primary/20">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Book An Appointment
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-background mb-6 leading-tight">
              Take the first step towards emotional balance
            </h2>
            
            <p className="text-base sm:text-lg text-background/70 leading-relaxed mb-10 max-w-lg">
              Schedule your appointment today and begin a supportive journey toward clarity, resilience, and personal well-being.
            </p>

            <div className="relative max-w-md h-[280px] rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src="/counseling_main.png" 
                alt="Counseling Session"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              
              {/* Floating Contact Card */}
              <div className="absolute bottom-6 left-6 right-6 bg-background/10 backdrop-blur-md border border-background/20 rounded-2xl p-4 flex items-center gap-4">
                <div className="w-12 h-12 shrink-0 rounded-full bg-primary text-primary-foreground flex items-center justify-center">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-background/80 text-sm font-medium">Call Us Anytime</p>
                  <p className="text-background font-bold text-lg">+91 98765 43210</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="bg-white/5 rounded-[2rem] p-8 sm:p-10 shadow-2xl border border-white/5"
          >
            <h3 className="text-3xl font-bold text-background mb-8">Get In Touch</h3>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-background/90">First Name*</label>
                  <input 
                    type="text" 
                    placeholder="Enter Full Name" 
                    className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-background/90">Phone Number*</label>
                  <input 
                    type="tel" 
                    placeholder="Enter Phone Number" 
                    className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-background/90">Email Address*</label>
                  <input 
                    type="email" 
                    placeholder="Enter Email Address" 
                    className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-background/90">Select Date*</label>
                  <input 
                    type="date" 
                    className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-background/90">Message</label>
                <textarea 
                  placeholder="Any Additional Message..." 
                  rows={4}
                  className="w-full bg-transparent border border-white/20 rounded-xl px-4 py-3 text-background placeholder:text-background/40 focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all resize-none"
                />
              </div>

              <button 
                type="button"
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-xl font-bold hover:bg-primary/90 transition-colors shadow-lg mt-4 w-full sm:w-auto"
              >
                Submit Message
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
