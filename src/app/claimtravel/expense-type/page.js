import Sidebar from "../../component/Sidebar";
import ClaimTypeSidebar from "@/app/component/expense-sidebar/page";

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
          Halaman Expense Type
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview17.png"
            alt="Preview Login 17"
            className="preview-image1 rounded shadow-md"
          />
        </div>

        {/* Langkah-Langkah */}
        <h2 id="tabel" className="text-xl font-bold mb-4">
          Tujuan
        </h2>
        <p>
        Halaman ini digunakan untuk mengelola jenis jenis pengeluaran (expense) yang fapat diklaim oleh karyawan,seperti akomondasi,transportasi,atau konsumsi selama perjalanan dinas atau kegiatan kantor lainya.
        </p>

        {/* Langkah-Langkah */}
        <div className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No.
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut baris. 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Expense Claim Type
                        </td>
                        <td className="px-3 py-2">
                        Jenis klaim pengeluaran
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="catatan" className="indicator">
                    <div className="ml-6 mt-2 space-y-2">
                        <div className="flex">
                            <span className="w-40 font-medium">Accomodation (Akomondasi/Penginapan)</span>
                        </div>
                        <div className="flex">
                            <span className="w-40 font-medium">Transportation (Transportasi)</span>
                        </div>
                        <div className="flex">
                            <span className="w-40 font-medium">Meals (makan/Konsumsi)</span>
                        </div>
                        <div className="ml-6 mt-1 text-color-black space-y-1">
                            <p>Deskripsi: Penjelasan tambahan mengenai tipe klaim (Kolom ini digunakan untuk menulis deskripsi expense type).</p>
                            <p>Status: Menampilkan apakah jenis klaim sudah aktif atau tidak:</p>
                            <p>Active: Berarti bisa digunakan dalam formulir klaim</p>
                            <p>Action: Tombol tindakan seperti: Edit & Hapus</p>
                        </div>
                    </div>
                </div>
                <div id="indicator" className="indicator">
                    <span className="font-semibold">Validasi & Tips Implementasi</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Field dengan label Required wajib diisi sebelum form bisa di simpan</p>
                    <p>Gunakan dropdown atau autocomplete untuk kolom “Employee Name” dan “Claim Approvee”</p>
                    <p>Tambahkan notifikasi error inline jika ad field kosong saat pengguna klik “save changes”</p>
                    <p>idealnya ,sistem akan otomatis membuat Reff ID saat data disimpan untuk tracking</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <ClaimTypeSidebar />
      </aside>
    </div>
  );
}
