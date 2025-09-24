import AddRecord from "@/app/component/add-record/page";
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
          Panduan Halaman Create Checkpoint Record
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview32.png"
            alt="Preview Login 32"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakanuntuk mencatat titik checkpoint yang dilakukan oleh seseorang karyawan,termasuk informasi waktu, lokasi, dan catatan tambahan</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Scan Record Details</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Berisi form input yang harus diisi secara lengkap untuk membuat data checkpoint baru</p>
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name (Required)
                        </td>
                        <td className="px-3 py-2">
                        Pilih nama karyawan dari daftar dropdown. pastikan nama sesuai dengan data karyawan yang terdaftar.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Attendance Time (Required)
                        </td>
                        <td className="px-3 py-2">
                        Waktu saat checkpoint dilakukan. Biasanya otomatis terisi saat ini, tetapi bisa disesuaikan. Format <span className="text-green-600">DD/MM/YYYY HH:MM:SS</span>.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Checkpoint (Required)
                        </td>
                        <td className="px-3 py-2">
                        pilih checkpoint dari dropdown yang telah terdaftar sebelumnya (misalnya dari halaman "Create Checkpoint")
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Address
                        </td>
                        <td className="px-3 py-2">
                        Alamat Lokasi checkpoint secara deskriptif (misal "JL. Soekarno-Hatta No.1, Bandung")
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Latitude (Required)
                        </td>
                        <td className="px-3 py-2">
                        Koordinat lintang lokasi checkpoint. Biasanya otomatis terisis dari lokasi di peta.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Longitude (Required)
                        </td>
                        <td className="px-3 py-2">
                        Koordinat bujur lokasi checkpoint. Biasanya otomatis terisis dari lokasi di peta.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Remarks
                        </td>
                        <td className="px-3 py-2">
                        Catatan tambahan jika ada, misalnya kondisi likasi, alasan keterlambatan, atau kendala lapangan
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddRecord />
      </aside>
    </div>
  );
}