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
          Data Shift Type
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview34.png"
            alt="Preview Login 34"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat, mengelola, dan menambahkan jenis shift kerja yang berlaku di perusahaan shift digunakan untuk menentukan jam kerja karyawan serta toleransi check-in mereka.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Tabel Shift Type</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Tabel ini menampilkan daftar semua jenis shift yang telah dibuat.</p>
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        No 
                        </td>
                        <td className="px-3 py-2">Filter berdasarkan Departemen misal: IT, Finance, Marketing, dsb.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Company
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut Shift dalam daftar
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
                        Company
                        </td>
                        <td className="px-3 py-2">
                        Nama perusahaan tempat shift ini digunakan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Start Time
                        </td>
                        <td className="px-3 py-2">
                        Jam mulai Shift
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        End Time
                        </td>
                        <td className="px-3 py-2">
                        Jam selesai Shift
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Check-In Tolerance
                        </td>
                        <td className="px-3 py-2">
                        Waktu toleransi keterlambatan check-in (misalnya 15 menit, 30 menit dst)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Tombol aksi untuk mengedit atau melihat detail shift (biasanya ikon tiga garis)
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