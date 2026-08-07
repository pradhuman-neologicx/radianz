'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Menu, X, Calendar } from 'lucide-react'
import { useState, useEffect } from 'react'
import { usePathname } from 'next/navigation'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/contact', label: 'Contact' },
  ]

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Check initial position
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-out ${scrolled
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-sm'
          : 'bg-transparent border-b border-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 sm:h-18 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image 
              src="/logo.png" 
              alt="Radianz Logo" 
              width={180} 
              height={60} 
              className={`h-14 sm:h-16 transition-all duration-500 ${!scrolled ? 'brightness-0 invert' : ''}`} 
              style={{ width: 'auto' }}
              priority 
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group relative py-1 text-sm font-medium transition-colors duration-500 ${scrolled
                    ? 'text-foreground hover:text-primary'
                    : 'text-primary-foreground/90 hover:text-primary'
                  }`}
              >
                {item.label}
                <span
                  className={`absolute left-0 bottom-0 h-0.5 transition-all duration-300 ease-out ${
                    pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                  } bg-primary`}
                />
              </Link>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="/book"
              className={`px-4 py-2 flex items-center justify-center gap-2 rounded-lg text-sm font-medium transition-all duration-500 ${scrolled
                  ? cn(buttonVariants({ variant: "default" }))
                  : 'bg-primary/20 text-primary-foreground backdrop-blur-sm border border-primary/30 hover:bg-primary/30'
                }`}
            >
              <Calendar className="w-4 h-4" />
              Book a Session
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X
                size={24}
                className={`transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
              />
            ) : (
              <Menu
                size={24}
                className={`transition-colors duration-500 ${scrolled ? 'text-foreground' : 'text-primary-foreground'
                  }`}
              />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 space-y-2 bg-background/95 backdrop-blur-md -mx-4 px-4 sm:-mx-6 sm:px-6 rounded-b-xl border-t border-border">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm font-medium text-foreground hover:bg-muted rounded-lg transition-colors"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/book"
              className={cn(buttonVariants({ variant: "default" }), "mt-2 w-full flex items-center justify-center gap-2 mx-auto max-w-[calc(100%-2rem)]")}
              onClick={() => setMobileMenuOpen(false)}
            >
              <Calendar className="w-4 h-4" />
              Book a Session
            </Link>
          </nav>
        )}
      </div>
    </header>
  )
}
