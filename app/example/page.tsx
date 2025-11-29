"use client"

import { useState, useEffect } from "react"
import { FaInstagram, FaTwitter, FaSnapchat, FaTelegram, FaEnvelope, FaMapMarkerAlt, FaCrown, FaFire, FaGem, FaMusic, FaSkull, FaBolt } from "react-icons/fa"
import { HiDownload, HiSparkles } from "react-icons/hi"
import { BsStars } from "react-icons/bs"
import { GiCrown, GiDiamondHard } from "react-icons/gi"

const socialLinks = [
  { icon: FaInstagram, url: "https://instagram.com", label: "@king.ziya", color: "hover:text-pink-500" },
  { icon: FaTwitter, url: "https://twitter.com", label: "@zaborhood", color: "hover:text-blue-400" },
  { icon: FaSnapchat, url: "https://snapchat.com", label: "ziya.premium", color: "hover:text-yellow-400" },
  { icon: FaTelegram, url: "https://telegram.org", label: "VIP Only", color: "hover:text-blue-500" },
]

const services = [
  { title: "Private Saathi 💋", icon: FaGem },
  { title: "Gang Bang Mehfil 🔥", icon: BsStars },
  { title: "VIP Honeymoon ✈️", icon: FaCrown },
  { title: "Chato Meta 🍾", icon: FaFire },
]

