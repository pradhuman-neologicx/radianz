import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contact Radianz - Book Your Counseling Session Today',
  description: 'Get in touch with Radianz counseling team. Schedule your free consultation or ask any questions about our mental health services.',
  keywords: 'contact radianz, book counseling, schedule therapy, mental health help, counseling contact',
  openGraph: {
    title: 'Contact Radianz Counseling Services',
    description: 'Reach out to us to schedule your counseling session or consultation.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
