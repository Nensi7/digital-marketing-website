"use client"

import Link from "next/link"
import { Code, Search, Share2, CheckCircle, ArrowRight, Shield, TrendingUp, Users } from "lucide-react"
import { useState } from "react"
import Image from "next/image"

export default function ServicesPage() {
  const [activeTab, setActiveTab] = useState(0)

  const services = [
    {
      id: "web-dev",
      image: "/web-design.jpeg",
      icon: Code,
      title: "Website Development",
      subtitle: "Beautiful, Fast, Conversion-Focused",
      description:
        "We craft stunning, responsive websites that not only look amazing but convert visitors into customers. Every pixel is purposeful.",
      features: [
        "Responsive design for all devices",
        "Lightning-fast performance optimization",
        "SEO-friendly architecture",
        "E-commerce integration",
        "CMS & content management",
        "Advanced analytics setup",
      ],
      whyChoose: [
        "Custom-built solutions tailored to your business needs",
        "Fast-loading pages that keep visitors engaged",
        "Mobile-optimized for today's on-the-go users",
        "Built with conversions in mind from day one",
      ],
      benefits: [
        "Increased conversion rates",
        "Improved user experience",
        "Better search rankings",
        "Reduced bounce rates",
      ],
      color: "from-blue-600 to-cyan-500",
    },
    {
      id: "seo",
      image: "/SEO-optimization.jpeg",
      icon: Search,
      title: "Search Engine Optimization",
      subtitle: "Dominate Search Rankings",
      description:
        "Our data-driven SEO strategies get your website ranking higher, driving organic traffic and sustainable growth for years to come.",
      features: [
        "Comprehensive SEO audits",
        "Keyword research & strategy",
        "On-page optimization",
        "Technical SEO improvements",
        "Link building & backlink strategy",
        "Monthly performance reports",
      ],
      whyChoose: [
        "Strategic keyword targeting that brings real customers",
        "Proven methodology backed by industry best practices",
        "Transparent reporting to track your progress",
        "Long-term sustainable organic growth strategy",
      ],
      benefits: ["More organic traffic", "Higher search rankings", "Long-term visibility", "Cost-effective leads"],
      color: "from-purple-600 to-pink-500",
    },
    {
      id: "social",
      image: "/social-media.jpeg",
      icon: Share2,
      title: "Social Media Marketing",
      subtitle: "Build Communities, Drive Engagement",
      description:
        "Strategic social media campaigns that build loyal communities, increase brand awareness, and drive meaningful engagement across all platforms.",
      features: [
        "Social media strategy development",
        "Content calendar creation",
        "Engaging post creation",
        "Community management",
        "Paid social advertising",
        "Performance tracking & optimization",
      ],
      whyChoose: [
        "Authentic engagement that builds brand loyalty",
        "Data-driven campaigns that deliver real ROI",
        "Creative content that stands out in crowded feeds",
        "Community building that turns followers into advocates",
      ],
      benefits: [
        "Increased brand awareness",
        "Engaged audience growth",
        "Higher conversion rates",
        "Community loyalty",
      ],
      color: "from-orange-600 to-red-500",
    },
  ]

  return (
    <div className="overflow-hidden">
      {/* Header with Background Image */}
      <section
        className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-[#001B4D]/70" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-gray-300">
            Comprehensive digital marketing solutions designed to accelerate your growth and achieve measurable results
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16">
            {services.map((service, index) => {
              const Icon = service.icon
              const isEven = index % 2 === 0

              return (
                <div
                  key={service.id}
                  className={`grid lg:grid-cols-2 gap-12 items-center py-12 ${
                    index !== services.length - 1 ? "border-b border-gray-200" : ""
                  }`}
                >
                  {/* Content - Alternate sides */}
                  <div className={isEven ? "" : "lg:order-2"}>
                    <div className="space-y-6">
                      <div className="space-y-2">
                        <h2 className="text-4xl font-bold">{service.title}</h2>
                        <p
                          className={`text-lg font-semibold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                        >
                          {service.subtitle}
                        </p>
                      </div>

                      <p className="text-lg text-gray-600 leading-relaxed">{service.description}</p>

                      {/* Why Choose Us */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-[#001B4D]">Why Choose Us:</h4>
                        <div className="space-y-2">
                          {service.whyChoose.map((reason, i) => (
                            <div key={i} className="flex items-start gap-3">
                              <Shield className="text-[#001B4D] flex-shrink-0 mt-1" size={18} />
                              <span className="text-gray-700">{reason}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-bold text-lg mb-4 text-[#001B4D]">What's Included:</h4>
                        <div className="grid sm:grid-cols-2 gap-3">
                          {service.features.map((feature, i) => (
                            <div key={i} className="flex items-start gap-2">
                              <CheckCircle className="text-green-500 flex-shrink-0 mt-1" size={18} />
                              <span className="text-gray-700">{feature}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Get Started Button */}
                      <Link
                        href="/contact"
                        className="inline-flex items-center gap-2 px-6 py-3 bg-[#001B4D] text-white rounded-full font-semibold hover:shadow-lg hover:shadow-blue-900/30 transition group"
                      >
                        Get Started
                        <ArrowRight className="group-hover:translate-x-1 transition" size={18} />
                      </Link>
                    </div>
                  </div>

                  {/* Visual */}
                  <div className={isEven ? "lg:order-2" : ""}>
                    <div className="relative h-96 flex items-center justify-center">
                      <div
                        className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-3xl opacity-10 blur-3xl`}
                      />
                      <div className="relative w-80 h-80 rounded-3xl shadow-2xl overflow-hidden">
                        <Image
                          src={service.image || "/placeholder.svg"}
                          alt={service.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-[#001B4D]">How We Deliver Results</h2>
            <p className="text-xl text-gray-600">Our proven process ensures success at every step</p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: "01",
                title: "Discovery & Analysis",
                desc: "We dive deep to understand your business goals, target audience, competitive landscape, and current challenges to build a solid foundation.",
              },
              {
                step: "02",
                title: "Strategic Planning",
                desc: "We develop a customized roadmap with clear milestones and KPIs tailored specifically to your business objectives and growth targets.",
              },
              {
                step: "03",
                title: "Expert Execution",
                desc: "Our skilled team brings your strategy to life with precision, creativity, and attention to detail across every channel and touchpoint.",
              },
              {
                step: "04",
                title: "Continuous Optimization",
                desc: "We monitor performance in real-time, analyze results, and continuously optimize to maximize ROI and ensure long-term success.",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 items-start">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#001B4D] to-blue-600 flex items-center justify-center text-white text-2xl font-bold flex-shrink-0">
                  {item.step}
                </div>
                <div className="pt-2">
                  <h3 className="font-bold text-xl mb-2 text-[#001B4D]">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 grid md:grid-cols-3 gap-8 bg-[#001B4D]/5 p-8 rounded-2xl border border-[#001B4D]/10">
            <div className="text-center">
              <TrendingUp className="w-8 h-8 text-[#001B4D] mx-auto mb-3" />
              <h4 className="font-bold text-lg text-[#001B4D] mb-2">Data-Driven</h4>
              <p className="text-gray-600">Every decision backed by metrics and analytics</p>
            </div>
            <div className="text-center">
              <Users className="w-8 h-8 text-[#001B4D] mx-auto mb-3" />
              <h4 className="font-bold text-lg text-[#001B4D] mb-2">Client-Focused</h4>
              <p className="text-gray-600">Your success is our only measure of success</p>
            </div>
            <div className="text-center">
              <Shield className="w-8 h-8 text-[#001B4D] mx-auto mb-3" />
              <h4 className="font-bold text-lg text-[#001B4D] mb-2">Transparent</h4>
              <p className="text-gray-600">Clear communication and honest reporting</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-[#001B4D] to-blue-700 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's discuss your project and explore how we can help you achieve your growth goals.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-[#001B4D] rounded-full text-lg font-semibold hover:shadow-lg transition"
          >
            Schedule a Free Consultation
          </Link>
        </div>
      </section>
    </div>
  )
}
