"use client";

import { motion, Variants } from "framer-motion";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { PageHeader } from "@/components/page-header";
import { CtaBanner } from "@/components/cta-banner";
import Image from "next/image";
import Link from "next/link";
import {
  Heart,
  Users,
  Target,
  Eye,
  Ear,
  Brain,
  Compass,
  Shield,
  GraduationCap,
  Briefcase,
  Sparkles,
  UserCircle,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  Award,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

export default function About() {
  const approach = [
    {
      icon: Ear,
      title: "Active Listening & Empathy",
      desc: "We create a space where you feel truly heard and understood without judgment.",
    },
    {
      icon: Brain,
      title: "Evidence-Based Techniques",
      desc: "Our methods are grounded in proven psychological research and practices.",
    },
    {
      icon: Compass,
      title: "Tailored Guidance",
      desc: "Career and life guidance customized to your unique needs and goals.",
    },
    {
      icon: Shield,
      title: "Safe & Confidential",
      desc: "A supportive, confidential environment where you can openly express yourself.",
    },
  ];

  const whoCanBenefit = [
    {
      icon: GraduationCap,
      title: "Students",
      desc: "Facing career confusion or academic stress and needing clarity on the path ahead.",
    },
    {
      icon: Sparkles,
      title: "Young Adults",
      desc: "Navigating life decisions, personal challenges, and the transition to adulthood.",
    },
    {
      icon: Briefcase,
      title: "Professionals",
      desc: "Dealing with work stress, career transitions, or seeking work-life balance.",
    },
    {
      icon: UserCircle,
      title: "Individuals",
      desc: "Seeking emotional clarity, personal growth, and a deeper understanding of self.",
    },
  ];

  return (
    <main className="min-h-screen bg-background">
      <Header />

      {/* Page Header */}
      <PageHeader
        badge="About Us"
        title="About"
        titleAccent="Radianz"
        description="A counselling and guidance initiative dedicated to supporting individuals in navigating life's personal, emotional, and career challenges with clarity and confidence."
      />

      {/* Who We Are */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Image Side */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] shadow-2xl">
                <Image
                  src="/counseling_main.png"
                  alt="Counselling session"
                  fill
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
              </div>
              {/* Floating Stats Card */}
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-6 shadow-xl border border-border/40 hidden sm:block">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">100+</p>
                    <p className="text-sm text-muted-foreground">
                      Lives Supported
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text Side */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Who We Are
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Supporting your journey toward{" "}
                <span className="text-primary">clarity & confidence</span>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Founded by a qualified counselling psychologist with an MA in
                  Counselling and Guidance and extensive experience in teaching
                  Human Resource Development to postgraduate management
                  students, our approach combines psychological insight,
                  educational understanding, and practical life guidance.
                </p>
                <p>
                  With years of experience working closely with young adults and
                  professionals, we understand the complex pressures of modern
                  life — career uncertainty, emotional stress, relationship
                  challenges, and decision-making dilemmas.
                </p>
                <p>
                  Our counselling services provide a safe, confidential, and
                  non-judgmental space where individuals can openly explore
                  their thoughts and feelings.
                </p>
              </div>

              {/* Key Points */}
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  "Qualified Counselling Psychologist",
                  "Evidence-Based Approach",
                  "Online & In-Person Sessions",
                  "Confidential Environment",
                ].map((point, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-sm font-medium text-foreground">
                      {point}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Approach
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              How we <span className="text-primary">help you</span> grow
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We believe that every individual has the potential to grow when
              provided with the right support. Our counselling process focuses
              on:
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {approach.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group bg-white rounded-3xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                    <Icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.desc}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* About the Counsellor */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 translate-y-1/2" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            {/* Text Side - 3 cols */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-3 order-2 lg:order-1"
            >
              <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Meet the Counsellor
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-2">
                Dr. Aditi <span className="text-primary">Mathur</span>
              </h2>
              <p className="text-primary font-medium mb-6">
                Counselling Psychologist & Educator
              </p>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Dr. Aditi Mathur is a qualified Counselling Psychologist,
                  certified Cognitive Behavioral Therapist and an educator with
                  a deep commitment to supporting individuals in their personal
                  and professionals journeys.
                </p>
                <p>
                  Besides her masters and doctorate degree in HRD, she has
                  extensive and counseling experience of more than 25 years to
                  the students in government academic institutions and private
                  organisations.
                </p>
                <p>
                  Her personal and professional counselling approach combines
                  psychological understanding, empathy, and practical guidance
                  to help individuals gain clarity, confidence, and emotional
                  balance.
                </p>
              </div>

              {/* Credentials */}
              <div className="mt-8 flex flex-wrap gap-3">
                {[
                  "MA in Counselling & Guidance",
                  "HRD Educator",
                  "Counselling Psychologist",
                ].map((cred, i) => (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full"
                  >
                    <Award className="w-3.5 h-3.5" />
                    {cred}
                  </span>
                ))}
              </div>
            </motion.div>

            {/* Image Side - 2 cols */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="lg:col-span-2 order-1 lg:order-2"
            >
              <div className="relative max-w-sm mx-auto">
                <div className="relative rounded-3xl overflow-hidden aspect-[3/4] shadow-2xl border-[6px] border-primary/10">
                  <Image
                    src="/aditi.png"
                    alt="Dr. Aditi Mathur"
                    fill
                    sizes="(max-width: 1024px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                {/* Decorative element */}
                <div className="absolute -bottom-4 -left-4 w-24 h-24 bg-primary/10 rounded-2xl -z-10" />
                <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary/5 rounded-full -z-10" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Who Can Benefit */}
      <section className="py-24 bg-primary/5 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Who Can Benefit
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Our counselling is <span className="text-primary">for you</span>
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              Whether you&apos;re a student, a young adult, or a working
              professional — if you&apos;re looking for clarity, support, and
              growth, you&apos;re welcome here.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {whoCanBenefit.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="group relative bg-white rounded-3xl p-8 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 hover:-translate-y-1 overflow-hidden"
                >
                  {/* Background number */}
                  <span className="absolute -bottom-4 -right-2 text-[100px] font-black text-primary/[0.04] leading-none select-none pointer-events-none">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="relative z-10">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/15 to-primary/5 flex items-center justify-center mb-6 group-hover:from-primary/20 group-hover:to-primary/10 transition-all duration-300">
                      <Icon
                        className="w-7 h-7 text-primary"
                        strokeWidth={1.5}
                      />
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 bg-background relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl -z-10 -translate-x-1/2 -translate-y-1/2" />
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, margin: "-100px" }}
            className="text-center mb-16"
          >
            <div className="inline-flex items-center gap-2 text-primary text-sm font-semibold tracking-widest uppercase mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary" />
              Our Purpose
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">
              Driven by <span className="text-primary">purpose</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-white rounded-3xl p-10 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Target className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To help people develop self-awareness, resilience, and
                  clarity, enabling them to make meaningful decisions and lead
                  more balanced lives. Through both online and in-person
                  counselling sessions, we aim to make psychological support
                  accessible, practical, and meaningful.
                </p>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm font-medium text-foreground/80 italic">
                    &ldquo;Our goal is simple: to help individuals understand
                    themselves better and move forward with confidence and
                    emotional well-being.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Vision */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15 }}
              viewport={{ once: true, margin: "-100px" }}
              className="group relative bg-white rounded-3xl p-10 border border-border/40 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 overflow-hidden"
            >
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />

              <div className="relative z-10">
                <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mb-6">
                  <Eye className="w-7 h-7 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To create a trusted counselling space where individuals feel
                  supported, understood, and empowered to grow. We aim to
                  promote mental well-being, self-awareness, and informed life
                  decisions, helping people lead more balanced and fulfilling
                  lives.
                </p>
                <div className="mt-6 pt-6 border-t border-border/30">
                  <p className="text-sm font-medium text-foreground/80 italic">
                    &ldquo;Sometimes, the first step toward change is simply
                    having a conversation.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CtaBanner />

      <Footer />
    </main>
  );
}
