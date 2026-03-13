'use client'
import { motion } from "framer-motion";
import { Briefcase, Calendar, Sparkles, Users, Globe, Code2, PenTool, Megaphone, Heart } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import SectionHeading from "@/components/SectionHeading";
import Footer from "@/components/Footer";
import GlowIcon from "@/components/GlowIcon";
import { useState, useEffect } from 'react'
import {
  Palette,
  Smartphone,
  Layout,
  Search,
  Layers,
  CheckCircle,
  Rocket,
  Lightbulb,
} from 'lucide-react'

export default function ServicesAndProcess() {
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    setLoaded(true)
  }, [])

  // -------------------- Services --------------------
  const services = [
    {
      title: 'UI/UX Design',
      desc: 'Creating intuitive and engaging user interfaces that enhance user experience and drive conversions.',
      features: [
        'User Research',
        'Wireframing',
        'Prototyping',
        'Usability Testing',
        'Design Systems',
      ],
      icon: Palette,
    },
    {
      title: 'Mobile App Design',
      desc: 'Designing beautiful and functional mobile applications for iOS and Android platforms.',
      features: [
        'iOS Design',
        'Android Design',
        'App Prototyping',
        'Icon Design',
        'UI/UX for Mobile',
      ],
      icon: Smartphone,
    },
    {
      title: 'Web Design',
      desc: 'Crafting responsive and modern websites that deliver exceptional user experiences.',
      features: [
        'Landing Pages',
        'E-commerce Sites',
        'Corporate Sites',
        'Responsive Design',
        'High-Fidelity UI',
      ],
      icon: Layout,
    },
    {
      title: 'Product Design',
      desc: 'End-to-end product design services from concept to launch, ensuring market success.',
      features: [
        'Product Strategy',
        'Wireframing & Prototyping',
        'Interactive Mockups',
        'Usability Testing',
        'Design Handoff',
      ],
      icon: Lightbulb,
    },
  ]

  // -------------------- Design Process --------------------
  const websiteSteps = [
    { icon: Search, title: 'Research & Discovery', desc: 'Understanding user behavior, business goals and competitive landscape.' },
    { icon: Layout, title: 'Wireframing & Structure', desc: 'Low-fidelity layouts focusing on usability and content hierarchy.' },
    { icon: Palette, title: 'UI Design', desc: 'High-fidelity interface crafted with brand consistency and modern visuals.' },
    { icon: Layers, title: 'Interactive Prototype', desc: 'Clickable prototypes to simulate real user journeys.' },
    { icon: CheckCircle, title: 'Usability Testing', desc: 'Testing and refining based on real feedback.' },
    { icon: Rocket, title: 'Launch & Handoff', desc: 'Developer-ready design system with pixel-perfect delivery.' },
  ]

  const mobileSteps = [
    { icon: Smartphone, title: 'App Strategy', desc: 'Define app goals, audience and feature roadmap.' },
    { icon: Layers, title: 'User Flow Mapping', desc: 'Design intuitive navigation and interaction patterns.' },
    { icon: Palette, title: 'Mobile UI Design', desc: 'Clean, touch-friendly and responsive mobile interface.' },
    { icon: Layers, title: 'Micro Interactions', desc: 'Smooth transitions and engaging feedback animations.' },
    { icon: CheckCircle, title: 'Testing & Optimization', desc: 'Performance validation and UX refinement.' },
    { icon: Rocket, title: 'App Deployment', desc: 'Final design handoff and store-ready support.' },
  ]

  // -------------------- Timeline Component --------------------
  const Timeline = ({ steps }: any) => (
    <div className="relative pl-10 sm:pl-6">
      <div className="absolute left-4 sm:left-2 top-0 w-1 h-full bg-lime-600/30 rounded-full"></div>
      <div className="space-y-16">
        {steps.map((step: any, idx: number) => {
          const Icon = step.icon
          return (
            <div
              key={idx}
              className={`relative group ${loaded ? 'animate-fadeUp' : 'opacity-0'}`}
              style={{ animationDelay: `${idx * 0.15}s` }}
            >
              {/* Icon Circle */}
              <div className="absolute -left-[38px] sm:-left-[30px] top-0 w-10 h-10 rounded-full bg-gradient-to-tr from-[#00d9a3] via-[#00c853] to-[#76ff03] flex items-center justify-center shadow-lg shadow-green-500/40 group-hover:scale-110 transition">
                <Icon size={18} className="text-black" />
              </div>
              <div className="bg-white/5 backdrop-blur-xl border border-green-500/10 rounded-2xl p-6 hover:border-green-400/40 transition-all duration-500">
                <h4 className="text-lg sm:text-base font-semibold bg-clip-text text-transparent" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)' }}>
                  {idx + 1}. {step.title}
                </h4>
                <p className="text-gray-400 text-sm sm:text-xs leading-relaxed">{step.desc}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )

  return (
    <PageTransition>
    <section className="min-h-screen pt-20 sm:pt-24 pb-16 px-4 sm:px-6">
                <SectionHeading title="Services Offered" subtitle="Comprehensive solutions spanning UI/UX, Mobile & Web Design, and Product Design to ensure impactful digital experiences." />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* ---------------- Services Section ---------------- */}
        {/* <div className="text-center mb-12 sm:mb-8">
          <h2 className="text-4xl sm:text-3xl md:text-5xl font-bold bg-clip-text text-transparent mb-3" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)' }}>
            Services Offered
          </h2>
          <div className="w-16 h-1 mx-auto my-3 sm:my-2" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)' }}></div>
          <p className="text-gray-300 max-w-2xl mx-auto text-sm sm:text-xs sm:px-4">
            Comprehensive solutions spanning UI/UX, Mobile & Web Design, and Product Design to ensure impactful digital experiences.
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-4 mb-24">
          {services.map((service, idx) => {
            const Icon = service.icon
            return (
              <div
                key={idx}
                className="group relative bg-slate-800/40 backdrop-blur-xl rounded-2xl p-6 sm:p-4 border border-slate-700/50 hover:border-green-500/50 transition-all duration-300 h-full flex flex-col"
              >
                <div className="w-12 h-12 sm:w-10 sm:h-10 rounded-lg flex items-center justify-center mb-4 sm:mb-3" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)' }}>
                  <Icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl sm:text-lg font-bold mb-2 sm:mb-1 text-white group-hover:text-green-300 transition-colors">{service.title}</h3>
                <p className="text-gray-300 mb-4 sm:mb-3 flex-grow text-sm sm:text-xs">{service.desc}</p>
                <div className="space-y-1 sm:space-y-1">
                  <p className="text-xs sm:text-[10px] font-bold text-green-400 uppercase tracking-wider">Key Features:</p>
                  <div className="space-y-1 sm:space-y-0.5">
                    {service.features.map((feature, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2">
                        <span className="w-1 h-1 sm:w-0.5 sm:h-0.5 bg-green-400 rounded-full"></span>
                        <span className="text-sm sm:text-xs text-slate-300">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-4 sm:mt-3">
                <a
                  href="/contact"  // links to your Get in Touch / Contact page
                  className="w-full inline-flex justify-center items-center px-4 py-2 bg-gradient-to-tr from-[#00d9a3] via-[#00c853] to-[#76ff03] text-black font-bold rounded-lg shadow-lg transition-transform duration-300 transform hover:scale-105 hover:shadow-xl border border-green-400/30"
                >
               Hire Me
               </a>
</div>
              </div>
            )
          })}
        </div>

        {/* ---------------- Design Process Section ---------------- */}
        <div className="text-center mb-16 sm:mb-12">
          <h2 className="text-3xl sm:text-2xl md:text-4xl font-black mb-4 sm:mb-3" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
            My Professional Design Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm sm:text-xs px-2 sm:px-4">
            A structured and research-driven workflow for website and mobile app design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 sm:gap-8">
          <div>
            <h3 className="text-2xl sm:text-xl font-bold mb-6 sm:mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Website Development Flow
            </h3>
            <Timeline steps={websiteSteps} />
          </div>

          <div>
            <h3 className="text-2xl sm:text-xl font-bold mb-6 sm:mb-4" style={{ backgroundImage: 'linear-gradient(135deg, #00d9a3 0%, #00c853 50%, #76ff03 100%)', WebkitBackgroundClip: 'text', color: 'transparent' }}>
              Mobile App Design Flow
            </h3>
            <Timeline steps={mobileSteps} />
          </div>
        </div>
      </div>
    </section>
    <Footer />
    </PageTransition>
  )
}
