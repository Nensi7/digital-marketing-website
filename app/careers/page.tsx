"use client"

import Link from "next/link"
import { ArrowRight, Briefcase, Users, Target } from "lucide-react"

export default function CareersPage() {
  return (
    <div className="overflow-hidden">
      {/* Header with Background Image */}
      <section
        className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/services-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Join Our Team</h1>
          <p className="text-xl text-gray-300">
            Help us transform how businesses grow in the digital world
          </p>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-8 text-center">Why Join The Growing Media Solutions?</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-600 to-blue-400 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Meaningful Work</h3>
              <p className="text-gray-600">
                Every project directly impacts real business growth. You'll see the tangible results of your work.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-600 to-purple-400 flex items-center justify-center mx-auto mb-4">
                <Users className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Close-Knit Team</h3>
              <p className="text-gray-600">
                Work directly with founders who are invested in your growth and success from day one.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-green-600 to-green-400 flex items-center justify-center mx-auto mb-4">
                <Target className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold mb-3">Growth Opportunities</h3>
              <p className="text-gray-600">
                In a startup, there's real opportunity to wear multiple hats and develop diverse skill sets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Openings */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Current Opportunities</h2>
          <div className="space-y-6">
            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Digital Marketing Specialist</h3>
                  <p className="text-gray-600">Full-time • Remote-friendly</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                We're looking for a passionate digital marketer who can help us grow our client base and deliver exceptional results across SEO, social media, and content strategy.
              </p>
              <Link
                href="/contact"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>

            <div className="bg-white p-8 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Web Developer</h3>
                  <p className="text-gray-600">Full-time • Remote-friendly</p>
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                Join our team to build stunning, high-performance websites that drive conversions. We're looking for a developer skilled in modern web technologies and UX principles.
              </p>
              <Link
                href="/contact"
                className="text-blue-600 font-semibold hover:text-blue-700 flex items-center gap-2"
              >
                Apply Now <ArrowRight size={16} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Culture Values */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Culture</h2>
          <div className="space-y-6">
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-8 rounded-2xl border-2 border-blue-200">
              <h3 className="text-xl font-bold mb-2 text-blue-900">Excellence & Integrity</h3>
              <p className="text-blue-800">
                We maintain the highest standards in our work and our relationships with clients and team members.
              </p>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-purple-100 p-8 rounded-2xl border-2 border-purple-200">
              <h3 className="text-xl font-bold mb-2 text-purple-900">Continuous Learning</h3>
              <p className="text-purple-800">
                Digital marketing evolves constantly. We invest in tools, training, and knowledge to stay ahead.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-green-100 p-8 rounded-2xl border-2 border-green-200">
              <h3 className="text-xl font-bold mb-2 text-green-900">Collaborative Spirit</h3>
              <p className="text-green-800">
                We succeed together. Teamwork, shared accountability, and open communication are core to our success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Build Something Great?</h2>
          <p className="text-lg text-blue-100 mb-8">
            Reach out to us with your application or inquiry. We'd love to hear from you!
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-full text-lg font-semibold hover:shadow-lg transition group"
          >
            Get in Touch
            <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
          </Link>
        </div>
      </section>
    </div>
  )
}
