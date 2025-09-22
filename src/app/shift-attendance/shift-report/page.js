import Sidebar from "../../component/Sidebar";
import ShiftReport from "@/app/component/shift-report/page";

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
          Shift Report
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview27.png"
            alt="Preview Login 27"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat jadwal kerja atau shift karyawan dalam rentang tanggal tertentu. Informasi ini penting untuk memastikan pembagian kerja,pengecekan hari libur,dan pemantauan distribusi shift secara adil.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="filter" className="font-semibold">Filter Pencarian</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>gunakan bagian atas halaman untuk memfilter data:</p>
            <p>Search: cari karyawan berdasarkan nama atau iD</p>
            <p>Company: pilih perusahaan (contoh: PT Duluin Demo).</p>
            <p>Department: filter berdasarlan departement</p>
            <p>Designation: filter berdasarkan jabatan</p>
            <p>Date Range picker: Tentukan tentang tanggal kehadiran yang ingin ditampilkan</p>
            <p>Filter Button: klik untuk menerapkan filter yang telah dipilih.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="kehadiran" className="font-semibold">Tabel Shift:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Tabel utama menampilkan data shift karyawan harian dalam format horizontal berdasarkan tanggal</p>
            <p>Kolom:</p>
            <p>No:Nomor urut data.</p>
            <p>Employee  Name:Nama dan ID karyawan</p>
            <p>Departement:Departement tempat karyawan bekerja</p>
            <p>Tanggal (1-31); kolom per hari,menunjukan jadwal kerja yang telah ditentukan.</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status" className="font-semibold">Isi Jadwal Shift:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>shift pagi + waktu (contoh:07:00 - 15:00)</p>
            <p>Weekly Off (saturday/sunday)-Hari libur mingguan.</p>
            <p>Hari Buruh Internasional atau hari libur nasional lainya-ditampilkan sebagai teks khusus</p>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">Fungsi Navigasi dan Export:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Back Button: Kembali ke halaman sebelumnya.</p>
            <p>Export Button: Unduh data dalam format PDF atau Excel.</p>
            <p>Scroll Horizontal: Gunakan untuk melihat seluruh tanggal dalam satu periode satu bulan.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="footer" className="font-semibold">Highlight:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>hari libur (nasional dan akhir pekan) diberi highlinght merah muda untuk memudahkan identifikasi.</p>
            <p>Jadwal ditampilkan secara rinci termasuk jam masuk dan keluar kerja</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Tips Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan laporan ini untuk mengecek beban kerja karyawan dan menghindari kelelahan karena shift berulang</p>
            <p>cocok digunakan oleh manager operasional atau HR untuk menyusun atau mengevaluasi jadwal rotasi kerja</p>
            <p>Bandingkan laporan shift dengan laporan kehadiran untuk memantau disiplin dan kesesuaian jam kerja.</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ShiftReport />
      </aside>
    </div>
  );
}