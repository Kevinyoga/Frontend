import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left text-gray-800">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Employee Management
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview6.png"
            alt="Preview dashboard 6"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form ini adalah tampilan awal pengisian data karyawan baru</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Penggunaan</span>
            <div className="ml-6 mt-1">
              <p>lengkapi semua data yang bertanda <span className="text-blue-600 font-bold">REQUIRED</span></p>
              <p>Isian informasi dasar seperti nomor karyawan, nama, kontak, tanggal lahir, jenis kelamin, serta status kepegawaian</p>
              <p>Lanjukan pengisian ke bagian selanjutnya sesuai urutan menu</p>
            </div>
          </div>
        </div>

        {/* Status Karyawan */}
        <div className="mt-8">
          <span className="font-semibold">Status Karyawan:</span>
          <div className="ml-6 mt-1">
            <p>Tampilkan Aktif / Non-aktif.</p>
            <p>Gunakan filter status untuk cepat melihat.</p>
          </div>
        </div>

        {/* Tips */}
        <div className="mt-8">
          <span className="font-semibold">Tips:</span>
          <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan search & filter untuk efisiensi.</p>
            <p>Pastikan data lengkap sebelum simpan.</p>
            <p>Gunakan import untuk banyak karyawan sekaligus.</p>
            <p>Cek status approval jika ada.</p>
          </div>
        </div>
      </main>
    </div>
  );
}