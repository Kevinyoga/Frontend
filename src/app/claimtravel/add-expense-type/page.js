import AddClaimTypeSidebar from "@/app/component/add-expense-type/page";
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
          Create Expense Claim Type
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview18.png"
            alt="Preview Login 18"
            className="preview-image1 rounded shadow-md"
          />
        </div>

        {/* Langkah-Langkah */}
        <h2 id="tabel" className="text-xl font-bold mb-4">
          Formulir Tambah Tipe Klaim
        </h2>

        {/* Langkah-Langkah */}
        <div className="tabel">
            <div className="ml-6 mt-2 overflow-x-auto">
                <table className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="w-56 font-medium px-3 py-2">
                        Claim Type Name
                        </td>
                        <td>
                        Text (Required)
                        </td>
                        <td className="px-3 py-2">
                        Nama tipe klaim baru, contoh Internet, Entertainment, dll.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Status
                        </td>
                        <td>
                        Dropdown
                        </td>
                        <td className="px-3 py-2">
                        Pilihan: <span className="text-green-600">Enable</span>(Aktif) atau <span className="text-red-600">Disable</span>(Tidak Aktif).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Description
                        </td>
                        <td>
                        Textarea (optional)
                        </td>
                        <td className="px-3 py-2">
                        Penjelasan singkat tentang tipe klaim tersebut.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Full Form (optional)
                        </td>
                        <td>
                        Tombol Sekunder
                        </td>
                        <td className="px-3 py-2">
                        Bisa diarahkan ke tampilan form lengkap jika ada field tambahan (opsional tergantung fitur).
                        </td>
                    </tr>
                    </tbody>
                </table>
                <div id="catatan" className="indicator">
                    <span className="font-semibold">Rekomendasi Validasi</span>
                    <div className="ml-6 mt-1 space-y-1">
                    <p>Pastikan Claim Type Name tidak kosong dan tidak di duplikat</p>
                    <p>Validasi status agar sesuai (<span className="text-green-600">Enable</span> atau <span className="text-red-600">Disable</span> saja).</p>
                    <p>Gunakan notifikasi jika berhasil/tidak berhasil simpan data.</p>
                    </div>
                </div>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddClaimTypeSidebar />
      </aside>
    </div>
  );
}
