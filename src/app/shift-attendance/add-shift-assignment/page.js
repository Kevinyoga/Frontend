import AddShiftAssignment from "@/app/component/add-shift-assignmnet/page";
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
          Add Shift Assignment
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview37.png"
            alt="Preview Login 37"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk menambahkan penugasan shift baru kepada seorang karyawan berdasarkan jenis shift yang telah dibuat sebelumnya.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Bagian Employee</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name (Required)
                        </td>
                        <td className="px-3 py-2">
                        Pilih nama karyawan yang akan diberi shift. Pastikan karyawan sudah terdaftar di sistem.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Shift Details</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel2" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Shift Type Name (Required)
                        </td>
                        <td className="px-3 py-2">
                        Pilih jenis shift yang sudah dikonfigurasi sebelumnya (misalnya: shift pagi, malam, lembur). Jika kosong anda perlu membuat shift terlebih dahulu
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Pilih status penugasan Shift: Active untuk mengaktifkan Shift, dan Inactive untuk memnonaktifkan Shift
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Start Date (Required)
                        </td>
                        <td className="px-3 py-2">
                        Tanggal berlakunya shift
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        End Date (Required)
                        </td>
                        <td className="px-3 py-2">
                        Tanggal berakhirnya shift
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Ignore Holiday Date 
                        </td>
                        <td className="px-3 py-2">
                        Centang opsi ini jika karyawan tetap diizinkan bekerja saat hari libur. jika tidak dicentang, maka shift akan dilewati saat libur nasional
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="indicators">
            <span id="status" className="font-semibold">Informasi di panel kanan</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Anda harus membuat shift type terlebih dahulu sebelum menetapkan shift.</p>
            <p>klik shift Type Name click here untuk membuatnya</p>
            <p>jika “Ignore Holiday Date” dicentang, karyawan tetap bisa check-in walau hari libur.untuk membuat daftar libur,klik holiday list</p>
            <p>Gunakan status Active agar shift dapat digunakan</p>
            <p>untuk mengaktifkan shift berganda dalam satu hari,aktifkan opsi melalui “enable here”</p>
            <p>pastikan tanggal mulai dan berakhir berada dalam periode penjadwalan yang valid</p>
            <p>jika ini merupakan shift berulang(recurring),atur pola pengulangannya terlebih dahulu di menu schedule shift</p>
            <p>jika ingin menetapkan shift ke beberapa karyawan sekaligus, gunakan Bulk Assignment Tool.</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddShiftAssignment />
      </aside>
    </div>
  );
}