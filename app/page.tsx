"use client"

import { useState, useEffect } from "react"
import { FaMoon, FaSun, FaIdCard, FaPalette, FaMobile, FaShare, FaCheck, FaEnvelope, FaWhatsapp, FaQrcode, FaBriefcase, FaImages, FaLink } from "react-icons/fa"
import { HiSparkles, HiArrowRight } from "react-icons/hi"

const ENABLE_THEME_TOGGLE = process.env.NEXT_PUBLIC_ENABLE_THEME_TOGGLE === 'true'
const DEFAULT_THEME = process.env.NEXT_PUBLIC_DEFAULT_THEME || 'light'

const CONTACT_EMAIL = "hello@iprofile.com"
const CONTACT_WHATSAPP = "+1234567890"

const features = [
  {
    icon: FaIdCard,
    title: "Digital Business Cards",
    description: "Sleek, modern cards that replace outdated paper ones"
  },
  {
    icon: FaBriefcase,
    title: "Portfolios",
    description: "Showcase your best work in a beautiful, scrollable gallery"
  },
  {
    icon: FaQrcode,
    title: "QR Code Ready",
    description: "Instant access via QR — perfect for events and meetings"
  },
  {
    icon: FaPalette,
    title: "Fully Customizable",
    description: "Match your brand with custom colors, fonts, and layouts"
  },
  {
    icon: FaMobile,
    title: "Mobile Optimized",
    description: "Flawless experience on any device, anywhere"
  },
  {
    icon: FaShare,
    title: "One-Tap Sharing",
    description: "Share via link, QR, or save directly to contacts"
  }
]

const benefits = [
  "Digital business card + portfolio in one",
  "Shareable QR code for instant access",
  "Showcase projects, work, and achievements",
  "All your social links in one place",
  "Always up-to-date — edit anytime",
  "No app needed — works in any browser"
]

