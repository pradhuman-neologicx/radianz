'use client'

import { motion, Variants } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { services } from '@/data/services'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight, CheckCircle2, Calendar } from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: 'easeOut' },
  },
}

export default function Services() {
  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <PageHeader
        badge="Our Services"
        title="Services We"
        titleAccent="Offer"
        description="From career guidance to emotional support, our counselling services are designed to help you navigate life's challenges with clarity and confidence."
      />

      {/* Services Grid */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="space-y-8"
          >
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <motion.div
                  key={service.slug}
                  variants={itemVariants}
                >
                  <Link
                    href={`/services/${service.slug}`}
                    className="group block"
                  >
                    <div className={`bg-white rounded-3xl border border-border/40 hover:border-primary/20 hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 overflow-hidden`}>
                      <div className={`grid grid-cols-1 lg:grid-cols-2 ${!isEven ? 'lg:grid-flow-dense' : ''}`}>
                        {/* Image */}
                        <div className={`relative h-[280px] lg:h-auto lg:min-h-[380px] overflow-hidden ${!isEven ? 'lg:col-start-2' : ''}`}>
                          <Image
                            src={service.image}
                            alt={service.title}
                            fill
                            sizes="(max-width: 1024px) 100vw, 50vw"
                            className="object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
                          {/* Step Badge */}
                          <span className="absolute top-6 left-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full text-xs font-bold text-foreground tracking-wider">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                        </div>

                        {/* Content */}
                        <div className={`p-8 sm:p-10 lg:p-12 flex flex-col justify-center ${!isEven ? 'lg:col-start-1' : ''}`}>
                          <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                            <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                          </div>

                          <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                            {service.title}
                          </h3>

                          <p className="text-muted-foreground leading-relaxed mb-6">
                            {service.shortDesc}
                          </p>

                          {/* Quick Benefits */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
                            {service.benefits.slice(0, 4).map((benefit, i) => (
                              <div key={i} className="flex items-start gap-2.5">
                                <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                                <span className="text-sm text-muted-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>

                          {/* Features Tags */}
                          <div className="flex flex-wrap gap-2 mb-8">
                            {service.features.map((feature, i) => (
                              <span
                                key={i}
                                className="px-3 py-1.5 bg-primary/5 text-primary text-xs font-semibold rounded-full border border-primary/10"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* CTA */}
                          <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-4 h-4" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* How We Work */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Process
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How we <span className="text-primary">work together</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Our counselling process is designed to be comfortable, structured, and focused on your well-being.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="relative"
          >
            {/* Connecting Line */}
            <div className="hidden md:block absolute top-[60px] left-[12.5%] right-[12.5%] h-[2px] z-0">
              <div className="w-full h-full border-t-2 border-dashed border-primary/25" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-6">
              {[
                { step: '01', title: 'Book a Consultation', desc: 'Schedule a confidential session online or by phone at a time that suits you.' },
                { step: '02', title: 'Initial Assessment', desc: 'We take time to understand your concerns, goals, and what you hope to achieve.' },
                { step: '03', title: 'Tailored Plan', desc: 'A personalized counselling plan is created based on your unique needs and situation.' },
                { step: '04', title: 'Ongoing Support', desc: 'Through regular sessions and practical strategies, we support your growth and progress.' },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Circle */}
                  <div className="relative z-10 w-[120px] h-[120px] rounded-full bg-white border-2 border-primary/20 flex items-center justify-center mb-6 shadow-lg shadow-primary/10">
                    <span className="text-3xl font-bold text-primary">{item.step}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[250px]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: '-100px' }}
            className="relative bg-foreground rounded-3xl p-10 sm:p-14 text-center overflow-hidden"
          >
            {/* Decorative blobs */}
            <div className="absolute top-0 left-0 w-40 h-40 bg-primary/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-0 w-56 h-56 bg-primary/10 rounded-full blur-3xl" />

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Not sure which service is right for you?
              </h2>
              <p className="text-white/60 text-base sm:text-lg max-w-xl mx-auto mb-8">
                Book a free initial consultation and we&apos;ll help you find the best approach for your needs.
              </p>
              <Link
                href="/book"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
              >
                <Calendar className="w-5 h-5" />
                Book a Free Consultation
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
