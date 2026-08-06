import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Radianz - Our Story & Team | Online Counseling',
  description: 'Learn about Radianz counseling team. Discover our mission, values, and experienced therapists dedicated to your mental health.',
  keywords: 'about radianz, counseling team, therapists, mental health professionals, our mission, our values',
  openGraph: {
    title: 'About Radianz - Professional Counseling Services',
    description: 'Learn about our team of experienced counselors and our commitment to mental health care.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
