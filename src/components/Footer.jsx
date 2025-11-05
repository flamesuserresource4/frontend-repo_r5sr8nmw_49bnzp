export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 py-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-md bg-amber-400/20 border border-amber-400/30 flex items-center justify-center">
              <span className="text-amber-400 font-bold">AE</span>
            </div>
            <p className="text-white font-semibold">Aspal Emulsi</p>
          </div>
          <p className="text-slate-300 mt-3">Distributor Aspal Cair Emulsi & Jasa Waterproofing profesional di Sidoarjo – solusi anti bocor untuk dak atap, kolam renang, jalan beton.</p>
        </div>
        <div>
          <h4 className="text-white font-semibold">Navigasi</h4>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li><a href="#home" className="hover:text-amber-400">Beranda</a></li>
            <li><a href="#keunggulan" className="hover:text-amber-400">Keunggulan</a></li>
            <li><a href="#produk-layanan" className="hover:text-amber-400">Produk & Layanan</a></li>
            <li><a href="#proyek" className="hover:text-amber-400">Proyek</a></li>
            <li><a href="#artikel" className="hover:text-amber-400">Artikel</a></li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Kontak</h4>
          <ul className="mt-3 space-y-2 text-slate-300">
            <li>Telepon/WA: <a className="text-amber-400" href="https://wa.me/6281234567890" target="_blank" rel="noreferrer">+62 812-3456-7890</a></li>
            <li>Email: <a className="text-amber-400" href="mailto:info@aspalemulsi.id">info@aspalemulsi.id</a></li>
            <li>Alamat: Sidoarjo, Jawa Timur</li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-semibold">Aksi Cepat</h4>
          <div className="mt-3 flex flex-col gap-2">
            <a href="#produk-layanan" className="px-4 py-2 rounded-md bg-amber-400 text-slate-900 font-semibold hover:bg-amber-300 transition">Cek Produk</a>
            <a href="#kontak" className="px-4 py-2 rounded-md border border-slate-700 text-slate-200 hover:bg-white/5 transition">Konsultasi</a>
          </div>
        </div>
      </div>
      <div className="border-t border-slate-800 py-4 text-center text-slate-400 text-sm">© {new Date().getFullYear()} Aspal Emulsi. All rights reserved.</div>
    </footer>
  );
}
