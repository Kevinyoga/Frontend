import AdvSidebar from "@/app/component/advance/page";
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
          Panduan Penggunaan Halaman Employee Advance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview.png"
            alt="Preview Login 1"
            className="preview-image1 rounded shadow-md"
          />
        </div>

        {/* Langkah-Langkah */}
        <h2 id="login" className="text-xl font-bold mb-4">
          Tujuan Halaman
        </h2>
        <p>
          Halaman ini digunakan untuk menampilkan daftar pengajuan uang muka (advance) oleh karyawan. uang muka ini biasnya digunakan untuk kegiatan yang akan dilakukan seperti perjalanan dinas, pembelian barang operasional, dll.
        </p>

        {/* Langkah-Langkah */}
        <div id="tabel" className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut entri dalam daftar 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Reff ID
                        </td>
                        <td className="px-3 py-2">
                        Kode unik untuk identifikasi pengajuan. Contoh: <span className="text-green-600">PDD1-ADV-233150</span>.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Date
                        </td>
                        <td className="px-3 py-2">
                        JTanggal pengajuan uang muka.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Advance Purpose
                        </td>
                        <td className="px-3 py-2">
                        Tujuan atau alasan permintaan uang muka.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama karyawan yang mengajukan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Amount
                        </td>
                        <td className="px-3 py-2">
                        Jumlah uang yang diminta
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Approver Name
                        </td>
                        <td className="px-3 py-2">
                        Nama atasan yang menyetujui atau menolak pengajuan.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Status Pengajuan (Approved, Rejected, Submitted)
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Catatan Tambahan</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Reff ID unik membantu pelacakan dan dokumentasi</p>
                    <p>Pastikan setiap pengajuan memiliki deskripsi/tujuan yang jelas agar mudah diverifikasi oleh approver.</p>
                    <p>status bisa berubah setelah proses persetujuan oleh atasan atau finance.</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AdvSidebar />
      </aside>
    </div>
  );
}
