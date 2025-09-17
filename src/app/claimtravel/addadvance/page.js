import AddSidebar from "@/app/component/add-advance/page";
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
          Create Employee Advance
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview16.png"
            alt="Preview Login 16"
            className="preview-image1 rounded shadow-md"
          />
        </div>

        {/* Langkah-Langkah */}
        <h2 id="login" className="text-xl font-bold mb-4">
          Tujuan Halaman
        </h2>
        <p>
          Form ini digunakan untuk mengajukan permintaan uang muka (advance) oleh karyawan untuk keperluan tertentu sebelum biaya tersebut terjadi.
        </p>

        {/* Langkah-Langkah */}
        <div id="tabel" className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Dropdown untuk memilih nama karyawan yang mengajukan 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Claim Approver
                        </td>
                        <td className="px-3 py-2">
                        Nama atasan atau pihak yang akan menyetujui permintaan advance ini.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Amount
                        </td>
                        <td className="px-3 py-2">
                        Jumlah uang muka yang diminta, wajib di isi dan hanya angka.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td className="px-3 py-2">
                        Status pengajuan: Draft, Submitted, Approved, Rejected, dll.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Purpose
                        </td>
                        <td className="px-3 py-2">
                        Alasan atau tujuan dari permintaan uang muka (misal: perjalanan dinas atau pembelian barang)
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Repay Unclaimed From Salary
                        </td>
                        <td className="px-3 py-2">
                        Opsi radio untuk menyatakan apakah sisa uang muka yang tidak digunakan akan dipotong dari gaji:
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="catatan" className="indicator">
                    <div className="ml-6 mt-2 space-y-2">
                      <div className="flex">
                        <span className="w-40 font-medium">Yes</span>
                        <span>Akan di potong otomatis dari gaji</span>
                      </div>
                      <div className="flex">
                        <span className="w-40 font-medium">No</span>
                        <span>Tidak di potong dari gaji</span>
                      </div>
                      <div className="flex">
                        <span className="w-40 font-medium">payment Menthod:</span>
                        <span>pilih metode pembayaran uang muka, misalnya:</span>
                      </div>
                      <div className="flex">
                        <span className="w-40 font-medium">Transfer Bank</span>
                      </div>
                      <div className="flex">
                        <span className="w-40 font-medium">Tunai</span>
                      </div>
                      <div className="flex">
                        <span className="w-40 font-medium">E-Wallet,dll.</span>
                      </div>
                      <div className="ml-6 mt-1 text-color-black space-y-1">
                      <p>Attach File : Upload file pendukung,seperti surat permohonan,estimasi biaya,dsb</p>
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
        <AddSidebar />
      </aside>
    </div>
  );
}
