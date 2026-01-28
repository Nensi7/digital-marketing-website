"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle } from "lucide-react"

export default function OurApproachPage() {
  return (
    <div className="overflow-hidden">
      {/* Header with Background Image */}
      <section
        className="relative min-h-96 flex items-center justify-center text-white pt-24 pb-12 bg-cover bg-center"
        style={{ backgroundImage: "url('/portfolio-bg.jpg')" }}
      >
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500 rounded-full mix-blend-multiply filter blur-3xl" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Approach</h1>
          <p className="text-xl text-gray-300">
            A Structured Path to Sustainable Digital Growth
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-xl text-gray-700 leading-relaxed mb-8">
            At The Growing Media Solutions, we believe growth is not the result of isolated marketing activities — it is the outcome of a well-defined strategy, consistent execution, and continuous optimisation.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed">
            Our approach is designed to help brands move from digital presence to digital performance, ensuring that every effort contributes meaningfully to business outcomes.
          </p>
        </div>
      </section>

      {/* Five Steps */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {[
              {
                number: "1",
                title: "Understanding Before Execution",
                description: "Every successful strategy begins with clarity.",
                details: [
                  "Your business model and revenue drivers",
                  "Your target audience and buyer behaviour",
                  "Your market positioning and competitive landscape",
                  "Your short-term goals and long-term vision",
                ],
                note: "This phase ensures we are solving the right problems, not just executing tasks.",
              },
              {
                number: "2",
                title: "Strategy Built Around Business Objectives",
                description: "We don't believe in pre-packaged marketing plans.",
                details: [
                  "Purpose-driven strategies",
                  "Data-informed decisions",
                  "Scalable by design",
                  "Focused on measurable impact",
                ],
                note: "Based on insights gathered, we develop a custom digital growth strategy aligned with your specific objectives.",
              },
              {
                number: "3",
                title: "Integrated Digital Execution",
                description: "Execution is where strategy comes to life.",
                details: [
                  "Websites designed for experience, performance, and conversion",
                  "SEO implemented for long-term organic growth",
                  "Social media positioned to build trust, recall, and engagement",
                ],
                note: "This integrated approach creates consistency across platforms and strengthens your overall brand presence.",
              },
              {
                number: "4",
                title: "Performance Tracking & Continuous Optimisation",
                description: "Digital growth is never static.",
                details: [
                  "Identify what's working and scale it",
                  "Address gaps and inefficiencies early",
                  "Adapt to market and algorithm changes",
                  "Improve ROI with every iteration",
                ],
                note: "Our focus remains on progress, not perfection.",
              },
              {
                number: "5",
                title: "Partnership, Not Just Service Delivery",
                description: "We work as an extension of your team.",
                details: [
                  "Transparent communication",
                  "Realistic expectations",
                  "Shared accountability",
                  "Regular strategic reviews",
                ],
                note: "Because growth works best when both sides move in the same direction.",
              },
            ].map((step, i) => (
              <div key={i} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-blue-500 hover:shadow-lg transition">
                <div className="flex gap-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-xl bg-gradient-to-br from-blue-600 to-blue-400 text-white text-xl font-bold">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-2xl font-bold mb-2 text-gray-900">{step.title}</h3>
                    <p className="text-lg text-blue-600 font-semibold mb-4">{step.description}</p>
                    <ul className="space-y-2 mb-4">
                      {step.details.map((detail, j) => (
                        <li key={j} className="flex gap-3">
                          <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <p className="text-gray-600 italic">{step.note}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Let's Build Growth with Purpose</h2>
          <p className="text-lg text-blue-100 mb-8">
            If you're looking for a digital marketing partner who values structure, strategy, and sustainability, The Growing Media Solutions is built for you.
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
