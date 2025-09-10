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
          Attendance & Leaves
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview8.png"
            alt="Preview dashboard 8"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form untuk Mengatur absensi, jadwal kerja, cuti, dan penangung jawab persetujuan.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Penggunaan</span>
            <div className="ml-6 mt-1">
              <p>Holiday list & default shift:pilih daftar hari libur dan shift utama karyawan.</p>
              <p>Approvers: atur siapa yang bertanggung jawab mengesahkan absensi, shift dan cuti karyawan.</p>
              <p>klik "Save changes" setelah data lengkap</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}