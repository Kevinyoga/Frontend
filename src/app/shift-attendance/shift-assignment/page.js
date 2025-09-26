import Sidebar from "../../component/Sidebar";
import ShiftAssignment from "@/app/component/shift-assignment/page";

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
          Shift Assignment
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview36.png"
            alt="Preview Login 36"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat, mengatur, dan  mengelola penugasan shift kerja untuk setiap karyawan di perusahaan</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Penjelasan Tabel</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        No.
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut penugasan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama dan ID karyawan yang mendapatkan shift.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Company
                        </td>
                        <td className="px-3 py-2">
                        Nama perusahaan tempat karyawan beerja (jika ada multi-company)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Shift type Name
                        </td>
                        <td className="px-3 py-2">
                        Jenis shift yang ditugaskan ke karyawan (misal: Shift pagi, lembur, dsb)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Start Date
                        </td>
                        <td className="px-3 py-2">
                        Tanggal mulai shift berlaku
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        End Date
                        </td>
                        <td className="px-3 py-2">
                        Tanggal berakhirnya shift berlaku
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Time In 
                        </td>
                        <td className="px-3 py-2">
                        Waktu mulai kerja (jam masuk)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Time Out
                        </td>
                        <td className="px-3 py-2">
                        Waktu selesai kerja (jam kerja)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Ignore Holiday
                        </td>
                        <td className="px-3 py-2">
                        Menunjukan apakah shift akan tetap bekerja saat hari libur
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Status penugasan shift (misalnya: active atau non-active)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Tombol aksi (lihat detail, edit, hapus)
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="indicators">
            <span id="status" className="font-semibold">Shift Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan filter untuk mempermudah pencarian berdasarkan periode tanggal atau shift tertentu</p>
            <p>Centang Ignore Holiday ke yes hayanya jika shift harus tetap berjalan meskipun di hari libur nasional</p>
            <p>Penugasan shift biasa lebih dari satu untuk satu karyawan,selama tidak terjadi konflik jam kerja (overlap)</p>
            <p>Anda bisa klik tombol aksi (ikon tiga garis) di kolom paling kanan untuk melihat detail atau mengedit penugasan shift</p>
            <p>Status Active menandakan penugasan shift masihberlaku dan akan digunakan dalm proses absensi</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ShiftAssignment />
      </aside>
    </div>
  );
}