import AttendanceDashboard from "@/app/component/attendance-dashboard/page";
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
          Dashboard Attendance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview22.png"
            alt="Preview Login 22"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page" className="indicator">
            <span className="font-semibold">Fungsi utama halaman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Breadcrumb di bagian atas menunjukan jalur menu: Dashboard → HRMS → Attendance</p>
            <p>Tombol Back: Kembali ke halaman sebelumnya</p>
            <p>Filter:Menyaring data berdasarkan kriteria tertentu (misalnya tanggal,nama,status).</p>
            <p>Export: Mengeksport data kehadiran dalam format Excel/CSV/PDF.</p>
            <p>+ AddNew Attendance: Menambahkan data kehadiran manual untuk karyawan.</p>
            </div>
        </div>

        <div id="page2" className="indicator">
            <span className="font-semibold">Notifikasi Penting</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Bar Merah bertuliskan:</p>
            <span className="font-semibold text-red-600">“There are 70 employees attendance records that need to be approved. Click here to see!”</span>
            <p>Artinya, ada 70 data kehadiran yang perlu disetujui oleh admin atau atasan.</p>
            <p>Klik tautan tersebut untuk langsung menuju halaman approval.</p>
            </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-black-800 mb-6">
          Tabel Data Kehadiran
        </h1>

        {/* Langkah-Langkah */}
        <div className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut data
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama ID Karyawan 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Shift Type
                        </td>
                        <td className="px-3 py-2">
                        Jenis Shift: (Contoh: Shift Pagi)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Attendance Date
                        </td>
                        <td className="px-3 py-2">
                        Tanggal Absensi
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Check-in Checkout Time
                        </td>
                        <td className="px-3 py-2">
                        Waktu masuk dan keluar (jika tersedia).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Attendance
                        </td>
                        <td className="px-3 py-2">
                        Status kehadiran: Present, Leave, Absent.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Status approval: Approved, Submit dan Sebagainya.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Aksi lanjutan (biasanya berupa tombol untuk detail detail/edit/delete).
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div  className="indicator">
                  <h4 className="font-semibold text-black-800">Contoh Data:</h4>
                    <span className="font-semibold">Lindsay Blair memiliki beberapa catatan</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Leave (Approved)</p>
                    <p>Absent ( Approved)</p>
                    <p>Present (submit-masih menunggu persetujuan)</p>
                    </div>
                    <span className="font-semibold">Kayla peterson memiliki kehadiran lengkap:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>check-in 09:00, check-out 17:00 (Approved)</p>
                    </div>
                </div>

                <div id="panduan" className="indicator">
                    <h2 className="font-semibold text-black-800">Panduan Penggunaan Umum</h2>
                    <span className="font-semibold">Lihat daftar data yang perlu di setujui:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Klik pesan notifikasi merah</p>
                    <p>Setujui atau tolak sesuai kebijakan perusahaan</p>
                    </div>

                    <span className="font-semibold">Tambah Kehadiran secara manual:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>klik tombol + Add New Attendance</p>
                    <p>Isi data kehadiran (nama, tanggal, waktu, status).</p>
                    <p>Submit untuk disetujui</p>
                    </div>

                    <span className="font-semibold">Verifikasi data karyawan:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Gunakan filter berdasarkan nama atau tanggal</p>
                    <p>Pastikan check-in dan check-out sesuai aturan jam kerja.</p>
                    </div>

                    <span className="font-semibold">Tinjau status absensi harian:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Periksa apakah karyawan sedang cuti,absen,atau hadir</p>
                    <p>Pastikan semua status sudah disetujui (Approved) atau ditidaklanjuti</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AttendanceDashboard />
      </aside>
    </div>
  );
}
