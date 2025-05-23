'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaLinkedin, FaEnvelope, FaDownload, FaInstagram, FaArrowDown, FaHeart, FaCode, FaBars, FaTimes } from 'react-icons/fa'
import { FaWhatsapp } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import Image from 'next/image'
import Logo from './components/Logo'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const staggerContainer = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

const item = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 }
}

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const { scrollYProgress } = useScroll()
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1])

  const [headerRef, headerInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [aboutRef, aboutInView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  })

  const [particles, setParticles] = useState<{x:number, y:number, scale:number, delay:number, duration:number}[]>([])
  useEffect(() => {
    if (typeof window !== 'undefined') {
      setParticles(
        [...Array(20)].map(() => ({
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          delay: Math.random() * 2,
          duration: Math.random() * 2 + 2
        }))
      )
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="min-h-screen flex flex-col overflow-x-hidden">
      {/* Navigation Bar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-16">
            <Logo />

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className={`font-medium transition-colors ${
                    scrolled ? 'text-dark hover:text-primary' : 'text-white hover:text-primary'
                  }`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {isMenuOpen ? <FaTimes /> : <FaBars />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMenuOpen ? 1 : 0,
            height: isMenuOpen ? 'auto' : 0
          }}
          className="md:hidden bg-white"
        >
          <div className="container mx-auto px-4 py-4">
            {['About', 'Experience', 'Skills', 'Projects', 'Contact'].map((item) => (
              <motion.a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block py-2 text-dark hover:text-primary transition-colors"
                whileHover={{ x: 10 }}
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-light to-gray-100">
        <div className="decorative-circle top-20 left-10" />
        <div className="decorative-dot top-40 right-20" />
        <div className="decorative-circle bottom-40 left-20" />
        <div className="decorative-dot bottom-20 right-10" />
        
        <div className="container mx-auto px-4 sm:px-6 py-8 sm:py-12 max-w-5xl relative z-10 overflow-x-hidden">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-6 sm:mb-8 flex flex-col items-center"
            >
              <Image
                src="/Sanjaykumar.png.jpg"
                alt="Profile photo of SanjayKumar Devipujak"
                width={120}
                height={120}
                className="rounded-full border-4 border-primary shadow-lg object-cover w-[100px] h-[100px] sm:w-[120px] sm:h-[120px]"
                priority
              />
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-4 sm:mb-6 gradient-text break-words"
            >
              SanjayKumar Devipujak
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl text-gray-600 mb-6 sm:mb-8"
            >
              Full Stack Developer
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex justify-center space-x-4 sm:space-x-6 mb-8 sm:mb-12"
            >
              {[
                { icon: FaGithub, href: "https://github.com/SanjayKumarDevipujak", color: "#181717" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sanjaykumar-devipujak-7aa952365", color: "#0077B5" },
                { icon: FaInstagram, href: "https://instagram.com/sanjay__insane", color: "#E4405F" },
                { icon: FaEnvelope, href: "mailto:sanjaybhaidevipujak31@gmail.com?subject=Hello%20SanjayKumar%20-%20Let's%20Connect", color: "#EA4335" },
                { icon: FaWhatsapp, href: "https://wa.me/919106749266?text=Hi%2C%20dear", color: "#25D366" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} className="sm:w-8 sm:h-8" color={social.color} />
                </motion.a>
              ))}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4"
            >
              <motion.button
                className="btn-primary inline-flex items-center justify-center space-x-2 w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  // Create a temporary link element
                  const link = document.createElement('a');
                  link.href = '/resume.pdf'; // This will be your resume PDF file
                  link.download = 'SanjayKumar_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <FaDownload />
                <span>Download Resume</span>
              </motion.button>
              
              <motion.button
                className="btn-primary inline-flex items-center justify-center space-x-2 bg-secondary w-full sm:w-auto"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 20px rgba(30, 64, 175, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  window.open('https://wa.me/919106749266?text=Hi%2C%20I%20would%20like%20to%20connect%20with%20you', '_blank');
                }}
              >
                <FaWhatsapp className="mr-2" />
                <span>Contact Me</span>
              </motion.button>
            </motion.div>
          </motion.div>
        </div>

        {/* Add particle effects */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {particles.map((particle, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full"
              initial={{
                x: particle.x,
                y: particle.y,
                scale: particle.scale
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{
                duration: particle.duration,
                repeat: Infinity,
                delay: particle.delay
              }}
            />
          ))}
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-grow overflow-x-hidden">
        <div className="container mx-auto px-4 py-12 max-w-5xl relative overflow-x-hidden">
          {/* Header Section */}
          <motion.div 
            ref={headerRef}
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16 relative"
          >
            <div className="animated-line top-0" />
            <div className="animated-line bottom-0" />
            <div className="animated-line-vertical left-0" />
            <div className="animated-line-vertical right-0" />
            
            <motion.div
              style={{ scale, opacity }}
              className="relative"
            >
              <motion.h1 
                className="text-5xl font-heading font-bold mb-4 gradient-text"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={headerInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              >
                SanjayKumar Devipujak
              </motion.h1>
              <motion.p 
                className="text-2xl text-gray-600 mb-6"
                initial={{ opacity: 0 }}
                animate={headerInView ? { opacity: 1 } : { opacity: 0 }}
                transition={{ delay: 0.4 }}
              >
                Full Stack Developer
              </motion.p>
            </motion.div>

            <motion.div 
              className="flex justify-center space-x-6 mb-8"
              variants={staggerContainer}
              initial="initial"
              animate={headerInView ? "animate" : "initial"}
            >
              {[
                { icon: FaGithub, href: "https://github.com/SanjayKumarDevipujak", color: "#181717" },
                { icon: FaLinkedin, href: "https://www.linkedin.com/in/sanjaykumar-devipujak-7aa952365", color: "#0077B5" },
                { icon: FaInstagram, href: "https://instagram.com/sanjay__insane", color: "#E4405F" },
                { icon: FaEnvelope, href: "mailto:sanjaybhaidevipujak31@gmail.com?subject=Hello%20SanjayKumar%20-%20Let's%20Connect", color: "#EA4335" },
                { icon: FaWhatsapp, href: "https://wa.me/919106749266?text=Hi%2C%20dear", color: "#25D366" }
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  variants={item}
                  whileHover={{ scale: 1.2, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} color={social.color} />
                </motion.a>
              ))}
            </motion.div>

            <motion.button
              className="btn-primary inline-flex items-center space-x-2"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                window.location.href = 'mailto:sanjaybhaidevipujak31@gmail.com?subject=Hello%20SanjayKumar%20-%20Let\'s%20Connect';
              }}
            >
              <FaDownload />
              <span>Download Resume</span>
            </motion.button>

            <motion.button
              className="btn-primary inline-flex items-center space-x-2 bg-secondary ml-4"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 0 20px rgba(30, 64, 175, 0.3)"
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 10 }}
              onClick={() => {
                window.open('https://www.linkedin.com/in/sanjaykumar-devipujak-7aa952365', '_blank');
              }}
            >
              <FaLinkedin className="mr-2" />
              <span>Contact Me</span>
            </motion.button>
          </motion.div>

          {/* About Section */}
          <motion.div 
            id="about"
            ref={aboutRef}
            initial={{ opacity: 0, y: 20 }}
            animate={aboutInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8 }}
            className="mb-16 relative"
          >
            <div className="animated-line top-0" />
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, x: -20 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ delay: 0.2 }}
            >
              About Me
            </motion.h2>
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="animated-line top-0" />
              <p className="text-gray-700 leading-relaxed text-lg">
                Hi, I'm SanjayKumar Devipujak, a passionate Full Stack Developer with expertise in modern web technologies.
                Focused on creating efficient, scalable, and user-friendly applications.
                Always eager to learn and adapt to new technologies and challenges.
              </p>
            </motion.div>
          </motion.div>

          {/* Experience Section */}
          <motion.div 
            id="experience"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
            className="mb-16 relative"
          >
            <div className="animated-line top-0" />
            <h2 className="section-title">Experience</h2>
            <div className="space-y-8">
              <motion.div 
                className="card"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="animated-line top-0" />
                <div className="animated-line-vertical left-0" />
                <h3 className="text-2xl font-heading font-semibold text-dark mb-2">Senior Developer</h3>
                <p className="text-accent mb-4">Company Name • 2020 - Present</p>
                <ul className="list-disc list-inside text-gray-700 space-y-3">
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    Led development of key features resulting in 40% user growth
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.2 }}
                  >
                    Mentored junior developers and conducted code reviews
                  </motion.li>
                  <motion.li
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.3 }}
                  >
                    Implemented CI/CD pipelines reducing deployment time by 60%
                  </motion.li>
                </ul>
              </motion.div>
            </div>
          </motion.div>

          {/* Skills Section */}
          <motion.div 
            id="skills"
            {...fadeInUp}
            transition={{ delay: 0.6 }}
            className="mb-16 relative"
          >
            <div className="animated-line top-0" />
            <h2 className="section-title">Skills</h2>
            <motion.div 
              className="card"
              whileHover={{ 
                scale: 1.02,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
            >
              <div className="animated-line top-0" />
              <div className="animated-line-vertical right-0" />
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {['React', 'Node.js', 'TypeScript', 'Python', 'AWS', 'Docker'].map((skill, index) => (
                  <motion.div
                    key={skill}
                    className="skill-tag text-center"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 * index }}
                    whileHover={{ 
                      scale: 1.05,
                      boxShadow: "0 5px 15px rgba(37, 99, 235, 0.2)"
                    }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Projects Section */}
          <motion.div 
            id="projects"
            {...fadeInUp}
            transition={{ delay: 0.8 }}
            className="mb-16 relative"
          >
            <div className="animated-line top-0" />
            <h2 className="section-title">Projects</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                className="card"
                whileHover={{ 
                  y: -5,
                  boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="animated-line top-0" />
                <div className="animated-line-vertical left-0" />
                <h3 className="text-2xl font-heading font-semibold text-dark mb-2">Project Name</h3>
                <p className="text-gray-600 mb-4">A brief description of the project and your role in it.</p>
                <div className="flex flex-wrap gap-2">
                  <motion.span 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    React
                  </motion.span>
                  <motion.span 
                    className="px-3 py-1 bg-gray-100 rounded-full text-sm font-medium"
                    whileHover={{ scale: 1.1 }}
                  >
                    Node.js
                  </motion.span>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div 
            {...fadeInUp}
            transition={{ delay: 1 }}
            className="relative"
          >
            <div className="animated-line top-0" />
            <h2 className="section-title">Education</h2>
            <motion.div 
              className="card"
              whileHover={{ 
                y: -5,
                boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)"
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="animated-line top-0" />
              <div className="animated-line-vertical right-0" />
              <h3 className="text-2xl font-heading font-semibold text-dark">Bachelor of Science in Computer Science</h3>
              <p className="text-accent mt-2">University Name • 2016 - 2020</p>
            </motion.div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white py-12 relative overflow-hidden">
        <div className="animated-line top-0" />
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-heading font-bold mb-4">SanjayKumar Devipujak</h3>
              <p className="text-gray-400">
                A passionate Full Stack Developer creating amazing web experiences.
              </p>
            </div>
            
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-primary transition-colors">About</a></li>
                <li><a href="#experience" className="text-gray-400 hover:text-primary transition-colors">Experience</a></li>
                <li><a href="#skills" className="text-gray-400 hover:text-primary transition-colors">Skills</a></li>
                <li><a href="#projects" className="text-gray-400 hover:text-primary transition-colors">Projects</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-heading font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                {[
                  { icon: FaGithub, href: "https://github.com/SanjayKumarDevipujak", color: "#181717" },
                  { icon: FaLinkedin, href: "https://www.linkedin.com/in/sanjaykumar-devipujak-7aa952365", color: "#0077B5" },
                  { icon: FaInstagram, href: "https://instagram.com/sanjay__insane", color: "#E4405F" },
                  { icon: FaEnvelope, href: "mailto:sanjaybhaidevipujak31@gmail.com?subject=Hello%20SanjayKumar%20-%20Let's%20Connect", color: "#EA4335" },
                  { icon: FaWhatsapp, href: "https://wa.me/919106749266?text=Hi%2C%20dear", color: "#25D366" }
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <social.icon size={24} color={social.color} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p className="flex items-center justify-center space-x-2">
              <span>Made with</span>
              <FaHeart className="text-red-500 animate-pulse" />
              <span>by SanjayKumar Devipujak</span>
            </p>
            <p className="mt-2">© {new Date().getFullYear()} All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        className="fixed bottom-8 right-8 bg-primary text-white p-3 rounded-full shadow-lg"
        initial={{ opacity: 0, scale: 0 }}
        animate={{ 
          opacity: scrolled ? 1 : 0,
          scale: scrolled ? 1 : 0
        }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FaArrowDown className="transform rotate-180" />
      </motion.button>
    </div>
  )
} 