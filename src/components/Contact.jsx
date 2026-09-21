import { motion } from "framer-motion"
export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-slate-950 text-white px-6">
      <motion.div 
      initial={{opacity:0, y:20}}
      whileInView={{opacity:1, y:0}}
      viewport={{once: true}}
      transition={{duration:0.6}}
      className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
          Mari Bekerja Sama
        </h2>
        <p className="mt-4 text-slate-400 max-w-xl mx-auto">
          Punya ide proyek menarik atau sekadar ingin menyapa? Silakan kirim pesan melalui tombol di bawah atau hubungi saya via media sosial.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="mailto:zainaffandi311@gmail.com"//email
            className="w-full sm:w-auto rounded-xl bg-sky-500 px-8 py-4 text-sm font-semibold text-white shadow-lg shadow-sky-500/25 hover:bg-sky-400 transition-all hover:scale-105 active:scale-95"
          >
            Kirim Email
          </a>
          <a
            href="https://github.com/Soundwavesz"
            target="_blank"
            rel="noreferrer"
            className="w-full sm:w-auto rounded-xl bg-slate-800 border border-slate-700 px-8 py-4 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-all hover:scale-105 active:scale-95"
          >
            GitHub Profile
          </a>
        </div>

        {/* Footer sederhana */}
        <div className="mt-20 pt-8 border-t border-slate-800/80 text-sm text-slate-500">
          <p>© {new Date().getFullYear()} Portfolio. Built with React & Tailwind CSS on Linux Mint.</p>
        </div>
      </motion.div>
    </section>
  )
}