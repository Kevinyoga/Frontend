import Sidebar from "../component/Sidebar";
import DocSidebar from "../sidebar-home/sidebar1";

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
        <h2 id="login" className="text-xl font-bold text-blue-800 mb-4">
          Login
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
            <span className="font-semibold">Opsi Ingat Saya:</span>  Centang Kotak "Remember me" 
            Jika Ingin Mengingat Akun Anda Ketika Login Pada perangkat  yang sama di lain waktu
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

        {/* Langkah-Langkah */}
        <h2 id="password" className="title-password text-xl font-bold text-blue-800 mb-4">
          Reset Password (Lupa Password)
        </h2>
        <ol className="list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Buka Dashboard Masing-Masing"</span>
          </li>
          <li>
            <span className="font-semibold">Klik "Lupa Password?"</span> ”Di bawah form login, 
            pilih tombol “Lupa Password”.
          </li>
          <li>
            <span className="font-semibold">Masukan Email Terdaftar</span>  Ketik alamat email 
            yang kamu gunakan saat mendaftar di Duluin HRMS.
          </li>
          <li>
            <span className="font-semibold">Cek Email Verifikasi</span>
            <ul className="list-disc list-inside ml-5">
              <li>Sistem akan mengirimkan link reset password ke email kamu.</li>
              <li>Buka inbox email dan klik tautan tersebut.</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Buat Password Baru</span>
            <ul className="list-disc list-inside ml-5">
              <li>Masukan Sandi Baru</li>
              <li>Konfirmasi ulang sandi</li>
              <li>Pastikan Mengikuti Arahan untuk Password yang Kuat</li>
            </ul>
          </li>
          <li>
            <span className="font-semibold">Login Kembali</span> login 
            dengan Password yang telah diperbarui.
          </li>
        </ol>
      </main>
      <aside className="h-screen sticky top-0">
        <DocSidebar />
      </aside>
    </div>
  );
}
