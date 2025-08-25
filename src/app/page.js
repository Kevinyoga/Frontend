export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-blue-600 text-white text-center p-10">
        <h1 className="text-4xl font-bold">Documentation</h1>
        <div className="mt-6 search-bar">
          <input type="text" placeholder="Search the docs..." />
        </div>
      </section>

      {/* Content with Sidebar */}
      <div className="flex">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-100 border-r min-h-screen p-5">
          <h2 className="text-lg font-semibold mb-5">Discover</h2>
          <ul className="space-y-4">
            <li><a href="/getting started" className="hover:text-blue-600">🏠 Getting started</a></li>
            <li><a href="/installation" className="hover:text-blue-600">⚙️ Installation & Setup</a></li>
            <li><a href="/user guide" className="hover:text-blue-600">📘 User Guide</a></li>
            <li><a href="/payroll finance" className="hover:text-blue-600">💰 Payroll & Finance</a></li>
          </ul>
        </aside>

        {/* Main Content */}
        <div className="flex-1 p-8 max-w-3xl mx-auto bg-white">
          <div className="text-sm text-gray-500 mb-3">Home &gt; Documentation</div>

          <h2 className="text-2xl font-bold mb-3">
            Selamat datang di Dokumentasi Duluin HRMS
          </h2>
          <p className="mb-4 leading-relaxed">
            <strong>Duluin HRMS</strong> hadir untuk membantu perusahaan Anda dalam mengelola
            sumber daya manusia dengan lebih mudah, cepat, dan efisien. Di sini Anda akan
            menemukan panduan lengkap mulai dari cara memulai, instalasi, penggunaan fitur,
            hingga solusi untuk kendala yang mungkin ditemui.
          </p>
          <p className="mb-8 leading-relaxed">
            Dokumentasi ini dirancang agar Anda dapat memaksimalkan semua fitur Duluin HRMS,
            mulai dari manajemen karyawan, penggajian, hingga integrasi keuangan. 🚀{" "}
            <a href="#" className="text-blue-600 underline">
              Mari mulai perjalanan Anda bersama Duluin HRMS!
            </a>
          </p>

          <h2 className="text-2xl font-bold mb-3">
            Luncurkan Proyek Perangkat Lunak Anda Seperti Seorang Profesional
          </h2>
          <p className="leading-relaxed">
            Ingin meluncurkan proyek perangkat lunak Anda dan mulai mendapatkan perhatian dari
            target pengguna? Lihat premium kami! Paket ini menyediakan semua yang Anda butuhkan
            untuk mempromosikan produk Anda.
          </p>
        </div>
      </div>
    </div>
  );
}
