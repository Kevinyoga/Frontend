import ActivityReport from "@/app/component/activity-report/page";
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
          Activity Report
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview26.png"
            alt="Preview Login 26"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat dan memantau aktivitas harian karyawan dalam rentang tangal tertentu.Data aktivitas ini dapat mempresentasikan keterlibatan atau laporan kerja harian karyawan.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="filter" className="font-semibold">Filter Pencarian</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>gunakan bagian filter di atas tabel untuk menysuaikan data yang ingin di tampilkan:</p>
            <p>Search: cari karyawan berdasarkan nama atau iD</p>
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
            <p>Tabel ini menampilkan aktivitas karyawan secara harian dalam periode yang dipilih</p>
            <p>Kolom:</p>
            <p>No:Nomor urut data.</p>
            <p>Employee  Name:Nama dan ID karyawan</p>
            <p>Departement:departement karyawan</p>
            <p>Tanggal Harian: setiap kolom menampilkan tanggal dan hari,dengan penanda warna merah muda untuk hari libur (Sabtu dan Minggu)</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status" className="font-semibold">Status Aktivitas:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>A — Has Activities (Ada aktivitas dilaporkan)</p>
            <p>-_NoActivities (Tidak Ada aktivitas dilaporkan pada hari tersebut).</p>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">FNavigasi dan Export:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Back Button: Kembali ke halaman sebelumnya.</p>
            <p>Export Button: Unduh data dalam format PDF atau Excel.</p>
            <p>Navigasi Halaman: Gunakan tombol panah untuk pindah ke halaman data berikutnya.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="footer" className="font-semibold">Footer:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>A = Ada aktivitas.</p>
            <p>- = Tidak Ada aktivitas.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Tips Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan filter tanggal dan departement untuk analisa lebih fokus per tim atau proyek</p>
            <p>jika seluruh baris menunjukan -,kemungkinan besar karyawan belum mengisi laporan aktivitas atau tidak memiliki aktivitas</p>
            <p>gunakan data ini untuk monitoring efisiensi dan kedisiplinan pelamporan</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ActivityReport />
      </aside>
    </div>
  );
}
