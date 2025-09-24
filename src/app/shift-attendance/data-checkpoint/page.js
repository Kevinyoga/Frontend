import Sidebar from "../../component/Sidebar";
import CheckpointSidebar from "@/app/component/data-checkpoint/page";

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
          Data Checkpoint (Checkpoint Location)
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview29.png"
            alt="Preview Login 29"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>halaman ini berfungsi untuk mengelola daftar lokasi  checkpoint yang digunakan dalam sistem pemantauan kehaadiran ,patroli,atau aktivitas kerja di lapangan.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Penjelasan Tiap Kolom</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut dari checkpoint yang terdaftar
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Name
                        </td>
                        <td className="px-3 py-2">
                        Nama checkpoint (bisa berupa POS, gedung, atau titik lokasi lainnya)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Address
                        </td>
                        <td className="px-3 py-2">
                        Alamat lengkap dari checkpoint (klik "show more" untuk melihat detail)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Company
                        </td>
                        <td className="px-3 py-2">
                        Nama perusahaan yang memiliki atatu mengelola checkpoint
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Tombol aksi (biasanya untuk lihat, ubah, atau hapus checkpoint)
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">Add New Checkpoint</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Tombol ini digunakan untuk menambahkan checkpoint  baru ke dalam sistem.pastikan memasukan:</p>
            <p>Nama Lokasi yang valid</p>
            <p>Alamat Lengkap</p>
            <p>perusahaan terkait</p>
            </div>
        </div>

        <div className="indicator">
            <span id="export" className="font-semibold">Export</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Unduh Daftar Checkpoint  dalam format Excel/PDF untuk keperluan dokumentasi atau pelaporan</p>
            </div>
        </div>

        <div className="indicator">
            <span id="back" className="font-semibold">Back</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>kembali ke halaman sebelumnya</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Tips Penggunaan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Gunakan nama yang deskriptif untuk checkpoint , hindari nama seperti “test checkpoint” atau “sadasdsa”</p>
            <p>Pastikan alamat terisi dengan benar ,terutama jika checkpoint ini akan digunakan untuk navigasi atau pametaan</p>
            <p>Gunakan tombol action untuk memperbarui atau menghapus checkpoint jika ada perubahan lokasi</p>
            </div>
        </div>

        <div className="indicator">
            <span id="kegunaan" className="font-semibold">Kegunaan Halamman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Menentukan lokasi presensi mobile/patroli karyawan</p>
            <p>Menyusun rute inspeksi atau kunjungan lokasi</p>
            <p>Referensi lokasi dalam laporan aktivitas karyawan</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <CheckpointSidebar />
      </aside>
    </div>
  );
}