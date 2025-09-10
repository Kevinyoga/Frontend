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
          Salary
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
          <img
            src="/preview9.png"
            alt="Preview dashboard 9"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-6 text-gray-700">
          <div>
            <span className="font-semibold">Deskripsi</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>form ini digunakan untuk mengelola dan mencatat informasi gaji karyawan baru di dalam sistem.</p>
            </div>
          </div>

          <div>
            <span className="font-semibold">Petunjuk Pengisian</span>
            <div className="ml-6 mt-1">
              <p>salary (CTC):masukan total gaji karyawan (cost to company).</p>
              <p>salary currency dan salary mode:pilih mata uang dam kode pembayaran gaji.</p>
              <p>penghasilan tidak kena pajak (PTKP):pilih status KTP sesuai kondisi karyawan.</p>
              <p>BPJS kesehatan & ketenagakerjaan:centang jika karyawan mendapatkan fasilitas tersebut.</p>
              <p>klik save changes setelah selesai mengisi</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}