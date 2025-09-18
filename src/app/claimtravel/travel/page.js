import Sidebar from "../../component/Sidebar";
import TravelSidebar from "@/app/component/travel/page";

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
          Employee Travel
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview19.png"
            alt="Preview Login 19"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <h2 id="fungsi" className="text-xl font-bold mb-4">
          Fungsi dan Komponen Halaman
        </h2>
        <p>
        Halaman ini digunakan untuk mencatat dan memonitor pengajuan perjalanan dinas oleh karyawan,termasuk detail perjalanan,status approval,dan informasi biaya yang telah di bayarkan.
        </p>

        <div className="indicator">
            <span className="font-semibold">Breadcrumb Navigation</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Menunjukan posisi pengguna saat ini: <span className="text-green-600">Dashboard → Hrms → Claim → Travel</span></p>
            <p>Klik elemen breadcrumb untuk kembali ke menu sebelumnya</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Search Bar</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>di guanakan untuk mencari data perjalanan berdasarkan kata kunci ( nama karyawan,kota,tanggal,dll).</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Tombol Aksi Utama</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>←Back : Kembali ke halaman sebelumnya.</p>
            <p>Filter : Menyaring data berdasrkan kriteria tertentu (mis. tanggal,status,tipe perjalanan).</p>
            <p>Export : Mengekspor data perjalanan ke format seperti Excel/PDF</p>
            <p>+ Add New Travel: Menambah data pengajuab perjalanan baru.</p>
            </div>
        </div>

        {/* Langkah-Langkah */}
        <div className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table id="tabel" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut data
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Reff ID
                        </td>
                        <td className="px-3 py-2">
                        ID referensi unik untuk setiap perjalanan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Date
                        </td>
                        <td className="px-3 py-2">
                        Tanggal perjalanan dimulai
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee
                        </td>
                        <td className="px-3 py-2">
                        Nama karyawan yang melakukan perjalanan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Approver
                        </td>
                        <td className="px-3 py-2">
                        Nama atasanyang menyetujui perjalanan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Destination
                        </td>
                        <td className="px-3 py-2">
                        Rute perjalanan yang ditempuh
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Amount
                        </td>
                        <td className="px-3 py-2">
                        Total biaya perjalanan (dalam Rupiah)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Purpose
                        </td>
                        <td className="px-3 py-2">
                        Tujuan atau alasan perjalanan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Travel Type
                        </td>
                        <td className="px-3 py-2">
                        Jenis perjalanan (misal: Domestic, International)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Status proses pembayaran (Paid process, pending,  dll.)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Action
                        </td>
                        <td className="px-3 py-2">
                        Ikon menu untuk melihat detail, edit atau hapus data perjalanan
                        </td>
                    </tr>
                    </tbody>
                </table>
                <h2 id="panduan" className="indicator text-xl font-bold mb-4">
                    Panduan Penggunaan
                </h2>
                <div  className="indicator">
                    <span className="font-semibold">Melihat Data Perjalanan:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Semua data perjalanan karyawan akan tampil otomatis di tabel.</p>
                    <p>Gunakan fitur search atau filter untuk mencari perjalanan tertentu</p>
                    </div>
                </div>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Menambahkan Perjalanan Baru:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Klik tombol + Add New Travel</p>
                    <p>Isi formulir data perjalanan,seperti nama,tujuan,biaya,dan tujuan perjalanan.</p>
                    </div>
                </div>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Mengelola Perjalanan:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Klik ikon menu ( di kolom Action) untuk melihat atau mengubah data.</p>
                    <p>Pastikan data Amount dan Purpose diisi sesuai kebijakan perusahaan</p>
                    </div>
                </div>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Pantau Status:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Cek kolom status untuk memastikan perjalanan telah di proses atau di bayar.</p>
                    <p>Jika status masih pending.hubungi HR atau Finance Untuk tindak lanjut.</p>
                    </div>
                </div>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Tips Penggunaan:</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Gunakan format biaya dengan benar: RP. 50.000,00 bukan 50K  atau lainya.</p>
                    <p>Pastikan tanggal perjalanan tidak tertukar (mis, pastikan “Minggu, 23/03/3035” tidak mendahului ”Senin,24/03/2025”).</p>
                    <p>Untuk Laporan Bulanan atau audit,gunakan fitur Export</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <TravelSidebar />
      </aside>
    </div>
  );
}
