import React, { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import 'aos/dist/aos.css'

gsap.registerPlugin(ScrollTrigger)

const features = [
  {
    icon: '📈',
    title: 'Live Exchange Monitoring',
    description:
      'Monitor currency rates in real-time across 20+ global currencies. Stay ahead in forex and international business decisions.',
  },
  {
    icon: '📊',
    title: 'Smart Trend Analysis',
    description:
      'Track historical patterns using interactive charts for better financial forecasting and investment planning.',
  },
  {
    icon: '🌐',
    title: 'Worldwide Currency Coverage',
    description:
      'Includes USD, EUR, GBP, INR, JPY, and more. We support multi-currency conversion across all major economies.',
  },
  {
    icon: '🔐',
    title: 'Accurate & Secure',
    description:
      'Backed by reliable APIs and updated every 30 seconds. Built for accuracy, transparency, and performance.',
  },
  {
    icon: '⚡',
    title: 'Lightning Fast UI',
    description:
      'Super-responsive and optimized for both desktop and mobile. Smooth transitions, zero loading frustration.',
  },
  {
    icon: '🤖',
    title: 'Real-Time AI-Powered Insights',
    description:
      'Harness advanced AI algorithms to predict market trends, provide personalized currency recommendations, and enhance your trading decisions dynamically.',
  },
  {
    icon: '📬',
    title: 'Stay Notified',
    description:
      'Get alerts or set triggers when specific exchange rates are hit. Your personal assistant for currency tracking.',
  },
]

const About = () => {
  const featureRefs = useRef([])

  useEffect(() => {
   
    featureRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay: index * 0.15,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      )
    })
  }, [])

  return (
    <div className="relative py-24 px-6 min-h-screen bg-gradient-to-br from-black via-gray-900 to-black ">
      <div className="relative z-10 max-w-7xl mx-auto text-center">
        <h2 className="text-[6vw]  font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 drop-shadow-md mb-10">
          Why Use Our Currency Converter?
        </h2>

        <p className="text-3xl text-gray-300 max-w-4xl mx-auto mb-20 font-mono tracking-wide">
          Empower your global transactions with real-time currency insights and analytics — right from your browser.
        </p>

        
        <div className="flex flex-col gap-12  md:px-0">
          {features.map((feature, index) => (
            <div
              key={index}
              ref={(elm) => (featureRefs.current[index] = elm)}
              className="w-full bg-gradient-to-br from-gray-800/90 to-black border-2 border-gray-700/50 rounded-2xl shadow-xl p-8 md:p-10 hover:scale-105 hover:border-cyan-500/60 transition-all duration-300 flex items-center gap-6 md:gap-10"
            >
              <div className="text-[4rem] md:text-[5rem] select-none drop-shadow-lg">{feature.icon}</div>
              <div className="text-left flex-1">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3">{feature.title}</h3>
                <p className="text-base sm:text-lg text-gray-300 leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default About
