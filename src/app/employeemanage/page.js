import Sidebar from "../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Employee Management
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="preview3.png"
            alt="Preview dashboard 3"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Melihat Daftar Karyawan:</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Search & Filter → cari karyawan berdasarkan nama, ID, departemen, status.</p>
              <p>Total Employees → ringkasan karyawan aktif, keluar, baru. Action → lihat detail, edit, hapus data.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Tambah Karyawan baru (Add New Employee)</span>
            <div className="ml-6 mt-1">
              <p>
                Overview → data dasar (ID, nama, kontak, status kerja), Joining Form → tanggal mulai, kontrak, pensiun.  
                Address & Contact → alamat & kontak darurat. Attendance & Leaves → shift, cuti, approver.  
                Salary → gaji, mata uang, pajak, BPJS. Personal → foto, status nikah, kesehatan.  
                Passport (Expatriat) → paspor & NPWP. Education → riwayat pendidikan.  
                Work Experience → pengalaman kerja sebelumnya. Exit → data resign & feedback.
              </p>
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