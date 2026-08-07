import { Heart, Users, Brain, Shield, Compass, BookOpen } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export interface Service {
  slug: string
  icon: LucideIcon
  title: string
  shortDesc: string
  description: string
  image: string
  benefits: string[]
  features: string[]
  whoIsItFor: string[]
  approach: string[]
}

export const services: Service[] = [
  {
    slug: 'career-academic-counselling',
    icon: Compass,
    title: 'Career & Academic Counselling',
    shortDesc: 'Guidance for students and young professionals facing career decisions and academic stress.',
    description:
      'Choosing a career path or managing academic pressure can feel overwhelming. Our career and academic counselling helps you explore your strengths, interests, and values to make informed decisions about your education and professional future. Whether you are deciding between career options, preparing for entrance exams, or feeling stuck in your current academic path, we provide structured guidance to help you move forward with clarity.',
    image: '/service-career.png',
    benefits: [
      'Clarity on career direction and goals',
      'Better academic performance through stress management',
      'Confidence in decision-making',
      'Structured career planning and action steps',
    ],
    features: ['One-on-one sessions', 'Career aptitude assessment', 'Academic stress management', 'Goal-setting framework'],
    whoIsItFor: [
      'Students unsure about their career path',
      'Young professionals considering a career change',
      'Individuals preparing for competitive exams',
      'Graduates facing job market uncertainty',
    ],
    approach: [
      'Understanding your interests, aptitudes, and values',
      'Exploring career options aligned with your personality',
      'Building a structured career action plan',
      'Developing decision-making and time management skills',
    ],
  },
  {
    slug: 'personal-emotional-counselling',
    icon: Heart,
    title: 'Personal & Emotional Counselling',
    shortDesc: 'For individuals dealing with personal, emotional, or relationship concerns.',
    description:
      'Life can bring challenges that feel difficult to manage alone — emotional overwhelm, self-doubt, anxiety, relationship struggles, or simply feeling lost. Our personal and emotional counselling offers a safe, non-judgmental space to explore your thoughts and emotions. We help you build self-awareness, emotional resilience, and healthier coping strategies so you can navigate life with greater balance and peace.',
    image: '/service-personal.png',
    benefits: [
      'Improved emotional regulation and self-awareness',
      'Healthier coping mechanisms for stress and anxiety',
      'Stronger personal relationships',
      'Greater clarity and inner peace',
    ],
    features: ['Confidential sessions', 'Empathetic approach', 'Evidence-based techniques', 'Flexible scheduling'],
    whoIsItFor: [
      'Individuals experiencing anxiety or emotional stress',
      'People dealing with self-doubt or low confidence',
      'Those going through relationship difficulties',
      'Anyone seeking deeper self-understanding',
    ],
    approach: [
      'Creating a safe and supportive environment',
      'Exploring thought patterns and emotional triggers',
      'Building emotional intelligence and resilience',
      'Developing practical strategies for daily challenges',
    ],
  },
  {
    slug: 'professional-growth-counselling',
    icon: Brain,
    title: 'Professional Growth & Work-Life Balance',
    shortDesc: 'For professionals seeking clarity, growth, and work-life balance.',
    description:
      'The modern professional world can be demanding — workplace stress, burnout, career stagnation, and difficulty maintaining work-life balance are common challenges. Our professional growth counselling helps you identify what is holding you back, develop leadership and communication skills, and create a sustainable work-life balance. Whether you are seeking a promotion, dealing with workplace conflicts, or simply feeling stuck, we guide you toward professional and personal fulfillment.',
    image: '/service-professional.png',
    benefits: [
      'Enhanced leadership and communication skills',
      'Better work-life balance and reduced burnout',
      'Strategic career growth planning',
      'Improved workplace relationships',
    ],
    features: ['Career strategy sessions', 'Burnout assessment', 'Leadership coaching', 'Work-life planning'],
    whoIsItFor: [
      'Professionals facing burnout or workplace stress',
      'Individuals seeking career advancement',
      'People struggling with work-life balance',
      'Leaders looking to improve management skills',
    ],
    approach: [
      'Assessing current career satisfaction and goals',
      'Identifying burnout triggers and energy drains',
      'Building assertiveness and boundary-setting skills',
      'Creating a roadmap for professional growth',
    ],
  },
  {
    slug: 'life-transitions-support',
    icon: Shield,
    title: 'Life Transitions & Personal Growth',
    shortDesc: 'For young adults navigating life decisions and personal challenges.',
    description:
      'Major life transitions — such as starting college, moving cities, entering the workforce, ending a relationship, or becoming a parent — can bring uncertainty, fear, and emotional overwhelm. Our life transitions counselling helps you process these changes, adapt to new circumstances, and discover personal growth opportunities within every challenge. We support you in building resilience and moving through transitions with confidence.',
    image: '/service-transitions.png',
    benefits: [
      'Smoother adaptation to life changes',
      'Emotional resilience during uncertain times',
      'Clarity on personal values and priorities',
      'Confidence in facing the unknown',
    ],
    features: ['Transition-focused sessions', 'Resilience building', 'Values exploration', 'Adaptive coping tools'],
    whoIsItFor: [
      'Young adults transitioning to adulthood',
      'People going through major life changes',
      'Individuals processing grief or loss',
      'Anyone seeking personal reinvention',
    ],
    approach: [
      'Acknowledging and processing the emotional impact of change',
      'Identifying strengths and resources you already have',
      'Setting realistic goals for the next chapter',
      'Building adaptive coping strategies',
    ],
  },
  {
    slug: 'relationship-family-counselling',
    icon: Users,
    title: 'Relationship & Family Counselling',
    shortDesc: 'Professional guidance for strengthening relationships and improving communication.',
    description:
      'Healthy relationships are essential for emotional well-being, yet they can be one of the most challenging aspects of life. Whether you are dealing with communication breakdowns, trust issues, family conflicts, or simply want to strengthen your connection with a loved one, our relationship counselling provides a safe space to explore these dynamics. We help you develop healthier communication patterns, resolve conflicts constructively, and build deeper, more fulfilling connections.',
    image: '/service-relationship.png',
    benefits: [
      'Improved communication and listening skills',
      'Healthier conflict resolution strategies',
      'Stronger emotional bonds and trust',
      'Better understanding of relationship dynamics',
    ],
    features: ['Couples & family sessions', 'Communication exercises', 'Conflict mediation', 'Trust-building strategies'],
    whoIsItFor: [
      'Couples experiencing communication challenges',
      'Families dealing with conflict or misunderstanding',
      'Individuals processing a breakup or divorce',
      'People wanting to build healthier relationships',
    ],
    approach: [
      'Understanding each person\'s perspective and needs',
      'Teaching active listening and empathetic communication',
      'Identifying unhealthy patterns and triggers',
      'Building trust and emotional safety in relationships',
    ],
  },
  {
    slug: 'stress-anxiety-management',
    icon: BookOpen,
    title: 'Stress & Anxiety Management',
    shortDesc: 'Practical tools and strategies for managing everyday stress and anxiety.',
    description:
      'Stress and anxiety have become an unavoidable part of modern life, but they don\'t have to control your well-being. Our stress and anxiety management counselling equips you with practical, evidence-based tools to understand your stress triggers, regulate your emotions, and develop sustainable coping habits. Whether you are dealing with everyday stress, performance anxiety, or overwhelming worry, we help you build a calmer, more centered approach to life.',
    image: '/service-stress.png',
    benefits: [
      'Reduced stress and anxiety levels',
      'Better emotional regulation',
      'Improved sleep and physical well-being',
      'Sustainable coping strategies',
    ],
    features: ['Mindfulness techniques', 'Cognitive reframing', 'Relaxation exercises', 'Habit building'],
    whoIsItFor: [
      'Individuals experiencing chronic stress',
      'People dealing with performance or social anxiety',
      'Students under academic pressure',
      'Professionals facing workplace overwhelm',
    ],
    approach: [
      'Identifying personal stress triggers and patterns',
      'Teaching mindfulness and grounding techniques',
      'Cognitive reframing to shift anxious thought patterns',
      'Building a daily self-care and wellness routine',
    ],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}

export function getAllServiceSlugs(): string[] {
  return services.map((s) => s.slug)
}
