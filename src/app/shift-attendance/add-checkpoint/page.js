import AddCheckpoint from "@/app/component/add-checkpoint/page";
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
          Data Checkpoint (Checkpoint Location)
        </h1>

        {/* Gambar Preview */}
        <div className="flex gap-6 mb-10">
            <img
            src="/preview30.png"
            alt="Preview Login 30"
            className="preview-image1 rounded shadow-md"
            />
        </div>

        {/* Langkah-Langkah */}
        <div className="indicator">
            <span id="tujuan" className="font-semibold">Tujuan Halaman</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Halaman ini digunakan untuk membuat checkpoint baru yang akan digunakan dalam sistem pemetaan, pelacakan, atau manajemen lokasi.</p>
            </div>
        </div>

        <div className="indicator">
            <span id="nav" className="font-semibold">Checkpoint Name</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Deskripsi: Nama unik untuk checkpoint yang akan anda buat</p>
            <p>Wajib diisi:</p>
            <p>contoh: Gudang A, Pos1, Gerbang Timur</p>
            </div>
        </div>

        <div className="indicator">
            <span id="export" className="font-semibold">Address</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Deskripsi: Alamat Lengkap dari lokasi checkpoint.</p>
            <p>Wajib diisi:</p>
            <p>Contoh : Jl.Soekarno Hatta No.123,Bandung</p>
            </div>
        </div>

        <div className="indicator">
            <span id="back" className="font-semibold">Choose Location (Pilih Lokasi di peta)</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Deskripsi:Anda bisa memilih lokasi langsung dari peta Google Maps</p>
            <p>Cara penggunaan</p>
            <p>klik lokasi pada peta untuk menentukan titik checkpoint.</p>
            <p>Titik merah akan muncul sebagai penanda lokasi</p>
            <p>Secara otomatis, Latitude dan Longitude akan terisi</p>
            </div>
        </div>

        <div className="indicator">
            <span id="tips" className="font-semibold">Latitude dan Longitude</span>
            <div className="ml-6 mt-1 space-y-1">
            <p>Deskripsi:Koordinat geografis darilokasi checkpoint</p>
            <p>Terisi otomatis saat anda memilih titik di peta</p>
            <p>Wajib diisi:</p>
            </div>
        </div>
      </main>
      <aside className="h-screen sticky top-0">
        <AddCheckpoint />
      </aside>
    </div>
  );
}