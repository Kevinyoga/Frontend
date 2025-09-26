import BulkAssignment from "@/app/component/bulk-assignment/page";
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
          Add Shift Assigment Bulk
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview38-1.png"
            alt="Preview Login 38-1"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini siunakan untuk memberikan penugasan shift seacara masal kepada beberapa karyawan seka;ogus,sehingga lebih efisien dibandingkan pengisian satu persatu.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Shift Details</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
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
            <p>Shift Types harus dibuat lebih dulu sebelum penugasan.klik shift type name click here! untuk membuat jika kosong</p>
            <p>Ignore Holiday Date : jika dicentang, karyawan tetap dapat melakukan check-in walau hari tersebut libur</p>
            <p>Untuk memperbolehkan beberapa shift di hari yang sama,aktifkann opsi “allow multiplw shift:.klik enable here!.</p>
            <p>pastikan Star Date dan End Date sesuai dengan periode penjadwalan saat ini</p>
            <p>gunakan fitur pencarian (search bar) untuk menyaring karyawan berdasarkan departemen atau jabatan, agar proses lebih cepat dan akurat</p>
            <p>gunakan checkbox disisi kiri tabel (halaman sebelumnya) untuk memilih banyak karyawan sekaligus. untuk memilih semua karyawan dalam daftar,gunakan checkbox di baris header (atas tabel)</p>
            </div>
        </div>

        {/* Judul */}
        <h1 className="indicator text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Panduan Penggunaan Select Employee 
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview38-2.png"
            alt="Preview Login 38-2"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan2" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk memiliih karyawan yang akan diberikan shift kerja secara massal. Anda dapat memfilter,mencari,dan memilih salah satu atau lebih karyawan untuk di-assign shift.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Filter & Pencarian</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel2" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Departement
                        </td>
                        <td className="px-3 py-2">
                        Filter berdasarkan departemen tempat karyawan bekerja (contoh: IT, Legal, Accounts)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Company
                        </td>
                        <td className="px-3 py-2">
                        Filter berdasarkan perusahaan tempat karyawan terdaftar (jika ada lebih dari satu perusahaan  /child company) 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Designation
                        </td>
                        <td className="px-3 py-2">
                        Filter Berdasarkan jabatan (contoh: IT manager, Finance Manager,)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Search (Keyword)
                        </td>
                        <td className="px-3 py-2">
                        Cari karyawan secara cepat berdasarkan nama, jabatan, atau departemen. Gunakan kata kunci spesifik untuk hasil lebih akurat.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Daftar Karyawan</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel3" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Checkbox
                        </td>
                        <td className="px-3 py-2">
                        Gunakan untuk memilih karyawan yang akan diberikan shift Anda bisa memilih satu per satu, atau pilih semuanya melalui checkbox di sebelah No.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        No.
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut karyawan dalam daftar
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama Lengkap Karyawan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Designation 
                        </td>
                        <td className="px-3 py-2">
                        Jabatan/ responsibilities karyawan di perusahaan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Departement 
                        </td>
                        <td className="px-3 py-2">
                        Departemen tempat karyawan bekerja
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <BulkAssignment />
      </aside>
    </div>
  );
}