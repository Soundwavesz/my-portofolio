import { motion } from "framer-motion"

export default function Projects() {
  const projects = [
    {
      title: "Website latihan Interactive Portfolio",
      description: "Website portofolio interaktif yang saat ini saya bangun menggunakan React, Tailwind CSS, dan Vite sebagai bahan latian.",
      tech: ["React", "Tailwind CSS", "Vite"],
      link: "#",
    },
    {
      title: "Bahasa Jepang N4",
      description: "Saya mampu berbicara dalam bahasa jepang setidaknya untuk level sehari hari, dan saat ini saya tengah belajar untuk level N3",
      tech: ["JFT Basic-A2"],
      link: "#",
    },
    // {
    //   title: "E-Commerce Dashboard",
    //   description: "Dashboard analitik penjualan real-time dengan grafik interaktif dan manajemen stok.",
    //   tech: ["React", "Chart.js", "Tailwind CSS"],
    //   link: "#",
    // },
  ]

  return (
    <section id="projects" className="py-24 bg-slate-900 text-white px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Prengalaman Saya
          </h2>
          <p className="mt-4 text-slate-400">
            Ini adalah kegiatan atau Pengalaman yang saya lakukan guna meningkatkan skill Saya
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-6 hover:border-sky-500/50 transition-colors group"
            >
              <h3 className="text-xl font-bold text-slate-100 group-hover:text-sky-400 transition-colors">
                {project.title}
              </h3>
              <p className="mt-3 text-slate-400 text-sm leading-relaxed">
                {project.description}
              </p>

              <div className="mt-6 flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs font-medium bg-sky-500/10 text-sky-400 border border-sky-500/20 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-6 pt-4 border-t border-slate-700/50">
                <a
                  href={project.link}
                  className="inline-flex items-center text-sm font-semibold text-sky-400 hover:text-sky-300 gap-1"
                >
                  Lihat Detail <span>→</span>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}