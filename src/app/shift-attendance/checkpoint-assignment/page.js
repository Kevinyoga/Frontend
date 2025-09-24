import Sidebar from "../../component/Sidebar";
import CheckpointAssignment from "@/app/component/checkpoint-assignment/page";

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
          Add Checkpoint Assignment
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview33.png"
            alt="Preview Login 33"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk menugaskan checkpoint ke karyawan yang di pilih berdasarkan filter yang tersedia. Checkpoint assignment memungkinkan sistem mengetahui siapa yang bertanggung jawab melakukan pengecekan di lokasi tertentu.</p>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Select Employee</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>form ini menyediakan beberapa fitur untuk membantu mempermudah pencarian karyawan yang akan diberikan tugas checkpoint</p>
                <table id="tabel1" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Department
                        </td>
                        <td className="px-3 py-2">
                        Filter berdasarkan Departemen misal: IT, Finance, Marketing, dsb.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Company
                        </td>
                        <td className="px-3 py-2">
                        Filter berdasarkan perusahaan jika terdapat lebih dari satu entitas (misalnya anak perusahaan).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Select Designation
                        </td>
                        <td className="px-3 py-2">
                        Filter berdasarkan jabatan (misal: Software Developer, Manager, dsb).
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Search (Keyword)
                        </td>
                        <td className="px-3 py-2">
                        Cari nama karyawan secara manual berdasarkan nama atau kata kunci lainnya.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>

        <div className="tabel">
            <span className="font-semibold">Tabel Daftar Karyawan</span>
            <div className="ml-6 mt-2 overflow-x-auto">
                <p>Menampilkan daftar karyawan yang bisa ditugaskan checkpoint</p>
                <table id="tabel2" className="min-w-15 border border-gray-300 text-sm">
                    <tbody>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Checkbox
                        </td>
                        <td className="px-3 py-2">
                        Centang untuk memilih karyawan yang akan diberi tugas checkpoint. Bisa pilih lebih dari satu. 
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        No.
                        </td>
                        <td className="px-3 py-2">
                        Nomor urut tampilan karyawan.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Employee Name
                        </td>
                        <td className="px-3 py-2">
                        Nama lengkap karyawan
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Grade
                        </td>
                        <td className="px-3 py-2">
                        Tingkatan atau level jabatan. (saat ini ditandai "N/A").
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Designation
                        </td>
                        <td className="px-3 py-2">
                        Jabatan karyawan, seperti Software Seveloper, IT Manager, dsb.
                        </td>
                    </tr>
                    <tr className="border-b">
                        <td className="font-medium px-3 py-2">
                        Departemen
                        </td>
                        <td className="px-3 py-2">
                        Departemen tempat kerja karyawan.
                        </td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <CheckpointAssignment />
      </aside>
    </div>
  );
}