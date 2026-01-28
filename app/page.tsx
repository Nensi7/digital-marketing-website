"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { useEffect, useState } from "react"
import Image from "next/image"

export default function Home() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const services = [
    {
      image: "/web-design.jpeg",
      title: "Web Development",
      description: "Fast, responsive, and conversion-optimized websites that elevate your brand.",
    },
    {
      image: "/SEO-optimization.jpeg",
      title: "SEO Optimization",
      description: "Strategic SEO to rank higher, drive organic traffic, and dominate search results.",
    },
    {
      image: "/social-media.jpeg",
      title: "Social Media Marketing",
      description: "Engaging content and strategies that build communities and drive engagement.",
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Hero Section - Dynamic Background */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/hero-light-bg.jpg')" }}
        />

        {/* Animated gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-50/30 via-white/20 to-orange-50/30 gradient-animate"
          style={{
            backgroundImage: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(13, 21, 174, 0.1) 0%, transparent 50%)`,
          }}
        />

        {/* Animated shapes */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float" />
        <div className="absolute top-40 right-10 w-72 h-72 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float animation-delay-2000" />
        <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 float animation-delay-4000" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold">
                  🚀 Launching Digital Marketing
                </div>
                <h1 className="text-5xl md:text-6xl font-bold leading-tight">
                  Your Growth, <span className="gradient-text">Our Mission</span>
                </h1>
                <p className="text-xl text-black leading-relaxed font-bold">
                  Welcome to The Growing Media Solutions. We're a passionate team dedicated to delivering exceptional
                  digital marketing results. We're just getting started, but our expertise is proven and our commitment
                  is unwavering.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/40 transition-all group"
                >
                  Let's Start
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
                </Link>
                <Link
                  href="/portfolio"
                  className="inline-flex items-center justify-center px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-full text-lg font-semibold hover:bg-blue-50 transition"
                >
                  Our Approach
                </Link>
              </div>

              <div className="grid grid-cols-1 gap-4 pt-8 border-t border-gray-200">
                <div>
                  <div className="text-3xl font-bold text-blue-600">100%</div>
                  <p className="text-gray-600 text-sm">Commitment to Growth</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Preview Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        {/* Services Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to fuel your business growth
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition">
              <div className="relative h-48 w-full">
                <Image src={service.image || "/placeholder.svg"} alt={service.title} fill className="object-cover" />
              </div>
              <div className="p-6 space-y-4">
                <h2 className="text-xl font-bold">{service.title}</h2>
                <p className="text-gray-600">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Explore Services Button */}
        <div className="flex justify-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-full text-lg font-semibold hover:shadow-xl hover:shadow-blue-500/40 transition-all group"
          >
            Explore Services
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition" size={20} />
          </Link>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-24 bg-gradient-to-r from-blue-600 via-blue-500 to-blue-600 text-white overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-pulse animation-delay-2000" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-5xl md:text-6xl font-bold leading-tight animate-fade-in">
                Ready to Boost Your Business?
              </h2>
              <p className="text-xl md:text-2xl leading-relaxed max-w-3xl mx-auto">
                Let's collaborate to achieve your digital marketing goals.
              </p>
            </div>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-blue-600 rounded-full text-lg font-bold hover:bg-gray-50 hover:shadow-2xl transition-all group transform hover:scale-105"
            >
              Contact Us
              <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={22} />
            </Link>
          </div>
        </div>

        {/* Decorative animated lines */}
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-white to-transparent opacity-20" />
      </section>
    </div>
  )
}
