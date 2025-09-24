import Sidebar from "../../component/Sidebar";
import CheckpointRecord from "@/app/component/checkpoint-record/page";

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
          Checkpoint Record
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview31.png"
            alt="Preview Login 31"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk melihat, mengelola, dan menambahkan catatan checkpoint yang dimiliki oleh masing-masing karyawan</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Tabel Daftar Checkpoint</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Tabel ini menampilkan daftar karyawan beserta informasi checkpoint mereka.</p>
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut otomatis
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama Karyawan dan ID unik mereka (contoh: Lindsay Blair/ID1008)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Company
                        </td>
                        <td className="px-3 py-2">
                        Nama perusahaan tempat karyawan tersebut bekerja
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Checkpoint Count
                        </td>
                        <td className="px-3 py-2">
                        Jumlah Checkpoint yang telah direkam oleh karyawan tersebut
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Tombol unik melihat atau mengelola detail checkpoint yang dimiliki oleh karyawan tersebut
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="indicator">
            <span id="back" className="font-semibold">Back</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Kembali ke halaman sebelumnya</p>
            </div>
        </div>

        <div className="indicator">
            <span id="filter" className="font-semibold">Filter</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Menyaring daftar berdasarkan nama,perusahaan,jumlah checkpoint,dan lainya</p>
            </div>
        </div>

        <div className="indicator">
            <span id="export" className="font-semibold">Export</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Mengekspor data dalm format tertentu (biasanya CSV,Excel,PDF).</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Add New Checkpoint Record</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Menuju ke halaman record checkpoint baru.biasanya akan membuka halaman seperti “Create Checkpoint”.</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <CheckpointRecord />
      </aside>
    </div>
  );
}