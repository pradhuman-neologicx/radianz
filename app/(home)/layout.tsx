import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Radianz - Professional Online Counseling Services',
  description: 'Connect with experienced counselors for mental health support. Confidential, professional online counseling for individuals and couples. Book your free consultation today.',
  keywords: 'online counseling, therapy, mental health, counselor, counseling services',
  openGraph: {
    title: 'Radianz - Professional Online Counseling Services',
    description: 'Connect with experienced counselors for mental health support. Confidential, professional online counseling.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
