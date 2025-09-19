import Sidebar from "../../component/Sidebar";
import ShiftAttendanceSidebar from "@/app/component/shift-attendance-management/page";

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
          Overview Shift & Attendance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview21-1.png"
            alt="Preview Login 21-1"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page" className="indicator">
            <span className="font-semibold">Attendance</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Attendance: Untuk melihat daftar kehadiran harian pegawai.</p>
            <p>Attendance Request: Tempat karyawan mengajukan izin, cuti, WFH,dan jua perjalanan dinas ( Add Travel).</p>
            <p>Employee Activities: Rekaman Aktivitas pegawai , bisa termasuk absensi, tugas lapangan, atau perjalanan.</p>
            </div>
        </div>

        <div id="page2" className="indicator">
            <span className="font-semibold">Checkpoint</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Digunakan jika perusahaan menggunakan sistem patroli atau pengecekan  lokasi kerja:</h4>
            <p>Checkpoint Location: Lokasi-lokasi yang ditandai untuk patroli atau kunjungan kerja.</p>
            <p>Checkpoint Record : Log atau hasil kunjungan ke lokasi tersebut.</p>
            <p>Checkpoint Assignment: Penugasan karyawan ke lokasi tertentu.</p>
            </div>
        </div>

        <div id="page3" className="indicator">
            <span className="font-semibold">Shift Management</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Mengatur pola kerja:</h4>
            <p>Shift Type: Jenis shift yang ada ( pagi, malam, fleksibel,dsb).</p>
            <p>Shift Assignment: penjadwalan shiftbper orang.</p>
            <p>Shift Assignment Bulk: penjadwalan shift masssal.</p>
            <p>Shift Assignment Schedule: Lihat seluruh jadwal shift dalam satu kalender.</p>
            </div>
        </div>

        <div id="page4" className="indicator">
            <span className="font-semibold">Report & Tools</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Untuk monitoring dan analisis:</h4>
            <p>Attendance Report, summary: Statistik kehadiran.</p>
            <p>Activity Report: Termasuk Aktivitas seperti tugas lapangan, cuti, dan perjalanan dinas ( Travel).</p>
            <p>Shift Report: Laporan keterisian shift.</p>
            </div>
        </div>

        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Gambar Dashboard Shift & Attendance
        </h1>

        {/* Gambar Preview */}
        <div id="gambar-dashboard" className="flex gap-6 mb-10">
            <img
            src="/preview21-2.png"
            alt="Preview Login 21-2"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div className="indicator">
            <span className="font-semibold">Komponen utama</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Filter Lokasi & Tanggal: Pilih Entitas perusahaan & tanggal untuk melihat data.</p>
            <p>Total Attendance: Total absensi (termasuk semua jenis status : hadir, cuti, dll).</p>
            <p>Total Present / Absent: siapa saja yang benar benar hadir atau tidak hadir.</p>
            <p>Leave / WFH /Request Approve: jumlah pegawai yang sedang cuti, WFH, ada permintaan seperti izin/perjalanan dinas yang  menunggu persetujuan admin.</p>
            <p>Late Entry / Early Exit: Pegawai yang datang terlambat atau pulang lebih awal.</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ShiftAttendanceSidebar />
      </aside>
    </div>
  );
}
