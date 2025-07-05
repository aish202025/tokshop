export default function Home() {
  return (
    <div className="bg-gradient-to-b from-yellow-100 to-black text-white min-h-screen font-sans">
      <header className="text-center py-8">
        <img src="/logo-new.png" alt="Tokshop Logo" className="mx-auto w-24" />
        <h1 className="text-4xl font-bold text-yellow-400 mt-4">Tokshop</h1>
        <p className="text-lg text-gray-200 mt-2">Solusi Riset Produk Shopee & TikTok</p>
      </header>

      <section className="text-center px-4 py-8">
        <h2 className="text-3xl font-semibold mb-4 text-yellow-300">Kenapa Pilih Tokshop?</h2>
        <p className="text-lg text-gray-300 max-w-3xl mx-auto">
          Pantau tren produk viral dari Shopee & TikTok dalam satu dashboard elegan. Cepat, akurat, dan terjangkau!
        </p>
      </section>

      <section className="bg-yellow-300 text-black py-12 px-4 text-center">
        <h2 className="text-2xl font-bold mb-4">💰 Harga Terjangkau</h2>
        <ul className="max-w-md mx-auto text-left text-lg space-y-2">
          <li>✅ Paket Mingguan: Rp 25.000</li>
          <li>✅ Paket Bulanan: Rp 70.000</li>
          <li>✅ Lifetime (Terbatas): Rp 199.000</li>
        </ul>
      </section>

      <section className="py-12 px-4 text-center">
        <h2 className="text-2xl font-bold text-yellow-300 mb-6">Testimoni Pengguna</h2>
        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 text-left">
          <blockquote className="bg-white text-black p-4 rounded shadow">
            “Layanan terbaik untuk pemula jualan online! UI-nya clean, datanya akurat.”
            <footer className="mt-2 text-sm">– Rina, Dropshipper</footer>
          </blockquote>
          <blockquote className="bg-white text-black p-4 rounded shadow">
            “Gue bisa riset 3x lebih cepat dibanding tools mahal sebelumnya!”
            <footer className="mt-2 text-sm">– Bayu, TikTok Affiliate</footer>
          </blockquote>
        </div>
      </section>

      <section className="text-center py-12">
        <a
          href="https://wa.me/6281234567890"
          className="inline-block bg-yellow-400 text-black px-6 py-3 text-xl rounded-full font-semibold hover:bg-yellow-500 transition"
        >
          🚀 Daftar Sekarang via WhatsApp
        </a>
      </section>

      <footer className="text-center text-sm text-gray-500 py-6">
        &copy; {new Date().getFullYear()} Tokshop. All rights reserved.
      </footer>
    </div>
  );
}