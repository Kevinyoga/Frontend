import Sidebar from "../../component/Sidebar";
import AddAttendance from "@/app/component/add-attendance/page";

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
          Add New Attendance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview23.png"
            alt="Preview Login 23"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div>
            <h2 id="panduan">Attendance Information</h2>
            <div className="indicator">
                <span className="font-semibold">Employee information</span>
                <div className="ml-6 mt-1 space-y-1">
                <h4>Employee Name (Wajib)</h4>
                <p>Pilih nama karyawan dari dropdown.</p>
                <p>Data ini akan mengaitkan absensi dengan karyawan terkait</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Attendance Information</span>
                <div className="ml-6 mt-1 space-y-1">
                <h4>Shift Name</h4>
                <p>(opsional atau otomatis terisi jika sistem sudah ada data shift)</p>
                <p>pilih shift karyawan bila tersedia</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Start Date (Wajib)</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>Tanggal mulai absensi</p>
                <p>Format: YYY-MM-DD (contoh: 2025-05-23)</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">End Date (Wajib)</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>Tanggal akhir absensi</p>
                <p>biasanya sama dengan start date kecuali untuk absen multi-hari.</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Check-in Time (Wajib)</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>Jam karyawan melakukan check-in</p>
                <p>Format: HH:mm (Contoh: 15:20).</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Checkout Time  (Wajib)</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>Jam karyawan melakukan check-out.</p>
                <p>Wajib diiisi jika sudah ada data keluar.</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Attendance Status</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>pilih status kehadiran dari opsi yang tersedia.</p>
                <p>contoh umum: present, absent, leave, late</p>
                </div>
            </div>

            <div className="indicator">
                <span className="font-semibold">Reason</span>
                <div className="ml-6 mt-1 space-y-1">
                <p>Alasan tambahan (jika diperlukan)</p>
                <p>cocok untuk absen terlambat ,tidak hadir,atau cuti.</p>
                </div>
            </div>
        </div>

        <div id="tips" className="indicator">
          <h2>Tips Validasi</h2>
            <div className="ml-6 mt-1 space-y-1">
            <p>pastikan semua field bertanda “Required” diisi sebelum klik Save Changes</p>
            <p>jika Checkout Time belum diketahui(misal check-in saat ini),boleh dikosonglan terlebih dahulu.</p>
            <p>pastikan format waktu dan tanggal sesuai degan standar sistem (24 jam dan YYY-MM-DD).</p>
            </div>
        </div>

      </main>
      <aside className="h-screen sticky top-0">
        <AddAttendance />
      </aside>
    </div>
  );
}
