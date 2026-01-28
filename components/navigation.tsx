"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"
import { useRouter } from "next/navigation"

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const router = useRouter()

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About Us" },
    { href: "/services", label: "Services" },
    { href: "/portfolio", label: "Our Approach" },
    { href: "/careers", label: "Careers" },
    { href: "/contact", label: "Contact Us" },
  ]

  const handleNavClick = (href: string) => {
    setIsOpen(false)
    // Trigger fade out effect
    document.documentElement.style.opacity = "0.7"
    setTimeout(() => {
      router.push(href)
      document.documentElement.style.opacity = "1"
    }, 150)
  }

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="relative w-auto h-12">
              <Image
                src="/logo-tgms.jpeg"
                alt="The Growing Media Solutions Logo"
                width={160}
                height={48}
                className="h-12 w-auto object-contain"
                priority
              />
            </div>
            <span className="font-bold text-lg hidden sm:inline text-gray-900">The Growing Media Solutions</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-600 underline-animate cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </div>



          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-gray-100 rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2">
            {navItems.map((item) => (
              <button
                key={item.href}
                onClick={() => handleNavClick(item.href)}
                className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded cursor-pointer bg-transparent border-none"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
