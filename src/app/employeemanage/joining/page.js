import JoiningEmployee from "@/app/component/joining-employee/page";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left text-gray-800">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Joining Employee
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview7.png"
            alt="Preview dashboard 7"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span id="desc" className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form ini digunakan untuk mengisi informasi karyawan baru terkait Waktu mulai kerja,kontrak,dan masa pension.</p>
            </div>
          </div>

          <div>
            <span id="petunjuk" className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>confirmation, exit notice, offer,contract End,Date of Retirement:</p>
              <p>Masukan tanggal sesuai format yang di minta(dd/mm/yyyy).</p>
              <p>pastikan seluruh data diisi dengan benar sebelum klik Save Changes.</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <JoiningEmployee />
      </aside>
    </div>
  );
}