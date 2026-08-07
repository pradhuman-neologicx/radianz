'use client'

import { motion, Variants } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import type { Service } from '@/data/services'
import { getServiceBySlug, services } from '@/data/services'
import Link from 'next/link'
import Image from 'next/image'
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle2,
  Target,
  Users2,
  Lightbulb,
  Calendar,
  Phone,
} from 'lucide-react'

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
}

interface ServiceDetailContentProps {
  slug: string
}

export default function ServiceDetailContent({ slug }: ServiceDetailContentProps) {
  const service = getServiceBySlug(slug)!
  const relatedServices = services.filter((s) => s.slug !== slug).slice(0, 3)
  const Icon = service.icon

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <PageHeader
        badge={service.title}
        title={service.title.split(' ').slice(0, -1).join(' ')}
        titleAccent={service.title.split(' ').slice(-1)[0]}
        description={service.shortDesc}
        backgroundImage={service.image}
      />

      {/* Breadcrumb */}
      <div className="bg-white border-b border-border/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-primary transition-colors">Services</Link>
            <span>/</span>
            <span className="text-foreground font-medium">{service.title}</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <section className="py-24 bg-background relative overflow-clip">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Left Content - 2 cols */}
            <div className="lg:col-span-2 space-y-16">
              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                  Overview
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                  What is <span className="text-primary">{service.title}</span>?
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {service.description}
                </p>
              </motion.div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
                className="relative rounded-3xl overflow-hidden shadow-xl h-[300px] sm:h-[400px]"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  className="object-cover"
                />
              </motion.div>

              {/* Benefits */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Target className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Key Benefits</h3>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {service.benefits.map((benefit, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10"
                    >
                      <CheckCircle2 className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm font-medium text-foreground">{benefit}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Our Approach */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Lightbulb className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Our Approach</h3>
                </div>
                <div className="space-y-4">
                  {service.approach.map((step, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: i * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-start gap-4 group"
                    >
                      <span className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0 text-sm font-bold text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                        {i + 1}
                      </span>
                      <div className="pt-1">
                        <p className="text-muted-foreground leading-relaxed">{step}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* Who Is It For */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true, margin: '-100px' }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
                    <Users2 className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground">Who Is This For?</h3>
                </div>
                <div className="bg-white rounded-3xl border border-border/40 p-8">
                  <ul className="space-y-4">
                    {service.whoIsItFor.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
                        <span className="text-muted-foreground leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>

            {/* Right Sidebar - 1 col */}
            <div className="space-y-6">
              {/* Service Icon Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="bg-white rounded-3xl border border-border/40 p-8 sticky top-24"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{service.shortDesc}</p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  <p className="text-sm font-semibold text-foreground">What&apos;s Included:</p>
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className="space-y-3">
                  <Link
                    href="/book"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                  >
                    <Calendar className="w-4 h-4" />
                    Book a Session
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                  <a
                    href="tel:+919876543210"
                    className="flex items-center justify-center gap-2 w-full px-6 py-3.5 bg-primary/5 hover:bg-primary/10 text-primary rounded-xl font-semibold transition-all duration-300 border border-primary/15"
                  >
                    <Phone className="w-4 h-4" />
                    Call Us
                  </a>
                </div>

                {/* Divider */}
                <div className="border-t border-border/30 my-8" />

                {/* Quick Info */}
                <div className="space-y-4">
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Session Mode</p>
                    <p className="text-sm font-medium text-foreground">Online & In-Person</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Duration</p>
                    <p className="text-sm font-medium text-foreground">45-60 minutes</p>
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Confidentiality</p>
                    <p className="text-sm font-medium text-foreground">100% Private & Secure</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Services */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: '-100px' }}
              className="text-left"
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Explore More
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Other services you may <span className="text-primary">find helpful</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="flex-shrink-0"
            >
              <Link
                href="/services"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-primary/5 text-primary border border-primary/20 rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 group"
              >
                View All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-100px' }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
          >
            {relatedServices.map((related) => {
              const RelatedIcon = related.icon
              return (
                <motion.div key={related.slug} variants={itemVariants}>
                  <Link
                    href={`/services/${related.slug}`}
                    className="group block bg-white rounded-3xl overflow-hidden border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                  >
                    {/* Image */}
                    <div className="relative h-[200px] overflow-hidden">
                      <Image
                        src={related.image}
                        alt={related.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="p-7">
                      <div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center mb-4">
                        <RelatedIcon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                      </div>
                      <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors duration-300">
                        {related.title}
                      </h3>
                      <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                        {related.shortDesc}
                      </p>
                      <div className="flex items-center gap-2 text-primary text-sm font-semibold group-hover:gap-3 transition-all duration-300">
                        Learn More <ArrowRight className="w-3.5 h-3.5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>


        </div>
      </section>

      <Footer />
    </main>
  )
}
