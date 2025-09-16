import AddressContact from "@/app/component/address-contact/page";
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
          Address & Contact
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
            <span id="address" className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form ini digunakan untuk mengisi informasi karyawan baru terkait Waktu mulai kerja,kontrak,dan masa pension.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>Company Email dan preferred Email: Isi dan pilih email yang digunakan untuk komunikasi Utama.</p>
              <p>Current/Permanent Address: Masukan alamat sementara dan tetap.</p>
              <p>status Address: pilih status alamat dari dropdown yang tersedia</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 id="emergency" className="emergency text-xl font-bold text-blue-800 mb-4">
                Emergency Addres & Contact
            </h2>
            <span className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form ini digunakan untuk mengisi informasi karyawan baru terkait Waktu mulai kerja,kontrak,dan masa pension.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>Company Email dan preferred Email: Isi dan pilih email yang digunakan untuk komunikasi Utama.</p>
              <p>Current/Permanent Address:Masukan alamat sementara dan tetap.</p>
              <p>status Address:pilih status alamat dari dropdown yang tersedia</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddressContact />
      </aside>
    </div>
  );
}