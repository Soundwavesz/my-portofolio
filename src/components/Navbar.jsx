import { useState } from "react"

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo / Brand Name */}
        <a href="#" className="text-xl font-bold bg-linear-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Portfolio.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
          <a href="#about" className="hover:text-sky-400 transition-colors">Tentang</a>
          <a href="#projects" className="hover:text-sky-400 transition-colors">Proyek</a>
          <a href="#contact" className="hover:text-sky-400 transition-colors">Kontak</a>
          <a 
            href="#contact" 
            className="rounded-lg bg-sky-500/10 border border-sky-500/30 px-4 py-2 text-sky-400 hover:bg-sky-500 hover:text-white transition-all"
          >
            Hire Me
          </a>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-300 hover:text-white focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 px-6 py-4 flex flex-col gap-4 text-slate-300">
          <a href="#about" onClick={() => setIsOpen(false)} className="hover:text-sky-400">Tentang</a>
          <a href="#projects" onClick={() => setIsOpen(false)} className="hover:text-sky-400">Proyek</a>
          <a href="#contact" onClick={() => setIsOpen(false)} className="hover:text-sky-400">Kontak</a>
        </div>
      )}
    </nav>
  )
}