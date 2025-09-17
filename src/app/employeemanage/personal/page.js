import PersonalSidebar from "@/app/component/personal-sidebar/page";
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
          Personal
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview10.png"
            alt="Preview dashboard 10"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span id="desc" className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form untuk melengkapi data personal karyawan,termasuk foto dan informasi medis dasar.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>employee picture: upload foto karyawan jika tersedia.</p>
              <p>marital status,Blood Group:pilih status pernikahan dan golongan darah.</p>
              <p>penghasilan tidak kena pajak (PTKP):pilih status KTP sesuai kondisi karyawan.</p>
              <p>BPJS kesehatan & ketenagakerjaan:centang jika karyawan mendapatkan fasilitas tersebut.</p>
              <p>family background & health Detail;isi latar belakang keluarga dan detail kesehatan yang di perlukan.</p>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <h2 id="passport" className="emergency text-xl font-bold text-blue-800 mb-4">
                Passport details
            </h2>
            <span className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>bagian ini digunakan untuk mengisi detail paspor dan pajak karyawan, khususnya jika karywan adalah ekspatriat.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>passport number,date of issued,Valid Up To,Place of issued: masukan detail paspor sesuai data resmi.</p>
              <p>tax ID (NPWP): masukan NPWP jika diperlukan.</p>
            </div>
          </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <PersonalSidebar />
      </aside>
    </div>
  );
}