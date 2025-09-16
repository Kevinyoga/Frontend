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
          Panduan Penggunaan Halaman Create Employee Expense
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
          Halaman Ini digunakan oleh karyawan atau admin untuk membuat pengajuan klaim biaya baru,seperti reimbursement perjalanan dinas, pembelian perlengkapan kerja, dll
        </p>
        <ol className="list list-decimal list-inside space-y-2 text-gray-700">
          <li>
            <span className="font-semibold">Expense Tittle</span>
            <p>
            berisi judul pengajuan klaim,misalnya: “Pembelian ATK”, “Reimburse Transportasi”,dll. (Wajib di isi)
            </p>
          </li>
          <li>
            <span className="font-semibold">Employee Name</span>
            <p>
            pilih nama karyawan yang mengajukan expense
            </p>
            <p>
            biasanya berupa dropdown dari daftar user/karyawan aktif.
            </p>
          </li>
          <li>
            <span className="font-semibold">Expense Approver</span>
            <p>
            pilih nama atasan atau pihak yang akan menyetujui klaim ini. (Wajib di isi)
            </p>
          </li>
          <li>
            <span className="font-semibold">Description</span>
            <p>
            Penjelasan tambahan mengenai pengajuan klaim misalnya alasan pembelian, lokasi kegiatan, dsb
            </p>
          </li>
          <li>
            <span className="font-semibold">Status</span>
            <p>
            pilihan status awal dari klaim:
            </p>
            <p>
            draft:belum di ajukan (masih di edit)
            </p>
            <p>
            Status lainya mungkin tersedia setelah pengajuan (misal:Submitted,Approved,Rejected)
            </p>
          </li>
        </ol>

        {/* Langkah-Langkah */}
        <div className="tabel">
            <h2 id="login" className="text-xl font-bold mb-4">
            Total Detail Pengeluaran(EXPENSES)
            </h2>
            <p>
            Di bagian bawah,terdapat tabel unruk mencatat detail transaksi klaim.
            </p>
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        No
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut entri
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Expense Date
                        </td>
                        <td className="px-3 py-2">
                        Tanggal Terjadinya pengeluaran.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Expense Claim Type
                        </td>
                        <td className="px-3 py-2">
                        Jenis pengeluaran (transportasi, akomodasi, dll).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Description
                        </td>
                        <td className="px-3 py-2">
                        Keterangan setiap Transaksi
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Amount
                        </td>
                        <td className="px-3 py-2">
                        Jumlah uang yang di Keluarkan.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Approver Name</td>
                        <td className="px-3 py-2">
                        Nama atasan yang menyetujui.
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="indicator" className="indicator">
                    <span className="font-semibold">Tips Penggunaan</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>pastikan mengisi semua kolom yang bertanda “Required”.</p>
                    <p>Gunakan deskripsi yang jelas agar approver memahami kebutuhan klaim.</p>
                    <p>Tambahkan bukti pengeluaran (attachment) untuk mempercepat proses persetujuan</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
      </aside>
    </div>
  );
}
