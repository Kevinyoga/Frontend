import EmployeeList from "@/app/component/sidebar-emplist/page";
import Sidebar from "../../component/Sidebar";

export default function EmployeeManagement() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri biasa */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content otomatis geser */}
      <main className="flex-1 p-10 text-left">
        {/* Judul */}
        <h1 className="text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Employee List
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview5.png"
            alt="Preview dashboard 5"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span id="desc" className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Halaman ini meanampilkan seluruh data karyawan. dilengkapi fitur pencarian,filter,ekspor,data,dan tombol tambah karywan baru.</p>
            </div>
          </div>

          <div>
            <span id="list" className="font-semibold">Menu Utama:</span>
            <div className="ml-6 mt-1">
              <p>Gunakan kolom SEARCH untuk pencarian karyawanImport/export Data untuk mengelola data masal klik ADD NEW EMPLOYEE untuk menambah karyawan baru. Status aktif karyawan ditampikan pada kolom paling kanan.</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <EmployeeList />
      </aside>
    </div>
  );
}