export default function LandingPage() {
  const [isDark, setIsDark] = useState(DEFAULT_THEME === 'dark')
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    
    if (!ENABLE_THEME_TOGGLE) {
      const isDefaultDark = DEFAULT_THEME === 'dark'
      setIsDark(isDefaultDark)
      if (isDefaultDark) {
        document.documentElement.classList.add("dark")
      } else {
        document.documentElement.classList.remove("dark")
      }
      return
    }

    const savedTheme = localStorage.getItem("theme")
    if (savedTheme === "dark" || (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
      setIsDark(true)
      document.documentElement.classList.add("dark")
    }
  }, [])

  const toggleDarkMode = () => {
    if (!ENABLE_THEME_TOGGLE) return
    
    setIsDark(!isDark)
    if (!isDark) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("theme", "light")
    }
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-linear-to-br from-background via-background to-secondary/20 text-foreground transition-colors duration-300 font-sans">
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-secondary/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <HiSparkles className="text-primary" size={28} />
            <span className="text-xl font-bold">iProfile</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/example"
              className="hidden sm:inline-flex px-4 py-2 text-sm font-medium text-muted-foreground hover:text-primary transition-colors"
            >
              See Example
            </a>
            {ENABLE_THEME_TOGGLE && (
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-secondary/80 hover:bg-secondary transition-all duration-300"
                aria-label="Toggle dark mode"
              >
                {isDark ? <FaSun size={16} /> : <FaMoon size={16} />}
              </button>
            )}
            <a
              href="#contact"
              className="px-4 py-2 bg-primary text-primary-foreground rounded-lg font-medium hover:opacity-90 transition-all duration-300"
            >
              Get Yours
            </a>
          </div>
        </div>
      </header>

      <main>
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-6">
              <HiSparkles size={16} />
              <span>Your Digital Identity, Simplified</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Digital Business Cards
              <span className="block text-primary">& Portfolios</span>
              Built for You
            </h1>
            
            <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Stand out with a professional online presence. Get a custom digital card 
              and portfolio that showcases your work, connects your socials, and comes with a 
              scannable QR code for effortless networking.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\+/g, '')}?text=Hi! I'd like to get my own digital business card and portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-primary-foreground rounded-xl font-semibold text-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp size={20} />
                Get Started
              </a>
              <a
                href="/example"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-secondary text-secondary-foreground rounded-xl font-semibold text-lg hover:bg-secondary/80 transition-all duration-300"
              >
                <FaImages size={18} />
                View Example
              </a>
            </div>
          </div>
        </section>

        <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">
                Everything You Need
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                More than just a business card — it's your complete digital identity
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="p-6 bg-background rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-4">
                    <feature.icon className="text-primary" size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-primary font-semibold text-lg mb-4 flex items-center gap-2">
                  <FaLink size={16} />
                  One Link. Endless Possibilities.
                </p>
                <h2 className="text-3xl sm:text-4xl font-bold mb-6">
                  Your card. Your portfolio. Your brand. <span className="text-primary">All in one place.</span>
                </h2>
                <p className="text-muted-foreground text-lg mb-8">
                  Stop juggling multiple links. Share one profile that has everything — 
                  your contact info, social links, work samples, and a QR code that works everywhere.
                </p>
                <ul className="space-y-4 mb-8">
                  {benefits.map((benefit, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <FaCheck className="text-primary" size={12} />
                      </div>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="/example"
                  className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
                >
                  See a live example
                  <HiArrowRight size={18} />
                </a>
              </div>
              
              <div className="relative">
                <div className="bg-secondary/95 backdrop-blur-xl rounded-2xl p-8 shadow-2xl">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center">
                      <span className="text-2xl font-bold text-primary">YN</span>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Your Name</h3>
                      <p className="text-muted-foreground">Designer • Developer • Creator</p>
                    </div>
                  </div>
                  <div className="space-y-3 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FaEnvelope className="text-primary" size={14} />
                      </div>
                      <span>you@example.com</span>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-primary/10 rounded-lg flex items-center justify-center">
                        <FaWhatsapp className="text-primary" size={14} />
                      </div>
                      <span>+1 (555) 123-4567</span>
                    </div>
                  </div>
                  <div className="flex gap-2 mb-6">
                    <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
                    <div className="w-10 h-10 bg-primary/10 rounded-lg"></div>
                  </div>
                  <div className="border-t border-secondary pt-4">
                    <p className="text-xs text-muted-foreground uppercase tracking-wider mb-3">Portfolio</p>
                    <div className="grid grid-cols-3 gap-2">
                      <div className="aspect-square bg-primary/10 rounded-lg"></div>
                      <div className="aspect-square bg-primary/10 rounded-lg"></div>
                      <div className="aspect-square bg-primary/10 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                <div className="absolute -z-10 top-4 left-4 right-4 bottom-4 bg-primary/20 rounded-2xl"></div>
                <a
                  href="/example"
                  className="absolute -bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium shadow-lg hover:scale-105 transition-all flex items-center gap-2"
                >
                  <HiSparkles size={14} />
                  View Live Example
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-secondary/30">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-3 mb-6">
              <FaQrcode className="text-primary" size={32} />
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              QR Code Included
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto">
              Every profile comes with a custom QR code. Print it on your physical cards, 
              display it at events, or add it to your email signature.
            </p>
          </div>
        </section>

        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Ready to Stand Out?
            </h2>
            <p className="text-lg opacity-90 mb-10 max-w-2xl mx-auto">
              Get your custom digital business card and portfolio. 
              Reach out and we'll build something amazing for you.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={`https://wa.me/${CONTACT_WHATSAPP.replace(/\+/g, '')}?text=Hi! I'd like to get my own digital business card and portfolio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-background text-foreground rounded-xl font-semibold text-lg hover:opacity-90 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <FaWhatsapp size={20} />
                WhatsApp Us
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}?subject=Digital Business Card & Portfolio Inquiry`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 bg-primary-foreground/20 text-primary-foreground rounded-xl font-semibold text-lg hover:bg-primary-foreground/30 transition-all duration-300"
              >
                <FaEnvelope size={18} />
                Send Email
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-secondary/50">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <HiSparkles className="text-primary" size={20} />
            <span className="font-semibold">iProfile</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="/example" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Example
            </a>
            <a href="#contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
              Contact
            </a>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} iProfile
          </p>
        </div>
      </footer>
    </div>
  )
}