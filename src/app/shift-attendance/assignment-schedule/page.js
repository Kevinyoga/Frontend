import Sidebar from "../../component/Sidebar";
import AssignmentSchedule from "@/app/component/assignment-schedule/page";

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
          Add Shift Assigment Bulk
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview39.png"
            alt="Preview Login 39"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicators">
            <span id="status1" className="font-semibold">1.Employee (karyawan)</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Employe Name</p>
            <p>Pilih nama karyawan dari dropdown yang tersedia</p>
            <p>Pastikan karyawan sudah terdaftar dalam sistem.</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status2" className="font-semibold">2.SHIFT DETAILS (detail shift)</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Shift Type Name (Wajib)</p>
            <p>pilih jenis shift yang telah dibuat sebelumnya (contoh:Morning ,Evening,Night).</p>
            <p>jika belum ada,klik link “click here” di panel kanan akan membuat shift types baru</p>
            <p>Star Date (Wajib)</p>
            <p>Tentukan tanggal mulai berlakunya shift.</p>
            <p>Format:YYY-MM-DD.</p>
            <p>End Date (Wajib)</p>
            <p>Tentukan tanggal akhir berlaku shift</p>
            <p>harus berada dalam periode penjadwalan aktif</p>
            <p>Select Days (Wajib)</p>
            <p>Centang hari-hari kerja di mana shift akan berlaku (Misal:Senin hingga Jumat).</p>
            <p>Ignore Holiday Date (Opsional)</p>
            <p>Jika di centang,karyawan tetap bisa check-in meskipun hari tersebut adalah hari libur resmi</p>
            </div>
        </div>

        <div className="indicators">
            <span id="status3" className="font-semibold">3.Panduan Tambahan (Panel kanan)</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Konfigurasi shift Type</p>
            <p>Pastikan Anda telah membuat dan mengatur shift (contoh: pagi, malam, Dll sebelum menetapkan jadwal)</p>
            <p>Holiday</p>
            <p>Jika opsi “Ignore Holiday Date” di centang,karyawan tetap bisa melakukan check-in di hari libur</p>
            <p>Multiple Shift</p>
            <p>Untuk mengizinkan beberapa shift dalam satu hari yang ama,klik “enable here”</p>
            <p>Batasan Tanggal</p>
            <p>Tanggal star dan End harus berada dalam rentang periode penjadwalan aktif di sistem</p>
            <p>Template Jadwal Berulang</p>
            <p>5 hari kerja, 2 hari libur</p>
            <p>Shift malam setiap 3 hari</p>
            <p>Rotasi shift mingguan (minggu 1 pagi,minggu 2 malam, dan lain lain)</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AssignmentSchedule />
      </aside>
    </div>
  );
}