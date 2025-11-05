import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section id="home" className="relative h-[90vh] min-h-[560px]">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/zhZFnwyOYLgqlLWk/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-slate-900/90" />
      </div>

      <div className="relative h-full max-w-7xl mx-auto px-4 flex items-center">
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold text-white leading-tight"
          >
            Distributor Aspal Cair Emulsi & Jasa Waterproofing Profesional
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="mt-4 text-lg md:text-xl text-slate-200 max-w-2xl"
          >
            Solusi anti bocor terpercaya untuk atap dak, kolam renang, dan jalan beton. Cepat, rapi, dan tahan lama.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.8 }}
            className="mt-8 flex flex-col sm:flex-row items-center gap-4"
          >
            <a
              href="https://wa.me/6281234567890?text=Halo%20saya%20ingin%20konsultasi%20waterproofing%20dan%20beli%20aspal%20emulsi"
              target="_blank"
              rel="noreferrer"
              className="group relative overflow-hidden inline-flex items-center justify-center px-6 py-3 rounded-md bg-amber-400 text-slate-900 font-semibold shadow-lg"
            >
              <span className="relative">Hubungi Kami</span>
              <span className="absolute inset-0 -translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-amber-300/60" />
            </a>
            <a
              href="#produk-layanan"
              className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-slate-600/60 text-slate-200 hover:bg-white/5 backdrop-blur transition"
            >
              Lihat Produk & Layanan
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
