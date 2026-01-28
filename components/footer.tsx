import Link from "next/link"
import { Mail, Linkedin, Twitter, Instagram, Facebook } from "lucide-react"
import Image from "next/image"

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo-tgms.jpeg"
                alt="The Growing Media Solutions Logo"
                width={160}
                height={60}
                className="h-auto"
              />
            </div>
            <p className="text-gray-400 text-sm">Where your growth is our success.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/services#web-dev" className="hover:text-blue-400">
                  Web Development
                </Link>
              </li>
              <li>
                <Link href="/services#seo" className="hover:text-blue-400">
                  SEO
                </Link>
              </li>
              <li>
                <Link href="/services#social" className="hover:text-blue-400">
                  Social Media
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-400">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/portfolio" className="hover:text-blue-400">
                  Our Approach
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-400">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-400">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Get in Touch</h3>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-blue-400" />
                <a href="mailto:hello@growingmedia.com" className="hover:text-blue-400">
                  hello@growingmedia.com
                </a>
              </li>
              <li className="flex gap-3 pt-2">
                <a href="#" className="hover:text-blue-400 transition">
                  <Facebook size={18} />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Twitter size={18} />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Instagram size={18} />
                </a>
                <a href="#" className="hover:text-blue-400 transition">
                  <Linkedin size={18} />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">© {currentYear} The Growing Media Solutions. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-400 mt-4 sm:mt-0">
            <Link href="#" className="hover:text-blue-400">
              Privacy
            </Link>
            <Link href="#" className="hover:text-blue-400">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
