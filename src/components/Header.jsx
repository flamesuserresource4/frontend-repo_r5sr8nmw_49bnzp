import { useEffect, useState } from 'react';
import { Phone, Menu, X, MapPin } from 'lucide-react';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navItem = (label, href) => (
    <a
      href={href}
      className="text-slate-200 hover:text-amber-400 transition-colors px-3 py-2"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur bg-slate-900/80 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
            <span className="text-amber-400 font-bold">AE</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">Aspal Emulsi</p>
            <p className="text-xs text-slate-400 -mt-1">Sidoarjo, Jawa Timur</p>
          </div>
        </a>

        <nav className="hidden md:flex items-center">
          {navItem('Beranda', '#home')}
          {navItem('Keunggulan', '#keunggulan')}
          {navItem('Produk & Layanan', '#produk-layanan')}
          {navItem('Proyek', '#proyek')}
          {navItem('Artikel', '#artikel')}
          {navItem('Kontak', '#kontak')}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20informasi%20Aspal%20Cair%20Emulsi"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 bg-amber-400 text-slate-900 font-semibold px-4 py-2 rounded-md shadow hover:bg-amber-300 transition-colors"
          >
            <Phone size={18} /> Hubungi Kami
          </a>
        </div>

        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle Menu"
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden px-4 pb-4 space-y-2">
          <div className="flex items-center gap-2 text-slate-300">
            <MapPin size={16} />
            <span>Sidoarjo, Jawa Timur</span>
          </div>
          <div className="flex flex-col rounded-lg border border-slate-700 overflow-hidden">
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#home" onClick={() => setOpen(false)}>Beranda</a>
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#keunggulan" onClick={() => setOpen(false)}>Keunggulan</a>
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#produk-layanan" onClick={() => setOpen(false)}>Produk & Layanan</a>
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#proyek" onClick={() => setOpen(false)}>Proyek</a>
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#artikel" onClick={() => setOpen(false)}>Artikel</a>
            <a className="px-4 py-3 bg-slate-800/60 hover:bg-slate-800" href="#kontak" onClick={() => setOpen(false)}>Kontak</a>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20informasi%20Aspal%20Cair%20Emulsi"
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-amber-400 text-slate-900 font-semibold px-4 py-3 rounded-md shadow hover:bg-amber-300 transition-colors"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