export default function ExampleProfile() {
  const [mounted, setMounted] = useState(false)
  const [showAgeVerification, setShowAgeVerification] = useState(true)

  useEffect(() => {
    setMounted(true)
    document.documentElement.classList.add("dark")
  }, [])

  const handleEnter = () => {
    setShowAgeVerification(false)
  }

  const handleExit = () => {
    window.location.href = "https://google.com"
  }

  if (!mounted) return null

  return (
    <div className="min-h-screen bg-black text-white font-sans relative overflow-hidden">
      {showAgeVerification && (
        <div className="fixed inset-0 z-[100] bg-black flex items-center justify-center p-4">
          <div className="max-w-2xl w-full text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-8">
              Ziya<span className="bg-amber-500 text-black px-2 rounded ml-1">hub</span>
            </h1>
            
            <h2 className="text-2xl sm:text-3xl font-bold mb-6">
              Yeh Ek Adult Website Hai 🔞
            </h2>
            
            <button className="px-6 py-2 border-2 border-white text-white text-sm font-medium mb-6 hover:bg-white/10 transition-colors">
              Chetavani Padho
            </button>
            
            <p className="text-gray-300 text-sm sm:text-base mb-4 max-w-xl mx-auto leading-relaxed">
              Is website mein sirf 18+ content hai. Andar aane ka matlab tu confirm kar raha hai ki tu 18 saal ya usse bada hai. Bacche dur raho! 🚫
            </p>
            
            <a href="#" className="text-amber-500 hover:underline text-sm block mb-8">
              Police Walo Ke Liye Notice
            </a>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <button
                onClick={handleEnter}
                className="px-12 py-4 border-2 border-amber-500 text-white font-bold text-lg hover:bg-amber-500/20 transition-all"
              >
                18+ Hoon - Andar Aa 🔥
              </button>
              <button
                onClick={handleExit}
                className="px-12 py-4 border-2 border-gray-600 text-white font-bold text-lg hover:bg-gray-600/20 transition-all"
              >
                Bacchi Hoon - Nikal 👶
              </button>
            </div>
            
            <p className="text-gray-400 text-sm mb-2">
              <a href="#" className="text-amber-500 hover:underline">Parents wale page</a> pe block karna seekho.
            </p>
            <a href="#" className="text-amber-500 hover:underline text-sm">
              Niyam aur Shartein
            </a>
            
            <div className="mt-8 text-gray-500 text-xs">
              © kingziya.com, 2025 • सब कुछ असली है भाई
            </div>
          </div>
        </div>
      )}

      <div className="fixed bottom-4 right-4 z-50 flex items-center gap-2 px-4 py-2 bg-zinc-900/90 backdrop-blur-sm border border-zinc-800 rounded-full">
        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
        <FaMusic className="text-purple-400" size={12} />
        <span className="text-xs text-gray-400">Mujhe Peene Do 🍷</span>
      </div>

      {/* Edgy Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Floating Hindi Text */}
        <div className="absolute top-10 left-10 text-9xl font-black text-amber-500/5 rotate-12 select-none">👑</div>
        <div className="absolute top-1/4 right-5 text-7xl font-black text-purple-500/10 -rotate-6 select-none">बादशाह</div>
        <div className="absolute top-1/3 left-1/4 text-6xl font-black text-pink-500/8 rotate-45 select-none">🔥</div>
        <div className="absolute bottom-1/3 right-1/4 text-8xl font-black text-amber-500/8 -rotate-12 select-none">KING</div>
        <div className="absolute bottom-1/4 left-10 text-7xl font-black text-red-500/10 rotate-12 select-none">23 inch</div>
        <div className="absolute top-1/2 right-10 text-6xl font-black text-purple-400/10 rotate-6 select-none">💎</div>
        <div className="absolute bottom-10 right-1/3 text-5xl font-black text-amber-500/10 -rotate-12 select-none">VIP</div>
        <div className="absolute top-20 right-1/4 text-6xl font-black text-pink-500/8 rotate-[-20deg] select-none">शेर</div>
        <div className="absolute bottom-1/2 left-5 text-5xl font-black text-red-500/10 rotate-[30deg] select-none">🐍</div>
        <div className="absolute top-2/3 left-1/3 text-7xl font-black text-amber-400/8 rotate-[-15deg] select-none">खतरनाक</div>
        <div className="absolute bottom-20 left-1/4 text-6xl font-black text-purple-500/10 rotate-[25deg] select-none">💀</div>
        <div className="absolute top-40 left-1/2 text-5xl font-black text-pink-400/10 rotate-[-8deg] select-none">CHEETE</div>
        
        {/* Animated gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-amber-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        <div className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-pink-600/8 rounded-full blur-3xl animate-pulse delay-700"></div>
        
        {/* Diagonal stripes */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: `repeating-linear-gradient(
            45deg,
            transparent,
            transparent 10px,
            #f59e0b 10px,
            #f59e0b 11px
          )`
        }}></div>
        
        {/* Scattered emojis and symbols */}
        <div className="absolute top-[15%] left-[60%] text-4xl opacity-10 rotate-12">⚡</div>
        <div className="absolute top-[45%] left-[85%] text-3xl opacity-10 -rotate-12">🔞</div>
        <div className="absolute top-[70%] left-[15%] text-4xl opacity-10 rotate-[20deg]">💰</div>
        <div className="absolute top-[25%] left-[5%] text-3xl opacity-10 -rotate-[15deg]">🖤</div>
        <div className="absolute top-[85%] left-[70%] text-4xl opacity-10 rotate-[35deg]">🌙</div>
        <div className="absolute top-[55%] left-[45%] text-3xl opacity-5 -rotate-[25deg]">⛓️</div>
        <div className="absolute top-[10%] left-[75%] text-4xl opacity-10 rotate-[-10deg]">💋</div>
      </div>

      <div className="relative z-10">
        <div className="h-48 sm:h-64 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-amber-900 via-purple-900 to-black"></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxwYXRoIGQ9Ik0wIDVMNSAwWk02IDRMNCA2Wk0tMSAxTDEgLTFaIiBzdHJva2U9IiMyMjIiIHN0cm9rZS13aWR0aD0iMSI+PC9wYXRoPgo8L3N2Zz4=')] opacity-30"></div>
          
          {/* Banner text overlay */}
          <div className="absolute inset-0 flex items-center justify-center opacity-10">
            <span className="text-6xl font-black text-white tracking-widest">P*SSY FAD</span>
          </div>
          
          <div className="absolute bottom-4 left-4 flex items-center gap-2">
            <FaCrown className="text-amber-500" size={24} />
            <span className="text-xs uppercase tracking-widest text-amber-400 font-bold">Sirf Ameer Log</span>
          </div>
          <div className="absolute top-4 left-4 px-3 py-1 bg-gradient-to-r from-amber-600 to-purple-600 text-white text-xs font-black uppercase tracking-wider rounded flex items-center gap-1">
            <FaSkull size={10} />
            18+ VIP ONLY
          </div>
          <a
            href="#"
            className="absolute top-4 right-4 px-4 py-2 bg-amber-500 text-black text-xs font-black uppercase tracking-wider rounded-lg flex items-center gap-2 hover:bg-amber-400 transition-all"
          >
            <HiDownload size={14} />
            Number Save Kar
          </a>
        </div>

        <div className="max-w-lg mx-auto px-4 -mt-16 relative">
          <div className="flex flex-col items-center">
            <div className="relative">
              <div className="w-32 h-32 rounded-full border-4 border-amber-500 overflow-hidden bg-gradient-to-br from-amber-600 to-purple-600 flex items-center justify-center shadow-2xl shadow-amber-500/50 relative">
                <span className="text-4xl font-black">Z</span>
                {/* Ring glow effect */}
                <div className="absolute inset-0 rounded-full border-2 border-amber-400/50 animate-ping"></div>
              </div>
              <div className="absolute -bottom-1 -right-1 w-8 h-8 bg-amber-500 rounded-full flex items-center justify-center">
                <FaCrown size={14} />
              </div>
              <div className="absolute -top-1 -left-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center animate-bounce">
                <FaBolt size={10} />
              </div>
            </div>
            
            <div className="mt-4 text-center">
              <h1 className="text-3xl sm:text-4xl font-black uppercase tracking-tight">
                KING <span className="text-amber-500">ZIYA</span>
              </h1>
              <p className="text-gray-400 mt-1 font-medium">
                शेहर का बादशाह • Sigma Male Escort 🔥
              </p>
              <p className="text-sm text-gray-500 mt-2 max-w-xs mx-auto italic">
                "Sirf ameer log, gareeb dur raho 💎 Tere baap ka paisa lagega yahan. Premium experiences only. 👑"
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2 mt-4">
              <span className="px-3 py-1 bg-amber-500/20 text-amber-400 text-xs rounded-full font-medium flex items-center gap-1">
                <FaFire size={10} /> Lamba & Khoobsurat
              </span>
              <span className="px-3 py-1 bg-purple-500/20 text-purple-400 text-xs rounded-full font-medium">हिंदी & English Expert</span>
              <span className="px-3 py-1 bg-pink-500/20 text-pink-400 text-xs rounded-full font-medium flex items-center gap-1">
                🤫 Raaz Rakhta Hai
              </span>
              <span className="px-3 py-1 bg-red-500/20 text-red-400 text-xs rounded-full font-medium">💀 Khatarnak</span>
            </div>
            <div className="w-full mt-8 space-y-3">
              <div className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl hover:border-amber-500/50 transition-all group">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-amber-600/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                    <FaEnvelope className="text-amber-500" size={18} />
                  </div>
                  <div>
                    <p className="text-xs text-gray-500 uppercase tracking-wider">Sirf Serious Inquiries 💼</p>
                    <p className="text-sm font-medium">king.ziya@proton.me</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full mt-8">
              <div className="flex items-center gap-2 mb-4">
                <HiSparkles className="text-amber-500" size={20} />
                <h2 className="text-lg font-black uppercase tracking-wider">सेवाएं - Services</h2>
                <FaFire className="text-red-500 animate-pulse" size={16} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {services.map((service, index) => (
                  <div
                    key={index}
                    className="p-4 bg-zinc-900/80 border border-zinc-800 rounded-lg hover:border-amber-500/50 hover:bg-zinc-800/50 transition-all cursor-pointer group text-center"
                  >
                    <service.icon className="mx-auto mb-2 text-amber-500 group-hover:scale-110 transition-transform" size={24} />
                    <span className="font-medium text-xs group-hover:text-amber-400 transition-colors">{service.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full mt-8 p-4 bg-gradient-to-r from-amber-900/30 via-red-900/20 to-purple-900/30 border border-amber-500/30 rounded-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 text-4xl opacity-20">💸</div>
              <p className="text-center text-sm text-gray-400">
                <span className="text-amber-400 font-bold">₹₹₹₹₹</span> • Mehngai Hai • <span className="text-red-400 font-bold">कंजूस दूर रहो</span>
              </p>
              <p className="text-center text-xs text-gray-500 mt-2">
                Paise nahi toh time waste mat karo bdk 💰 Saste log allowed nahi hai 🚫
              </p>
            </div>

            <div className="w-full mt-8">
              <a
                href="#"
                className="w-full py-4 bg-gradient-to-r from-amber-600 to-red-600 rounded-xl font-bold uppercase tracking-wider text-center hover:from-amber-500 hover:to-red-500 transition-all text-white flex items-center justify-center gap-2 shadow-lg shadow-amber-500/30"
              >
                <FaCrown size={16} />
                Private Session Book Kar 👑🔥
              </a>
            </div>

            <div className="my-8 text-center">
              <p className="text-xs text-gray-600 uppercase tracking-widest flex items-center justify-center gap-2">
                <FaSkull size={12} />
                18+ Only • Verification Zaroori Hai
                <FaSkull size={12} />
              </p>
              <p className="text-xs text-gray-700 mt-2">
                राज़ रहेगा पक्का। Tu mera naam lega, maar khayega 🤫💀
              </p>
            </div>

            <div className="flex gap-3 mb-6">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 bg-zinc-900 border border-zinc-800 rounded-lg flex items-center justify-center text-gray-400 ${social.color} transition-all duration-300 hover:scale-110 hover:border-amber-500`}
                >
                  <social.icon size={18} />
                </a>
              ))}
            </div>

            <div className="mb-20 py-4 border-t border-zinc-800 w-full text-center">
              <a href="/" className="text-xs text-gray-500 hover:text-amber-400 transition-colors">
                Apna bhi premium card banwa at <span className="font-bold">iProfile</span> 🔥
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}