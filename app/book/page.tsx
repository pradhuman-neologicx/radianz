'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { PageHeader } from '@/components/page-header'
import { services } from '@/data/services'
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  FileText,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Shield,
  Video,
  MapPin,
} from 'lucide-react'

const steps = [
  { id: 1, label: 'Service', icon: FileText },
  { id: 2, label: 'Date & Time', icon: Calendar },
  { id: 3, label: 'Your Details', icon: User },
  { id: 4, label: 'Confirm', icon: CheckCircle2 },
]

const timeSlots = [
  '10:00 AM',
  '10:30 AM',
  '11:00 AM',
  '11:30 AM',
  '12:00 PM',
  '02:00 PM',
  '02:30 PM',
  '03:00 PM',
  '03:30 PM',
  '04:00 PM',
  '04:30 PM',
  '05:00 PM',
]

const sessionModes = [
  { id: 'online', label: 'Online (Video Call)', icon: Video, desc: 'Join from the comfort of your home via secure video.' },
  { id: 'in-person', label: 'In-Person', icon: MapPin, desc: 'Visit our counselling centre for a face-to-face session.' },
]

export default function BookAppointment() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    service: '',
    sessionMode: 'online',
    date: '',
    time: '',
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const nextStep = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1)
  }

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Appointment booked:', formData)
    setSubmitted(true)
  }

  const canProceed = () => {
    switch (currentStep) {
      case 1:
        return formData.service !== '' && formData.sessionMode !== ''
      case 2:
        return formData.date !== '' && formData.time !== ''
      case 3:
        return formData.name !== '' && formData.email !== '' && formData.phone !== ''
      default:
        return true
    }
  }

  // Generate next 14 days for date selection
  const getAvailableDates = () => {
    const dates = []
    const today = new Date()
    for (let i = 1; i <= 14; i++) {
      const date = new Date(today)
      date.setDate(today.getDate() + i)
      // Skip Sundays
      if (date.getDay() !== 0) {
        dates.push(date)
      }
    }
    return dates
  }

  const formatDate = (date: Date) => {
    return date.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric' })
  }

  const formatDateValue = (date: Date) => {
    return date.toISOString().split('T')[0]
  }

  const selectedService = services.find((s) => s.slug === formData.service)

  return (
    <main className="min-h-screen bg-background">
      <Header />

      <PageHeader
        badge="Book an Appointment"
        title="Schedule Your"
        titleAccent="Session"
        description="Take the first step toward clarity and well-being. Book a confidential counselling session at a time that suits you."
      />

      {/* Main Booking Section */}
      <section className="py-16 sm:py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 translate-y-1/2" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="text-center py-16"
            >
              <div className="w-24 h-24 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-8">
                <CheckCircle2 className="w-12 h-12 text-green-600" />
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Appointment Booked!
              </h2>
              <p className="text-muted-foreground text-lg max-w-lg mx-auto mb-4">
                Thank you, <span className="font-semibold text-foreground">{formData.name}</span>! Your {formData.sessionMode === 'online' ? 'online' : 'in-person'} session has been scheduled.
              </p>
              <div className="inline-flex flex-col sm:flex-row gap-4 items-center bg-primary/5 rounded-2xl p-6 border border-primary/10 mb-8">
                <div className="flex items-center gap-2 text-foreground">
                  <Calendar className="w-5 h-5 text-primary" />
                  <span className="font-medium">{formData.date}</span>
                </div>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-foreground">
                  <Clock className="w-5 h-5 text-primary" />
                  <span className="font-medium">{formData.time}</span>
                </div>
                <span className="hidden sm:block text-muted-foreground">•</span>
                <div className="flex items-center gap-2 text-foreground">
                  <FileText className="w-5 h-5 text-primary" />
                  <span className="font-medium">{selectedService?.title}</span>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mb-8">
                A confirmation email has been sent to <span className="font-medium text-foreground">{formData.email}</span>.<br />
                We&apos;ll be in touch shortly with session details.
              </p>
              <a
                href="/"
                className="inline-flex items-center gap-2 px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30"
              >
                Back to Home
              </a>
            </motion.div>
          ) : (
            <>
              {/* Step Indicator */}
              <div className="mb-12">
                <div className="flex items-center justify-between max-w-lg mx-auto">
                  {steps.map((step, index) => {
                    const StepIcon = step.icon
                    const isActive = currentStep === step.id
                    const isCompleted = currentStep > step.id

                    return (
                      <div key={step.id} className="flex items-center">
                        <div className="flex flex-col items-center">
                          <div
                            className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 ${
                              isCompleted
                                ? 'bg-primary text-white'
                                : isActive
                                  ? 'bg-primary/15 text-primary border-2 border-primary'
                                  : 'bg-muted/50 text-muted-foreground border-2 border-border/40'
                            }`}
                          >
                            {isCompleted ? (
                              <CheckCircle2 className="w-5 h-5" />
                            ) : (
                              <StepIcon className="w-5 h-5" />
                            )}
                          </div>
                          <span
                            className={`text-xs mt-2 font-medium transition-colors duration-300 ${
                              isActive || isCompleted ? 'text-primary' : 'text-muted-foreground'
                            }`}
                          >
                            {step.label}
                          </span>
                        </div>
                        {index < steps.length - 1 && (
                          <div
                            className={`w-12 sm:w-20 h-[2px] mx-2 sm:mx-3 mb-6 transition-colors duration-500 ${
                              currentStep > step.id ? 'bg-primary' : 'bg-border/40'
                            }`}
                          />
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Step Content */}
              <form onSubmit={handleSubmit}>
                <AnimatePresence mode="wait">
                  {/* Step 1: Select Service */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Choose a Service</h2>
                        <p className="text-muted-foreground">Select the counselling service you&apos;d like to book.</p>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {services.map((service) => {
                          const Icon = service.icon
                          const isSelected = formData.service === service.slug
                          return (
                            <button
                              type="button"
                              key={service.slug}
                              onClick={() => setFormData((prev) => ({ ...prev, service: service.slug }))}
                              className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 hover:-translate-y-0.5 ${
                                isSelected
                                  ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                                  : 'border-border/40 bg-white hover:border-primary/30 hover:shadow-md'
                              }`}
                            >
                              <div className="flex items-start gap-4">
                                <div
                                  className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 transition-colors duration-300 ${
                                    isSelected ? 'bg-primary text-white' : 'bg-primary/10 text-primary'
                                  }`}
                                >
                                  <Icon className="w-5 h-5" strokeWidth={1.5} />
                                </div>
                                <div>
                                  <h3 className="font-bold text-foreground text-sm mb-1">{service.title}</h3>
                                  <p className="text-xs text-muted-foreground leading-relaxed">{service.shortDesc}</p>
                                </div>
                              </div>
                            </button>
                          )
                        })}
                      </div>

                      {/* Session Mode */}
                      <div>
                        <h3 className="text-lg font-bold text-foreground mb-4">Session Mode</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {sessionModes.map((mode) => {
                            const ModeIcon = mode.icon
                            const isSelected = formData.sessionMode === mode.id
                            return (
                              <button
                                type="button"
                                key={mode.id}
                                onClick={() => setFormData((prev) => ({ ...prev, sessionMode: mode.id }))}
                                className={`text-left p-5 rounded-2xl border-2 transition-all duration-300 ${
                                  isSelected
                                    ? 'border-primary bg-primary/5 shadow-lg shadow-primary/10'
                                    : 'border-border/40 bg-white hover:border-primary/30'
                                }`}
                              >
                                <div className="flex items-center gap-3 mb-2">
                                  <ModeIcon className={`w-5 h-5 ${isSelected ? 'text-primary' : 'text-muted-foreground'}`} />
                                  <span className="font-bold text-foreground text-sm">{mode.label}</span>
                                </div>
                                <p className="text-xs text-muted-foreground">{mode.desc}</p>
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 2: Date & Time */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Pick a Date & Time</h2>
                        <p className="text-muted-foreground">Choose a convenient date and time for your session.</p>
                      </div>

                      {/* Date Selection */}
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Calendar className="w-4 h-4 text-primary" />
                          Available Dates
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-3">
                          {getAvailableDates().map((date) => {
                            const dateStr = formatDateValue(date)
                            const isSelected = formData.date === dateStr
                            const dayName = date.toLocaleDateString('en-IN', { weekday: 'short' })
                            const dayNum = date.getDate()
                            const month = date.toLocaleDateString('en-IN', { month: 'short' })

                            return (
                              <button
                                type="button"
                                key={dateStr}
                                onClick={() => setFormData((prev) => ({ ...prev, date: dateStr }))}
                                className={`flex flex-col items-center p-3 rounded-2xl border-2 transition-all duration-300 ${
                                  isSelected
                                    ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'border-border/40 bg-white hover:border-primary/30 text-foreground'
                                }`}
                              >
                                <span className={`text-[10px] font-medium uppercase tracking-wider ${isSelected ? 'text-white/70' : 'text-muted-foreground'}`}>
                                  {dayName}
                                </span>
                                <span className="text-xl font-bold">{dayNum}</span>
                                <span className={`text-[10px] ${isSelected ? 'text-white/70' : 'text-muted-foreground'}`}>
                                  {month}
                                </span>
                              </button>
                            )
                          })}
                        </div>
                      </div>

                      {/* Time Selection */}
                      <div>
                        <h3 className="text-sm font-semibold text-foreground mb-4 flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Available Time Slots
                        </h3>
                        <div className="grid grid-cols-3 sm:grid-cols-4 gap-3">
                          {timeSlots.map((time) => {
                            const isSelected = formData.time === time
                            return (
                              <button
                                type="button"
                                key={time}
                                onClick={() => setFormData((prev) => ({ ...prev, time }))}
                                className={`py-3 px-4 rounded-xl border-2 text-sm font-medium transition-all duration-300 ${
                                  isSelected
                                    ? 'border-primary bg-primary text-white shadow-lg shadow-primary/20'
                                    : 'border-border/40 bg-white hover:border-primary/30 text-foreground'
                                }`}
                              >
                                {time}
                              </button>
                            )
                          })}
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Personal Details */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Your Details</h2>
                        <p className="text-muted-foreground">Tell us a bit about yourself so we can prepare for your session.</p>
                      </div>

                      <div className="bg-white rounded-3xl border border-border/40 p-8 space-y-6">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                          <div>
                            <label htmlFor="name" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                              <User className="w-4 h-4 text-primary" />
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
                              placeholder="Enter your full name"
                            />
                          </div>
                          <div>
                            <label htmlFor="email" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                              <Mail className="w-4 h-4 text-primary" />
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

                        <div>
                          <label htmlFor="phone" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                            <Phone className="w-4 h-4 text-primary" />
                            Phone Number <span className="text-red-400">*</span>
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-background"
                            placeholder="+91 98765 43210"
                          />
                        </div>

                        <div>
                          <label htmlFor="message" className="flex items-center gap-2 text-sm font-semibold text-foreground mb-2">
                            <FileText className="w-4 h-4 text-primary" />
                            Anything you&apos;d like us to know? <span className="text-muted-foreground text-xs">(Optional)</span>
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={4}
                            className="w-full px-4 py-3.5 border border-border/60 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all resize-none bg-background"
                            placeholder="Briefly share what brings you here or any concerns you'd like to discuss..."
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 4: Confirmation */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.4 }}
                      className="space-y-8"
                    >
                      <div>
                        <h2 className="text-2xl font-bold text-foreground mb-2">Confirm Your Appointment</h2>
                        <p className="text-muted-foreground">Please review your booking details before confirming.</p>
                      </div>

                      <div className="bg-white rounded-3xl border border-border/40 overflow-hidden">
                        {/* Summary Header */}
                        <div className="bg-gradient-to-r from-primary/10 to-primary/5 p-6 border-b border-border/30">
                          <h3 className="font-bold text-foreground text-lg">Booking Summary</h3>
                        </div>

                        <div className="p-6 sm:p-8 space-y-6">
                          {/* Service */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <FileText className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Service</p>
                              <p className="font-semibold text-foreground">{selectedService?.title}</p>
                            </div>
                          </div>

                          {/* Session Mode */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              {formData.sessionMode === 'online' ? (
                                <Video className="w-5 h-5 text-primary" />
                              ) : (
                                <MapPin className="w-5 h-5 text-primary" />
                              )}
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Session Mode</p>
                              <p className="font-semibold text-foreground">
                                {formData.sessionMode === 'online' ? 'Online (Video Call)' : 'In-Person'}
                              </p>
                            </div>
                          </div>

                          {/* Date & Time */}
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                              <Calendar className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Date & Time</p>
                              <p className="font-semibold text-foreground">
                                {formData.date && new Date(formData.date).toLocaleDateString('en-IN', {
                                  weekday: 'long',
                                  year: 'numeric',
                                  month: 'long',
                                  day: 'numeric',
                                })}{' '}
                                at {formData.time}
                              </p>
                            </div>
                          </div>

                          <div className="border-t border-border/30" />

                          {/* Personal Info */}
                          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div className="flex items-start gap-3">
                              <User className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Name</p>
                                <p className="text-sm font-medium text-foreground">{formData.name}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Mail className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                                <p className="text-sm font-medium text-foreground">{formData.email}</p>
                              </div>
                            </div>
                            <div className="flex items-start gap-3">
                              <Phone className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                                <p className="text-sm font-medium text-foreground">{formData.phone}</p>
                              </div>
                            </div>
                          </div>

                          {formData.message && (
                            <>
                              <div className="border-t border-border/30" />
                              <div>
                                <p className="text-xs text-muted-foreground uppercase tracking-wider mb-2">Additional Notes</p>
                                <p className="text-sm text-muted-foreground leading-relaxed">{formData.message}</p>
                              </div>
                            </>
                          )}
                        </div>
                      </div>

                      {/* Confidentiality Notice */}
                      <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-2xl border border-primary/10">
                        <Shield className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                        <p className="text-xs text-muted-foreground leading-relaxed">
                          <span className="font-semibold text-foreground">100% Confidential.</span> All your information is kept strictly private and secure. Your session details will only be shared with your assigned counsellor.
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation Buttons */}
                <div className="flex items-center justify-between mt-10 pt-8 border-t border-border/30">
                  {currentStep > 1 ? (
                    <button
                      type="button"
                      onClick={prevStep}
                      className="flex items-center gap-2 px-6 py-3 text-muted-foreground hover:text-foreground font-medium transition-colors duration-300 rounded-xl hover:bg-muted/50"
                    >
                      <ArrowLeft className="w-4 h-4" />
                      Back
                    </button>
                  ) : (
                    <div />
                  )}

                  {currentStep < 4 ? (
                    <button
                      type="button"
                      onClick={nextStep}
                      disabled={!canProceed()}
                      className={`flex items-center gap-2 px-8 py-3.5 rounded-xl font-semibold transition-all duration-300 group ${
                        canProceed()
                          ? 'bg-primary hover:bg-primary/90 text-white hover:shadow-lg hover:shadow-primary/30'
                          : 'bg-muted text-muted-foreground cursor-not-allowed'
                      }`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  ) : (
                    <button
                      type="submit"
                      className="flex items-center gap-2 px-8 py-3.5 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/30 group"
                    >
                      <CheckCircle2 className="w-5 h-5" />
                      Confirm Booking
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </button>
                  )}
                </div>
              </form>
            </>
          )}
        </div>
      </section>

      <Footer />
    </main>
  )
}
