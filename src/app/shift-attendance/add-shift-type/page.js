import ShiftType from "@/app/component/shift-type/page";
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
          Add Shift Type
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview35.png"
            alt="Preview Login 35"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk menambahkan jenis shift kerja baru ke dalam sistem.setiap shift yang ditambahkan akan menjadi dasar penjadwalan kerja karyawan berdasarkan jam kerja masing masing</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Form isi</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Tabel ini menampilkan daftar semua jenis shift yang telah dibuat.</p>
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Shift Type Name
                        </td>
                        <td className="px-3 py-2">
                        Masukan nama shift yang unik, seperti: Morning Shift, Night Shift atau Shift Pagi. Nama yang sama tidak boleh digunakan dua kali.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Time Tolerance (Minute)
                        </td>
                        <td className="px-3 py-2">
                        Waktu toleransi keterlambatan dalam menu. Contoh 10 berarti karyawan masih dianggap tepat waktu jika check-in terlambat hingga 10 menit
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Shift Type Name
                        </td>
                        <td className="px-3 py-2">
                        Nama shift, seperti night shift, shift pagi, lembur, dsb
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Start Time (Required)
                        </td>
                        <td className="px-3 py-2">
                        Jam mulai shift. Gunakan format jam (misal: 08:00, 17:00)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        End Time (Required)
                        </td>
                        <td className="px-3 py-2">
                        Jam Berakhirnya shift. Bisa melewati tengah malam jika shift berlangsung malam hari (contoh 02:00, 17:00).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Pilih Enable untuk mengaktifkan shift, atau Disable jika shift tidak aktif saat ini.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ShiftType />
      </aside>
    </div>
  );
}