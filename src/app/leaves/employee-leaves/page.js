import Sidebar from "../../component/Sidebar";
import EmployeeLeaveSidebar from "@/app/component/employee-leave/page";

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
          Employee Leaves (Cuti Karyawan)
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview40.png"
            alt="Preview Login 40"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicators">
            <span id="status1" className="font-semibold">Rekapitulasi Cuti Karyawan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p className="font-semibold">Filter atas</p>
            <p>Dropdown Perusahaan: Pilih entitas/perusahaan yang ingin ditampilkan  data cutinya(contoh :PT ........).</p>
            <p>Tanggal :Pilih tanggal (Default:today)Untuk menampilkan data cuti yang aktif atau digunakan pad tanggal tertentu</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status2" className="font-semibold">Daftar jenis Cuti & Jumlah Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>berikut adalah jenis-jenis cuti yang ditampilkan beserta jumlah pengambilan cuti dan karyawan:</p>
            <p>Cuti Menikah (Cuti Khusus)</p>
            <p>Kunjungan Klien Sehari Penuh</p>
            <p>Surat Keterangan Cuti Sakit</p>
            <p>Cuti Bencana Alam atau kebakaran</p>
            <p>Perjalanan Dinas Luar Negeri</p>
            <p>Cuti Tahunan (Bulanan)</p>
            <p>Cuti Melahirkan (Cuti Khusus)</p>
            <p>Cuti Kematian Anggota Keluarga Serumah (Cuti Khusus)</p>
            <p>Cuti Khitanan Anak (Cuti Khusus)</p>
            <p>Cuti Pernikahan Anak (Cuti Khusus)</p>
            <p>Cuti Yang Tidak Di Bayar</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status3" className="font-semibold">More Action (Aksi Tambahan)</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Holiday List. Untuk melihat dan mengelola daftar libur Nasional/Perusahaan</p>
            <p>Leave Type. Untuk membuat,mengedit,dan menghapus jenis jenis cuti yang tersedia seperti Cuti Menikah, Sakit, Tahunan.</p>
            <p>Leave Application. Untuk Mengajukan Cuti Baru oleh karyawan,atau melihat daftar pengajuan yang sudah ada.</p>
            <p>Leave Allocation. untuk mengatur alokasi jumlah cuti per karyawan (misal: 12 hari pertahun untuk cuti tahunan).</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status4" className="font-semibold">Tips Tambahan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>pastikan Leaves Type sudah dikonfigurasi sebelum melakukan alokasi cuti.</p>
            <p>Lakukan Pengecekan secara berkala pada Leave Allocation untuk memastikan karyawan</p>
            <p>gunakan fitur filter tanggal untuk melihat penggunaan cuti dalam periode tertentu seperti bulanan,tahunan,atau harian</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <EmployeeLeaveSidebar />
      </aside>
    </div>
  );
}