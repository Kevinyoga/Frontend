import ExpenseSidebar from "@/app/sidebar-expense/sidebar3";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside className="h-screen sticky top-0">
        <Sidebar />
      </aside>

      {/* Konten utama + sidebar kanan */}
      <div className="flex flex-1">
        {/* Main Content */}
        <main className="flex-1 p-10 text-left overflow-y-auto">
          {/* Judul */}
          <h1
            id="exit"
            className="text-2xl md:text-3xl font-bold text-blue-800 mb-6"
          >
            Employee Expense
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
          <div id="tujuan" className="space-y-6 text-gray-700">
            <div>
              <span className="font-semibold">Tujuan halaman</span>
              <div className="ml-6 mt-1 space-y-1">
                <p>
                  Panduan Penggunaan Halaman Employee Expence Halaman ini menampilkan daftar seluruh Pemgajuan klaim biaya karyawan. 
                  Admin atau manjer dapat memantau status, nilai, dan detail pengajuan klaim secara real-time.
                </p>
              </div>
            </div>

            <div>
              <span id="tabel" className="tips font-semibold">
                Tabel Data Pengajuan
              </span>
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
                        Reff ID
                      </td>
                      <td className="px-3 py-2">
                        ID referensi unik untuk setiap klaim.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">
                        Date
                        </td>
                      <td className="px-3 py-2">
                        Tanggal pengajuan klaim.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">
                        Title
                        </td>
                      <td className="px-3 py-2">
                        Judul atau keterangan klaim.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">Employee</td>
                      <td className="px-3 py-2">
                        Nama karyawan yang mengajukan.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">Amount</td>
                      <td className="px-3 py-2">
                        Jumlah uang yang di Klaim.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">Approver Name</td>
                      <td className="px-3 py-2">
                        Nama atasan yang menyetujui.
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">Status</td>
                      <td className="px-3 py-2">
                        Status pengajuan (<span className="text-green-600">Approved, Reject, Disbursed</span>).
                      </td>
                    </tr>
                    <tr className="border-b">
                      <td className="font-medium px-3 py-2">Action</td>
                      <td className="px-3 py-2">
                        Tombol untuk melihat detail klaim (ikon tiga garis horizontal)
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div id="indicator" className="indicator">
                  <span className="font-semibold">Indikator Status</span>
                  <div className="ml-6 mt-1 space-y-1">
                    <p>Distriburded : Dana telah di cairkan.</p>
                    <p>Approved : Pengajuan telah di setujui.</p>
                    <p>Rejected : pengajuan di tolak.</p>
                  </div>
                </div>
              </div>
            </div>

            <div id="tips" className="tips space-y-6 text-gray-700">
              <span id="aksi" className="font-semibold">Tips Penggunaan</span>
              <div className="ml-6 mt-1 space-y-1">
                <p>Gunakan filter untuk mempercepat pencairan berdasarkan status,tanggal,atau nama.</p>
                <p>Klik tombol action (tiga garis horizontal)untuk melihat atau mengedit detail klaim.</p>
                <p>Selalu pastikan klaim disertai bukti pendukung untuk mempercepat proses persetujuan dan pencairan</p>
              </div>
            </div>
          </div>
        </main>
        <aside className="h-screen sticky top-0">
          <ExpenseSidebar />
        </aside>
      </div>
    </div>
  );
}