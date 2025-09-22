import ActivitySidebar from "@/app/component/attendance-activity/page";
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
          Attendance Activity
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview24.png"
            alt="Preview Login 24"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page" className="indicator">
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk mencatat dan memonitor Aktivitas kehadiran harian dari setiap karyawan.</p>
            </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-black-800 mb-6">
        Penjelasan Tiap Kolom
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
                        Nomor urut data aktivitas
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama karyawan beserta ID unik Karyawan 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Company
                        </td>
                        <td className="px-3 py-2">
                        Nama perusahaan tempat karyawan bekerja
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Activity Titile
                        </td>
                        <td className="px-3 py-2">
                        Judul atau deskripsi singkat aktivitas yang dilakukan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        From Time
                        </td>
                        <td className="px-3 py-2">
                        Waktu mulai aktivitas, termasuk hari dan jam
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        To Time
                        </td>
                        <td className="px-3 py-2">
                        Waktu selesai aktivitas, termasuk hari dan jam
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Attachment
                        </td>
                        <td className="px-3 py-2">
                        Link untuk mengunduh bukti aktivitas (bisa berupa foto, dokumen, dll)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Tombol aksi (biasanya untuk melihat detail lengkap atau ubah/hapus data)
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
        <div id="panduan" className="indicator">
            <h2 className="font-semibold text-black-800">Fitur Tambahan</h2>
            <span className="font-semibold">Filter</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>gunakan tombol filter untuk memfilter data berdasarkan nama karywan,tanggal aktivitas,atau aktivitas tertentu</p>
            </div>

            <span className="font-semibold">Export</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>gunakan tombol  Export untuk mengunduh data aktivitas dalam format Excel/PDF untuk keperluan laporan</p>
            </div>

            <span className="font-semibold">Back</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Navigasi kembali ke halaman utama atau daftar kehadiran</p>
            </div>

            <span className="font-semibold">Tinjau status absensi harian:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Periksa apakah karyawan sedang cuti,absen,atau hadir</p>
            <p>Pastikan semua status sudah disetujui (Approved) atau ditidaklanjuti</p>
            </div>
        </div>

        <div id="pemakaian" className="indicator">
            <span className="font-semibold">Tips Pemakaian</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Pastikan setiap aktivitas tercatat dengan jelas ( hindari deskripsi singkat seperti “r”).</p>
            <p>Aktivitas yang bernilai atau produktif sebaiknya dilampirkan bukti ( gunakan fitur Download untuk unggah).</p>
            <p>periksa durasi pada form time dan to time agar data valid.misalnya,tidak boleh to time lebih awal dari from time</p>
            <p>data ini digunakan untuk evaluasi efektivitas kerja harian dan menyusun laporan timesheet karyawan</p>
            </div>

            <span className="batas font-semibold">Contoh Kegunaan data ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>menyusun laporan harian/mingguan aktivitas kerja</p>
            <p>menentukan bobot kehadiran berbasis kegiatan (untuk KPI).</p>
            <p>meninjau jam produktivitas karyawan</p>
            <p>Audit kinerja lapangan (melalui file attachment dan waktu).</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ActivitySidebar />
      </aside>
    </div>
  );
}
