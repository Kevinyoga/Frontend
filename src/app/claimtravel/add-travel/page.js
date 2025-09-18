import AddTravelSidebar from "@/app/component/add-travel/page";
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
          Create Employee Travel
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview20-1.png"
            alt="Preview Login 20-1"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page" className="indicator">
            <span className="font-semibold">Form Awal Add Travel (Employee Details)</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Komponen Utama</h4>
            <p>Input Nama Travel/Judul Perjalanan.</p>
            <p>Tanggal berangkat & tanggal kembali : Menentukan durasi perjalanan.</p>
            <p>Jenis Perjalanan: Bisa berupa dropdown atau pilihan seperti dinas, pribadi, dll.</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Tujuan Halaman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>menangkap informasi dasar mengenai perjalanan yang akan dibuat.</p>
            </div>
        </div>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview20-2.png"
            alt="Preview Login 20-2"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page2" className="indicator">
            <span className="font-semibold">Tambah Perseta Perjalanan</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Komponen Utama</h4>
            <p>Tabel atau daftar nama nama peserta yang di tambahkan.</p>
            <p>Tombol “Tambah Peserta” untuk menambahkan pegawai atau pengguna ke dalam perjalanan ini.</p>
            <p>Biasanya juga ada validasi agar tidak ada peserta duplikat.</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Tujuan Halaman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Mendaftarkan sipa saja yang ikut dalam perjalnan tersebut.</p>
            </div>
        </div>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview20-3.png"
            alt="Preview Login 20-3"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div id="page3" className="indicator">
            <span className="font-semibold">Tambah Itinery / Rute Perjalanan</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Komponen utama:</h4>
            <p>Tanggal & Waktu Aktivitas.</p>
            <p>Tujuan / Lokasi kunjungan.</p>
            <p>Keterangan atau catatan kegiatan (misalnya: rapat, survei lokasi,dll).</p>
            <p>Tombol untuk menambahkan beberapa baris itinerary.</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Tujuan Halaman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Menentukan jadwal dan aktivitas selama perjalanan.</p>
            </div>
        </div>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview20-4.png"
            alt="Preview Login 20-4"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        <div page="page4" className="indicator">
            <span className="font-semibold">Tambah Biaya / Estimasi Pengeluaran</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Komponen utama:</h4>
            <p>Jenis biaya (transportasi, penginapan, makan , dll).</p>
            <p>Jumlah biaya dan satuan.</p>
            <p>Mungkin juga ada kolom untuk upload bukti atau rincian.</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Tujuan Halaman ini</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Mengelola estimasi pengeluaran atau klaim biaya selama perjalanan.</p>
            </div>
        </div>

        <div className="indicator">
            <span className="font-semibold">Keterkaitan Antar Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <h4>Semua halaman ini merupakan satu rangkaian proses dalam fitur “Add Travel”:</h4>
            <p>Formulir  Informasi Perjalanan → dasar data perjalanan.</p>
            <p>Peserta Perjalanan → siapa yang ikut</p>
            <p>itenerary / jadwal perjalanan → apa yang dilakukan, kapan, dan di mana.</p>
            <p>Estimasi Biaya → kebutuhan angaran</p>
            <p>Biasanya disusun dalam multi-step form (wizard) atau tab-step UI yang diakhiri dengan tombol Submit / Simpan Perjalanan.</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddTravelSidebar />
      </aside>
    </div>
  );
}
