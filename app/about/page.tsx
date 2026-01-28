"use client"

import Link from "next/link"
import { ArrowRight, Zap, Lock, Users } from "lucide-react"

export default function AboutUsPage() {
  return (
    <div className="overflow-hidden">
      {/* Header with Background Image */}
      <section
        className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/about-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-1/4 w-96 h-96 bg-green-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute top-40 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl text-gray-300">
            We don't believe in one-size-fits-all marketing.
          </p>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            <div>
              <p className="text-xl text-gray-700 leading-relaxed mb-6">
                Every business has a unique story, market, and growth objective, and our strategies are built around that reality. With hands-on experience across multiple industries, we partner with businesses to create digital ecosystems that work cohesively, websites that convert, SEO that sustains growth, and social media that builds trust and recall.
              </p>
            </div>

            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <p className="text-lg text-blue-900 leading-relaxed font-semibold">
                Our team brings together strategic thinking, creative execution, and performance-driven marketing to help businesses establish authority and accelerate growth in competitive markets.
              </p>
            </div>

            <div className="text-center mt-8">
              <p className="text-2xl font-bold text-gray-900 mb-4">
                We don't just execute, we understand, strategize, and scale.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Approach</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mb-4">
                <Zap className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Strategic Innovation</h3>
              <p className="text-gray-600">
                We combine deep industry knowledge with cutting-edge digital strategies to create meaningful growth for your business.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mb-4">
                <Lock className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Integrated Execution</h3>
              <p className="text-gray-600">
                All digital touchpoints work together seamlessly to strengthen your overall brand presence and drive results.
              </p>
            </div>

            <div className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mb-4">
                <Users className="text-white" size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3 text-gray-900">Partnership Model</h3>
              <p className="text-gray-600">
                We work as an extension of your team with transparent communication and shared accountability for success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-12">Why The Growing Media Solutions?</h2>
          <div className="space-y-4">
            {[
              "We understand your business model, target audience, and competitive landscape before recommending solutions.",
              "Our strategies are purpose-driven, data-informed, scalable by design, and focused on measurable impact.",
              "We continuously monitor performance and optimize to improve outcomes and ROI with every iteration.",
              "Transparent communication, realistic expectations, and shared accountability form the foundation of our partnerships.",
              "We don't just report numbers—we explain what they mean and how they impact your business.",
            ].map((reason, i) => (
              <div
                key={i}
                className="flex gap-4 p-4 bg-gradient-to-r from-blue-50 to-blue-100 border border-blue-200 rounded-lg hover:border-blue-500 transition"
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-6 w-6 rounded-full bg-gradient-to-r from-blue-600 to-blue-400 text-white text-sm font-bold flex-shrink-0">
                    ✓
                  </div>
                </div>
                <p className="text-gray-700">{reason}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready for Sustainable Digital Growth?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Let's partner to build a digital strategy that works cohesively across all channels.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-lg transition group"
          >
            Get Started Today
            <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
