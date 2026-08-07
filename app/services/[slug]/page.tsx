import { services, getServiceBySlug, getAllServiceSlugs } from '@/data/services'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import ServiceDetailContent from './content'

interface Props {
  params: Promise<{ slug: string }>
}

// Generate static paths for all services
export async function generateStaticParams() {
  return getAllServiceSlugs().map((slug) => ({ slug }))
}

// Generate SEO metadata for each service page
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    return {
      title: 'Service Not Found | Radianz Counselling',
    }
  }

  return {
    title: `${service.title} | Radianz Counselling Services`,
    description: service.shortDesc,
    openGraph: {
      title: `${service.title} | Radianz Counselling`,
      description: service.shortDesc,
      type: 'website',
      images: [{ url: service.image }],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${service.title} | Radianz Counselling`,
      description: service.shortDesc,
    },
  }
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params
  const service = getServiceBySlug(slug)

  if (!service) {
    notFound()
  }

  return <ServiceDetailContent slug={slug} />
}
