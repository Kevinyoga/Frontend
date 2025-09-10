import ExitSidebar from "@/app/sidebar-exit/sidebar2";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left">
        {/* Judul */}
        <h1 id="exit" className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Exit
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview11.png"
            alt="Preview dashboard 11"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Bagian Exit</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Menu ini digunakan mengelola Data Karyawan yang akan keluar/resign dari perusahaan, yang terdiri dari dia bagian</p>
            </div>
          </div>

          <div>
            <span id="info" className="tips font-semibold">Informasi Exit</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                <tbody>
                    <tr className="border-b">
                    <td className="w-56 font-medium px-3 py-2">Resignation Letter Date</td>
                    <td className="px-3 py-2">Tanggal surat pengunduran diri. Format: dd/mm/yyyy</td>
                    </tr>
                    <tr className="border-b">
                    <td className="font-medium px-3 py-2">Exit Interview Held On</td>
                    <td className="px-3 py-2">Tanggal Interview Exit dilakukan. Format: dd/mm/yyyy</td>
                    </tr>
                    <tr className="border-b">
                    <td className="font-medium px-3 py-2">Leave Encashment</td>
                    <td className="px-3 py-2">Pilih status apakah cuti dibayarkan atau tidak (Ya/Tidak)</td>
                    </tr>
                    <tr className="border-b">
                    <td className="font-medium px-3 py-2">Relieving Date</td>
                    <td className="px-3 py-2">Tanggal karyawan resmi keluar dari perusahaan. Format: dd/mm/yyyy</td>
                    </tr>
                    <tr>
                    <td className="font-medium px-3 py-2">New Workplace</td>
                    <td className="px-3 py-2">(Opsional) Masukkan nama tempat kerja baru jika diketahui</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>

          <div>
            <span id="feedback" className="tips font-semibold">Feedback</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                <tbody>
                    <tr className="border-b">
                    <td className="w-56 font-medium px-3 py-2">Reason For Leaving</td>
                    <td className="px-3 py-2">Jelaskan alasan utama pengunduran diri karyawan.</td>
                    </tr>
                    <tr>
                    <td className="font-medium px-3 py-2">Feedback</td>
                    <td className="px-3 py-2">Tulis masukan atau komentar dari karyawan tentang pengalaman kerjanya.</td>
                    </tr>
                </tbody>
                </table>
            </div>
          </div>


          <div className="tips space-y-6 text-gray-700">
            <span id="aksi" className="font-semibold">Aksi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Tombol 'save changes":klik untuk menyimpan semua data exit dan feedback yang telah diisi.</p>
              <p>pastikan seluruh field yang diwajibkan telah terisi dengan format yang benar.</p>
            </div>
          </div>

          <div className="tips space-y-6 text-gray-700">
            <span id="tips" className="font-semibold">Tips Pengguna</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>gunakan kalender (ikon 📅)untuk memilih tanggal secara langsung.</p>
              <p>isian seperti "new workplace" bisa dibiarkan kosong jika tidak diketahui</p>
              <p>simpan data segera setelah mengisi untuk menghindari kehilangan informasi.</p>
            </div>
          </div>
        </div>
      </main>
      <ExitSidebar />
    </div>
  );
}