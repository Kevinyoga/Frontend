import ProfileSidebar from "@/app/component/profile-sidebar/page";
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
          Profile
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview11.png"
            alt="Preview dashboard 11"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span id="desc" className="font-semibold">Educational Qualification</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>bagian ini digunakan untuk menginput riwayat pendidikan karyawan, kolom terdiri dari:</p>
            </div>
          </div>

          <div>
            <span id="petunjuk" className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-2 space-y-2">
              <div className="flex">
                <span className="w-40 font-medium">No.</span>
                <span>Nomor Urut</span>
              </div>
              <div className="flex">
                <span className="w-40 font-medium">School/University</span>
                <span>Nama institusi pendidikan</span>
              </div>
              <div className="flex">
                <span className="w-40 font-medium">Qualification</span>
                <span>Gelar atau Sertifikasi</span>
              </div>
              <div className="flex">
                <span className="w-40 font-medium">Level</span>
                <span>Jenjang (misal: S1, S2, D3, dll.)</span>
              </div>
              <div className="flex">
                <span className="w-40 font-medium">Year of Graduate</span>
                <span>Tahun kelulusan</span>
              </div>
            </div>
          </div>
        </div>

        <div className="extra space-y-6 text-gray-700">
          <div>
            <div className="ml-6 mt-1 space-y-1">
              <p>Tombol "Add New Row" digunakan untuk menambah baris baru untuk entri pendidikan tambahan. Prevuous Work Experience.</p>
              <p>Previous Work Experience digunakan untuk mencatat pengalaman kerja sebelumnya.</p>
              <p>pada gambar belum ada field input aktif, kemungkinan muncul stelah klik atau akan diisi secara dinamis.</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ProfileSidebar />
      </aside>
    </div>
  );
}