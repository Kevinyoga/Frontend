import Sidebar from "../../component/Sidebar";

export default function HomePage() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="judul flex-1 p-6 md:p-10">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Panduan Penggunaan Halaman Login Duluin HRMS
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview.png"
            alt="Preview Login 1"
            className="preview-image1 rounded shadow-md"
          />
        </div>

        {/* Langkah-Langkah */}
        <h2 className="text-xl font-bold text-blue-800 mb-4">
          Langkah-Langkah Login
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Masukan Email:</span> ketik email
            anda pada kolom bertanda "Email".
          </li>
          <li>
            <span className="font-semibold">Masukan Kata Sandi:</span> ketik
            kata sandi Anda pada kolom bertanda "Password".
          </li>
          <li>
            <span className="font-semibold">Opsi Ingat Saya:</span> centang kotak
            "Remember me" jika ingin akun Anda diingat.
          </li>
          <li>
            <span className="font-semibold">Lupa Kata Sandi:</span> klik "Forgot
            Password?" untuk memulai proses pemulihan.
          </li>
          <li>
            <span className="font-semibold">Klik Sign In:</span> setelah mengecek
            ulang email dan kata sandi, tekan tombol "Sign In".
          </li>
        </ol>
      </main>
    </div>
  );
}
