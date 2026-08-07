'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface PageHeaderProps {
  badge: string
  title: string
  titleAccent?: string
  description: string
  backgroundImage?: string
}

export function PageHeader({
  badge,
  title,
  titleAccent,
  description,
  backgroundImage = '/page-header-bg.png',
}: PageHeaderProps) {
  return (
    <section className="relative pt-32 pb-16 sm:pt-36 sm:pb-20 lg:pt-40 lg:pb-24 overflow-hidden flex items-center min-h-[40vh]">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
        {/* Dark overlay with gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6"
        >
          <span className="inline-block px-5 py-2 border border-white/25 rounded-full text-sm font-semibold text-white/90 tracking-wider uppercase backdrop-blur-sm bg-white/5">
            {badge}
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 text-balance leading-tight"
        >
          {title}{' '}
          {titleAccent && <span className="text-primary">{titleAccent}</span>}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-base sm:text-lg text-white/70 max-w-2xl mx-auto text-balance leading-relaxed"
        >
          {description}
        </motion.p>
      </div>
    </section>
  )
}
