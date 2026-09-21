export default function Hero() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center bg-slate-900 px-6 text-center text-white">
      <div className="max-w-3xl">
        <span className="rounded-full bg-sky-500/10 px-4 py-1.5 text-sm font-medium text-sky-400 ring-1 ring-sky-500/20">
          Welcome to My Space 🚀
        </span>
        <h1 className="mt-6 text-5xl font-extrabold tracking-tight sm:text-6xl">
          Membuat Pengalaman Web yang{" "}
          <span className="bg-gradient-to-r from-sky-400 to-emerald-400 bg-clip-text text-transparent">
            Interaktif & Modern
          </span>
        </h1>
        <p className="mt-6 text-lg leading-8 text-slate-400">
          Halo! Saya Web Developer. Selamat datang di portofolio interaktif saya yang dibangun menggunakan React, Tailwind CSS, dan berjalan di Linux Mint.
        </p>
        <div className="mt-8 flex items-center justify-center gap-x-4">
          <a
            href="#projects"
            className="rounded-lg bg-sky-500 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 hover:bg-sky-400 transition-all hover:scale-105 active:scale-95"
          >
            Lihat Proyek
          </a>
          <a
            href="#contact"
            className="rounded-lg bg-slate-800 px-5 py-3 text-sm font-semibold text-slate-200 hover:bg-slate-700 transition-all hover:scale-105 active:scale-95 border border-slate-700"
          >
            Hubungi Saya
          </a>
        </div>
      </div>
    </section>
  )
}