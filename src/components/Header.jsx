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
      className="text-white/90 hover:text-[#FFC107] transition-colors px-3 py-2"
      onClick={() => setOpen(false)}
    >
      {label}
    </a>
  );

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'backdrop-blur bg-[#1D2B3C]/85 shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between">
        <a href="#home" className="flex items-center gap-2">
          <div className="w-9 h-9 rounded-md bg-[#FFA500]/15 border border-[#FFA500]/30 flex items-center justify-center">
            <span className="text-[#FFA500] font-bold">AE</span>
          </div>
          <div className="leading-tight">
            <p className="text-white font-semibold">Aspal Emulsi</p>
            <p className="text-xs text-white/60 -mt-1">Sidoarjo, Jawa Timur</p>
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
            className="inline-flex items-center gap-2 bg-[#FFA500] text-[#1D2B3C] font-semibold px-4 py-2 rounded-md shadow hover:bg-[#FFC107] transition-colors"
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
          <div className="flex items-center gap-2 text-white/80">
            <MapPin size={16} />
            <span>Sidoarjo, Jawa Timur</span>
          </div>
          <div className="flex flex-col rounded-lg border border-white/15 overflow-hidden bg-[#1D2B3C]/80">
            <a className="px-4 py-3 hover:bg-white/5" href="#home" onClick={() => setOpen(false)}>Beranda</a>
            <a className="px-4 py-3 hover:bg-white/5" href="#keunggulan" onClick={() => setOpen(false)}>Keunggulan</a>
            <a className="px-4 py-3 hover:bg-white/5" href="#produk-layanan" onClick={() => setOpen(false)}>Produk & Layanan</a>
            <a className="px-4 py-3 hover:bg-white/5" href="#proyek" onClick={() => setOpen(false)}>Proyek</a>
            <a className="px-4 py-3 hover:bg-white/5" href="#artikel" onClick={() => setOpen(false)}>Artikel</a>
            <a className="px-4 py-3 hover:bg-white/5" href="#kontak" onClick={() => setOpen(false)}>Kontak</a>
          </div>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20butuh%20informasi%20Aspal%20Cair%20Emulsi"
            target="_blank"
            rel="noreferrer"
            className="w-full inline-flex items-center justify-center gap-2 bg-[#FFA500] text-[#1D2B3C] font-semibold px-4 py-3 rounded-md shadow hover:bg-[#FFC107] transition-colors"
          >
            Chat WhatsApp
          </a>
        </div>
      )}
    </header>
  );
}
