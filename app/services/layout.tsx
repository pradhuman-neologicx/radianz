import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Our Counseling Services | Radianz Online Therapy',
  description: 'Explore our comprehensive counseling services including individual therapy, couples counseling, crisis support, and wellness programs.',
  keywords: 'counseling services, therapy, individual counseling, couples therapy, mental health services, crisis support',
  openGraph: {
    title: 'Professional Counseling Services | Radianz',
    description: 'Comprehensive mental health services tailored to your needs with experienced therapists.',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
