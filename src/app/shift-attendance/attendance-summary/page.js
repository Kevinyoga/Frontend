import ShiftAttendance from "@/app/component/attendance-summary/page";
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
            <p>Halaman ini menyajikan ringkasan kehadiran karyawan dalam bentuk rekapitulasi nukmerik berdasarkan periode tanggal yang di pilih.cocok untuk HR atau supervisor dalam mengevaluasi performa kehadiran secara keseluruhan.</p>
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

        <div className="tabel">
            <span className="font-semibold">Tabel ringkasan Kehadiran</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Tabel menampilkan rekap data kehadiran per karyawan dalam perioode yang di pilih.</p>
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama dan ID Karyawan 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Department
                        </td>
                        <td className="px-3 py-2">
                        Departement Karyawan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Absent
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari Tidak hadir
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Present
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari hadir
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Leave
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari cuti
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        WFH
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari kerja dari rumah
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Halfday
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari kerja setengah hari
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Late Entry
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari terlambat masuk
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Early Exit
                        </td>
                        <td className="px-3 py-2">
                        Jumlah hari pulang lebih awal
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Total Late Entry (Minutes)
                        </td>
                        <td className="px-3 py-2">
                        total menit keterlambatan selama periode
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Working Hours
                        </td>
                        <td className="px-3 py-2">
                        Total jam kerja yang tercatat
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">Navigasi dan Export:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Back Button: Kembali ke halaman sebelumnya.</p>
            <p>Export Button: Unduh data dalam format PDF atau Excel.</p>
            <p>Scroll Vetikal: Gunakan untuk melihat seluruh tanggal dalam satu periode satu bulanlebih banyak karyawan jika data panjang</p>
            </div>
        </div>

        <div className="indicator">
            <span id="footer" className="font-semibold">Highlight:</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Angka merah (contoh :angka 8 pada kolom absent) menunjukan nilai yang perlu perhatian (kemungkinan karena frkuensi tinggi).</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Tips Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>gunakan halaman ini unuk analisa performa bulanan karyawan,khususnya terkait kedisiplinan dan efektivitas kerja.</p>
            <p>kolom Total Late Entry (minutes) sangat berguna untuk  mendukung dedukasi  atau evaluasi edukasi</p>
            <p>Data ini bisa dibandingkan dengan halaman shift report  dan activity report untuk melihat konsintensi antara jadwal, kehadiran, dan aktivitas kerja</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ShiftAttendance />
      </aside>
    </div>
  );
}