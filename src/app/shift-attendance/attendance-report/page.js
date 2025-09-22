import ReportSidebar from "@/app/component/attendance-report/page";
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
          Attendance Report
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview25.png"
            alt="Preview Login 25"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat dan memantau kehadiran karyawan berdasarkan rentang waktu tertentu.data yang ditampilkan mencakup status kehadiran harian untuk setiap karyawan.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="filter" className="font-semibold">Filter Pencarian</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Bagian atas halaman menyediakan beberapa filter untuk menyaring data:</p>
            <p>Search: cari karyawan berdasarkan nama atau ID</p>
            <p>Company: pilih perusahaan (contoh: PT Duluin Demo).</p>
            <p>Department: filter berdasarlan departement</p>
            <p>Designation: filter berdasarkan jabatan</p>
            <p>Date Range picker: Tentukan tentang tanggal kehadiran yang ingin ditampilkan</p>
            <p>Filter Button:klik untuk menerapkan filter yang telah dipilih.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="kehadiran" className="font-semibold">Tabel Kehadiran:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Tabel berisi daftar karyawan dan status kehadiran harian mereka</p>
            <p>Kolom:</p>
            <p>Employee Name: Nama dan ID karyawan</p>
            <p>Departement:Departement tempat karyawan bekerja</p>
            <p>Tanggal:setiap kolom menunjukan tanggal dan hari. Hari libur (Sabtu/Minggu) disorot merah muda</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status" className="font-semibold">Status Kehadiran:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>P — Present (Hadir)</p>
            <p>!P — Present with Late Entry (Hadir tapi terlambat)</p>
            <p>?P — Present but Pending Submission Approval (Hadir tapi belum disetujui)</p>
            <p>A — Absent (Tidak hadir)</p>
            <p>L — Leave (Cuti)</p>
            <p>H — Halfday (Setengah hari)</p>
            <p>WFH — Work From Home</p>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">Fungsi Navigasi dan Export:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Back Button:kembali ke halaman sebelumnya</p>
            <p>Export Button: unduh laporan kehadiran dalam format Excel/PDF(tergantung pengaturan).</p>
            </div>
        </div>

        <div className="indicator">
            <span id="footer" className="font-semibold">Footer:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Dibagian bawah terdapat keterangan arti dari masing masing kode status kehadiran untuk membantu user memahami makda dari simbol simbol yang digunakan pada tabel.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Tips tambahan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan fitur search dan filter untuk mempercepat pencarian data spesifik.</p>
            <p>perhatikan warna latar belakang merah muda untuk mengidentifikasi hari libur (sabtu dan minggu)</p>
            <p>jika ada simbol ?P, pastikan supervisor segera menyetujui ataumeninjau kehadiran tersebut</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ReportSidebar />
      </aside>
    </div>
  );
}
