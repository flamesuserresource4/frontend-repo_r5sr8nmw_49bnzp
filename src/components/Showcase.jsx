import { motion, useAnimation, useInView } from 'framer-motion';
import { useEffect, useRef } from 'react';
import { Shield, Droplet, Wrench, Star } from 'lucide-react';

const features = [
  {
    icon: Shield,
    title: 'Tahan Air',
    desc: 'Perlindungan maksimal terhadap rembesan dan kebocoran di berbagai permukaan.'
  },
  {
    icon: Droplet,
    title: 'Daya Rekat Kuat',
    desc: 'Melekat kuat pada beton, dak, genteng, dan permukaan lain dengan persiapan minimal.'
  },
  {
    icon: Wrench,
    title: 'Aplikasi Praktis',
    desc: 'Proses aplikasi cepat, bersih, dan efisien untuk berbagai kebutuhan proyek.'
  },
  {
    icon: Star,
    title: 'Kualitas Teruji',
    desc: 'Standar industri dengan hasil akhir rapi, tahan lama, dan ekonomis.'
  }
];

const products = [
  { size: '1 kg', slug: 'aspal-cair-emulsi-1kg' },
  { size: '5 kg', slug: 'aspal-cair-emulsi-5kg' },
  { size: '10 kg', slug: 'aspal-cair-emulsi-10kg' },
  { size: '20 kg', slug: 'aspal-cair-emulsi-20kg' },
  { size: '200 kg', slug: 'aspal-cair-emulsi-200kg' }
];

