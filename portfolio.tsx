"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import {
  ChevronDown,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  ExternalLink,
  Code,
  Database,
  Globe,
  Award,
  GraduationCap,
  User,
} from "lucide-react"

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState("home")
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: "smooth" })
    setActiveSection(sectionId)
  }

  const skills = [
    { name: "React.js", level: 90, icon: <Code className="w-5 h-5" /> },
    { name: "JavaScript", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "Python", level: 80, icon: <Code className="w-5 h-5" /> },
    { name: "C/C++", level: 85, icon: <Code className="w-5 h-5" /> },
    { name: "HTML/CSS", level: 90, icon: <Globe className="w-5 h-5" /> },
    { name: "MySQL", level: 75, icon: <Database className="w-5 h-5" /> },
  ]

  const projects = [
    {
      title: "MCE Faculty Docs Management System",
      description:
        "Developed a responsive faculty document management website using React, Tailwind CSS, JavaScript, and Vite for dynamic UI and structured subject-wise content handling",
      tech: ["React", "Tailwind CSS", "JavaScript", "Vite"],
      year: "2025",
      color: "from-blue-500 to-purple-600",
    },
    {
      title: "IoT-Enabled Visitor Counter System",
      description: "Arduino-Based Real-Time Visitor Tracking And Management System using Wokwi Simulator",
      tech: ["Arduino", "IoT", "Wokwi", "C++"],
      year: "2024",
      color: "from-green-500 to-teal-600",
    },
    {
      title: "Automated Dual-Action Floor Sanitization System",
      description:
        "Provides efficient and thorough floor care while ensuring hygiene and cleanliness with minimal effort",
      tech: ["Automation", "Hardware", "Design"],
      year: "2022",
      color: "from-orange-500 to-red-600",
    },
  ]

  return (
    <div className="min-h-screen bg-gray-900 text-white overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-gray-900/95 backdrop-blur-sm z-50 border-b border-gray-800 transition-all duration-300">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
              Nayana B R
            </div>
            <div className="hidden md:flex space-x-8">
              {["home", "about", "projects", "skills", "contact"].map((item, index) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize hover:text-blue-400 transition-all duration-300 transform hover:scale-110 ${
                    activeSection === item ? "text-blue-400 scale-110" : "text-gray-300"
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div
          className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
        <div
          className={`text-center z-10 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full overflow-hidden border-4 border-blue-400 shadow-2xl mb-6 hover:scale-110 transition-all duration-500 bg-gray-800 animate-float relative">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 opacity-20 animate-spin-slow"></div>
              <Image
                src="/nayana-photo.jpg"
                alt="Profile Photo"
                width={192}
                height={192}
                className="w-full h-full object-cover object-center relative z-10"
              />
            </div>
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient-x">
            Nayana B R
          </h1>
          <p className="text-2xl md:text-3xl text-gray-300 mb-8 animate-fade-in-up animation-delay-500">
            Computer Science Engineer
          </p>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-12 animate-fade-in-up animation-delay-1000">
            Passionate about creating innovative technology solutions and pushing the boundaries of what's possible
          </p>
          <div className="flex gap-4 justify-center animate-fade-in-up animation-delay-1500">
            <button
              onClick={() => scrollToSection("projects")}
              className="bg-gradient-to-r from-blue-500 to-purple-600 px-8 py-3 rounded-full hover:scale-110 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold animate-bounce-gentle"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="border border-blue-400 px-8 py-3 rounded-full hover:bg-blue-400 hover:text-gray-900 hover:scale-110 transition-all duration-300 font-semibold animate-bounce-gentle animation-delay-200"
            >
              Get In Touch
            </button>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-gray-400" />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-in-left">
              <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                I'm a passionate Computer Science Engineering student at Malnad College Of Engineering, Hassan, with a
                strong foundation in software development and a keen interest in emerging technologies.
              </p>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                My journey in tech is driven by curiosity and the desire to create meaningful solutions that make a
                positive impact. I enjoy working on diverse projects from IoT systems to web applications.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-500">
                  <GraduationCap className="w-8 h-8 text-blue-400 mb-2 animate-bounce-gentle" />
                  <h3 className="font-semibold mb-1">Education</h3>
                  <p className="text-sm text-gray-400">CGPA: 8.90</p>
                </div>
                <div className="bg-gray-800 p-4 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-700">
                  <Award className="w-8 h-8 text-purple-400 mb-2 animate-bounce-gentle animation-delay-200" />
                  <h3 className="font-semibold mb-1">Certifications</h3>
                  <p className="text-sm text-gray-400">NPTEL Elite</p>
                </div>
              </div>
            </div>
            <div className="space-y-6 animate-slide-in-right">
              <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 p-6 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300">
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <User className="w-6 h-6 mr-2 text-blue-400 animate-pulse" />
                  Personal Skills
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {[
                    "Communication",
                    "Teamwork",
                    "Problem Solving",
                    "Leadership",
                    "Adaptability",
                    "Time Management",
                  ].map((skill, index) => (
                    <div
                      key={skill}
                      className="bg-gray-800 px-3 py-2 rounded text-sm hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-fade-in-up"
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-gray-900 rounded-xl overflow-hidden hover:transform hover:scale-105 hover:rotate-1 transition-all duration-500 border border-gray-700 hover:border-gray-600 hover:shadow-2xl animate-fade-in-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color} animate-gradient-x`}></div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded animate-pulse">
                      {project.year}
                    </span>
                  </div>
                  <p className="text-gray-300 mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={tech}
                        className="text-xs bg-blue-500/20 text-blue-300 px-2 py-1 rounded-full hover:bg-blue-500/30 transition-all duration-300 animate-fade-in-up"
                        style={{ animationDelay: `${techIndex * 50}ms` }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <button className="flex items-center text-blue-400 hover:text-blue-300 transition-colors duration-300 group-hover:translate-x-2">
                    <ExternalLink className="w-4 h-4 mr-2 animate-bounce-gentle" />
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
            Technical Skills
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 hover:scale-105 transition-all duration-300 animate-slide-in-left"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center mb-4">
                  <div className="text-blue-400 mr-3 animate-bounce-gentle">{skill.icon}</div>
                  <h3 className="text-lg font-semibold">{skill.name}</h3>
                  <span className="ml-auto text-blue-400 animate-pulse">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-600 rounded-full h-2 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-2000 ease-out animate-fill-bar"
                    style={{
                      width: `${skill.level}%`,
                      animationDelay: `${index * 200}ms`,
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-800/50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent animate-fade-in-up">
            Get In Touch
          </h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-slide-in-left">
              <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                I'm always open to discussing new opportunities, collaborations, or just having a chat about technology
                and innovation.
              </p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: "6364258268" },
                  { icon: Mail, text: "peritebr@gmail.com" },
                  { icon: MapPin, text: "Hassan, Karnataka" },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center hover:translate-x-2 transition-transform duration-300 animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <item.icon className="w-5 h-5 text-blue-400 mr-4 animate-bounce-gentle" />
                    <span>{item.text}</span>
                  </div>
                ))}
                <div className="flex items-center hover:translate-x-2 transition-transform duration-300 animate-fade-in-up animation-delay-300">
                  <Linkedin className="w-5 h-5 text-blue-400 mr-4 animate-bounce-gentle" />
                  <a
                    href="https://www.linkedin.com/in/perite-br-976b8027"
                    className="hover:text-blue-400 transition-colors duration-300"
                  >
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
            <div className="bg-gray-900 p-8 rounded-lg border border-gray-700 hover:border-blue-400 transition-all duration-300 animate-slide-in-right">
              <form className="space-y-6">
                <div className="animate-fade-in-up">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="animate-fade-in-up animation-delay-200">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300"
                  />
                </div>
                <div className="animate-fade-in-up animation-delay-400">
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    className="w-full bg-gray-800 border border-gray-600 rounded-lg px-4 py-3 focus:outline-none focus:border-blue-400 focus:scale-105 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-3 rounded-lg hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 font-semibold animate-fade-in-up animation-delay-600"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-gray-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400 animate-fade-in-up">© 2025 Nayana B R. Built with React & Tailwind CSS</p>
        </div>
      </footer>

      <style jsx>{`
        @keyframes blob {
          0% { transform: translate(0px, 0px) scale(1); }
          33% { transform: translate(30px, -50px) scale(1.1); }
          66% { transform: translate(-20px, 20px) scale(0.9); }
          100% { transform: translate(0px, 0px) scale(1); }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-size: 200% 200%; background-position: left center; }
          50% { background-size: 200% 200%; background-position: right center; }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes slide-in-left {
          from { opacity: 0; transform: translateX(-50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes slide-in-right {
          from { opacity: 0; transform: translateX(50px); }
          to { opacity: 1; transform: translateX(0); }
        }
        
        @keyframes bounce-gentle {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-5px); }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        @keyframes fill-bar {
          from { width: 0%; }
        }
        
        .animate-blob { animation: blob 7s infinite; }
        .animate-float { animation: float 6s ease-in-out infinite; }
        .animate-gradient-x { animation: gradient-x 15s ease infinite; }
        .animate-fade-in-up { animation: fade-in-up 0.6s ease-out; }
        .animate-slide-in-left { animation: slide-in-left 0.6s ease-out; }
        .animate-slide-in-right { animation: slide-in-right 0.6s ease-out; }
        .animate-bounce-gentle { animation: bounce-gentle 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 20s linear infinite; }
        .animate-fill-bar { animation: fill-bar 2s ease-out; }
        
        .animation-delay-200 { animation-delay: 200ms; }
        .animation-delay-300 { animation-delay: 300ms; }
        .animation-delay-400 { animation-delay: 400ms; }
        .animation-delay-500 { animation-delay: 500ms; }
        .animation-delay-600 { animation-delay: 600ms; }
        .animation-delay-700 { animation-delay: 700ms; }
        .animation-delay-1000 { animation-delay: 1000ms; }
        .animation-delay-1500 { animation-delay: 1500ms; }
        .animation-delay-2000 { animation-delay: 2s; }
        .animation-delay-4000 { animation-delay: 4s; }
      `}</style>
    </div>
  )
}