function Reveal({ children }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-50px' });
  const controls = useAnimation();

  useEffect(() => {
    if (inView) controls.start({ opacity: 1, y: 0 });
  }, [inView, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={controls}
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

export default function Showcase() {
  return (
    <div className="relative">
      {/* Keunggulan */}
      <section id="keunggulan" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Keunggulan Aspal Cair Emulsi</h2>
            <p className="mt-3 text-slate-300 max-w-2xl">
              Dirancang untuk ketahanan dan efisiensi pekerjaan—pilihan tepat untuk kontraktor, pemilik rumah, dan proyek infrastruktur.
            </p>
          </Reveal>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f, i) => (
              <Reveal key={i}>
                <div className="group rounded-xl border border-slate-800 bg-slate-900/60 p-6 hover:-translate-y-1 hover:shadow-2xl hover:shadow-amber-400/10 transition-all">
                  <div className="w-12 h-12 rounded-lg bg-amber-400/15 border border-amber-400/20 flex items-center justify-center">
                    <f.icon className="text-amber-400" />
                  </div>
                  <h3 className="mt-4 text-xl font-semibold text-white">{f.title}</h3>
                  <p className="mt-2 text-slate-300">{f.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Produk & Layanan */}
      <section id="produk-layanan" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-white">Produk & Layanan</h2>
                <p className="mt-3 text-slate-300">Tersedia berbagai varian kemasan serta layanan aplikatif profesional.</p>
              </div>
              <a
                href="https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20memesan%20Aspal%20Cair%20Emulsi"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center px-5 py-3 rounded-md bg-amber-400 text-slate-900 font-semibold shadow hover:bg-amber-300 transition-colors"
              >
                Beli Sekarang
              </a>
            </div>
          </Reveal>

          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((p) => (
              <Reveal key={p.slug}>
                <div className="group rounded-xl bg-slate-800/40 border border-slate-700/60 overflow-hidden hover:shadow-xl hover:shadow-amber-400/10 transition-all">
                  <div className="aspect-square bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" aria-label={`kemasan ${p.size}`} role="img" />
                  <div className="p-4">
                    <h4 className="text-white font-semibold">Aspal Cair Emulsi {p.size}</h4>
                    <p className="text-slate-300 text-sm mt-1">Cocok untuk perbaikan lokal dan pekerjaan skala {p.size === '200 kg' ? 'besar' : 'rumah/proyek kecil'}.</p>
                    <div className="mt-3 flex items-center gap-2">
                      <a href={`https://wa.me/6281234567890?text=Halo%2C%20saya%20ingin%20beli%20${encodeURIComponent('Aspal Emulsi ' + p.size)}`} target="_blank" rel="noreferrer" className="px-3 py-2 text-sm rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Beli via WA</a>
                      <a href={`/produk/${p.slug}`} className="px-3 py-2 text-sm rounded-md border border-slate-600 text-slate-200 hover:bg-white/5 transition">Detail</a>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Reveal>
              <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/40">
                <div className="aspect-[16/9] bg-[url('https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center" aria-label="layanan waterproofing" role="img" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">Layanan Waterproofing</h3>
                  <p className="mt-2 text-slate-300">Penanganan bocor dak atap, balkon, kamar mandi, hingga kolam renang dengan material aspal emulsi berkualitas.</p>
                  <div className="mt-4 flex gap-2">
                    <a href="/layanan/waterproofing" className="px-4 py-2 rounded-md border border-slate-600 text-slate-200 hover:bg-white/5 transition">Selengkapnya</a>
                    <a href="https://wa.me/6281234567890?text=Konsultasi%20layanan%20waterproofing" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Konsultasi</a>
                  </div>
                </div>
              </div>
            </Reveal>
            <Reveal>
              <div className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/40">
                <div className="aspect-[16/9] bg-[url('https://images.unsplash.com/photo-1695740633675-d060b607f5c4?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxjZXJhbWljJTIwcG90dGVyeSUyMGhhbmRtYWRlfGVufDB8MHx8fDE3NjIyNjIzMTN8MA&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80')] bg-cover bg-center" aria-label="layanan slurry seal" role="img" />
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white">Layanan Slurry Seal</h3>
                  <p className="mt-2 text-slate-300">Perbaikan permukaan jalan beton/aspal untuk meningkatkan kelicinan, daya tahan, dan estetika.</p>
                  <div className="mt-4 flex gap-2">
                    <a href="/layanan/slurry-seal" className="px-4 py-2 rounded-md border border-slate-600 text-slate-200 hover:bg-white/5 transition">Selengkapnya</a>
                    <a href="https://wa.me/6281234567890?text=Konsultasi%20layanan%20slurry%20seal" target="_blank" rel="noreferrer" className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Konsultasi</a>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Galeri */}
      <section id="proyek" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Proyek & Galeri</h2>
            <p className="mt-3 text-slate-300">Dokumentasi pekerjaan di atap, kolam, hingga jalan lingkungan.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Reveal key={i}>
                <img
                  src={`https://images.unsplash.com/photo-15${80 + i}091877941-0f3a6f3c6530?q=80&w=800&auto=format&fit=crop`}
                  alt={
                    i % 2 === 0
                      ? 'aplikasi aspal cair emulsi dak atap rumah'
                      : 'slurry seal perbaikan jalan beton Jawa Timur'
                  }
                  loading="lazy"
                  className="w-full h-64 object-cover rounded-xl border border-slate-800 hover:scale-[1.02] transition-transform"
                />
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Artikel */}
      <section id="artikel" className="py-20 bg-gradient-to-b from-slate-950 to-slate-900">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Artikel Terbaru</h2>
            <p className="mt-3 text-slate-300">Edukasi dan tips seputar waterproofing dan slurry seal.</p>
          </Reveal>
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: 'Jasa Slurry Seal Jawa Timur',
                date: 'Okt 2025',
                slug: 'jasa-slurry-seal-jawa-timur',
                img: 'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Jasa Waterproofing Sidoarjo',
                date: 'Sep 2025',
                slug: 'jasa-waterproofing-sidoarjo',
                img: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=1200&auto=format&fit=crop',
              },
              {
                title: 'Pelapis Anti Bocor Dak Atap: Panduan Lengkap',
                date: 'Agu 2025',
                slug: 'pelapis-anti-bocor-dak-atap',
                img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?q=80&w=1200&auto=format&fit=crop',
              },
            ].map((a) => (
              <Reveal key={a.slug}>
                <article className="rounded-2xl overflow-hidden border border-slate-700/60 bg-slate-800/40 hover:shadow-xl hover:shadow-amber-400/10 transition-all">
                  <img src={a.img} alt={a.title} loading="lazy" className="h-48 w-full object-cover" />
                  <div className="p-6">
                    <p className="text-amber-400 text-sm font-medium">{a.date}</p>
                    <h3 className="text-white text-xl font-semibold mt-1">{a.title}</h3>
                    <p className="text-slate-300 mt-2 line-clamp-3">
                      Layanan profesional untuk kebutuhan {a.title.toLowerCase()}. Konsultasi gratis, tim berpengalaman, hasil rapi dan tahan lama.
                    </p>
                    <div className="mt-4 flex gap-2">
                      <a href={`/artikel/${a.slug}`} className="px-4 py-2 rounded-md border border-slate-600 text-slate-200 hover:bg-white/5 transition">Baca Selengkapnya</a>
                      <a href="#produk-layanan" className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Lihat Produk</a>
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Kontak */}
      <section id="kontak" className="py-20 bg-slate-950">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-10">
          <Reveal>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Kontak Kami</h2>
              <p className="mt-3 text-slate-300">Konsultasi dan pemesanan cepat via WhatsApp atau formulir.</p>
              <form className="mt-6 grid grid-cols-1 gap-4">
                <input required type="text" placeholder="Nama" className="px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <input required type="email" placeholder="Email" className="px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <textarea required rows={5} placeholder="Pesan" className="px-4 py-3 rounded-md bg-slate-900 border border-slate-700 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-amber-400" />
                <button type="submit" className="inline-flex justify-center px-5 py-3 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Kirim Pesan</button>
              </form>
            </div>
          </Reveal>
          <Reveal>
            <div className="rounded-2xl overflow-hidden border border-slate-800 bg-slate-900">
              <iframe
                title="Peta lokasi Aspal Emulsi Sidoarjo"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.432947253717!2d112.717!3d-7.309!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fb7d4a3f6e7f%3A0x31d!2sSidoarjo!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid"
                width="100%"
                height="420"
                style={{ border: 0 }}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SEO JSON-LD */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'LocalBusiness',
        name: 'Distributor Aspal Cair Emulsi & Jasa Waterproofing',
        address: { '@type': 'PostalAddress', addressLocality: 'Sidoarjo', addressRegion: 'Jawa Timur', addressCountry: 'ID' },
        url: typeof window !== 'undefined' ? window.location.origin : 'https://example.com',
        areaServed: ['Sidoarjo', 'Surabaya', 'Jawa Timur'],
        sameAs: [
          'https://instagram.com/',
          'https://facebook.com/'
        ]
      }) }} />
    </div>
  );
}
