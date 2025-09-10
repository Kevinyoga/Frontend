import Sidebar from "../component/Sidebar";
import Link from "next/link";

export default function HRMSDashboard() {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-white to-pink-50">
      {/* Sidebar kiri */}
      <aside>
        <Sidebar />
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-10 text-left">
        {/* Judul */}
        <h1 className="hrms text-2xl md:text-3xl font-bold text-blue-800 mb-6">
          Overview Penggunaan HRMS Dashboard
        </h1>

        {/* Image/gambar */}
        <div className="flex gap-6 mb-10">
          <img
            src="preview2.png"
            alt="Preview dashboard 2"
            className="preview-image2 rounded shadow-md"
          />
        </div>

        {/* Main Content */}
        <div className="space-y-8 text-gray-700 max-w-4xl">
          {/* Quick Overview */}
          <Section
            title="Quick Overview"
            items={[
              { name: "Grafik Gender & Departemen", link: "/hrmsdashboard/gender-dept" },
              { name: "Status Karyawan (Aktif/Non-aktif)", link: "/overview/status" },
            ]}
            color="white"
          />

          {/* Menu Navigasi */}
          <Section
            title="Menu Navigasi"
            items={[
              { name: "Employee", link: "/menu/employee" },
              { name: "Claim & Travel", link: "/menu/claim-travel" },
              { name: "Leaves", link: "/menu/leaves" },
              { name: "Payroll", link: "/menu/payroll" },
              { name: "Company", link: "/menu/company" },
              { name: "Settings", link: "/menu/settings" },
            ]}
            color="white"
          />

          {/* Quick Actions */}
          <Section
            title="Quick Actions"
            items={[
              { name: "New Employee", link: "/actions/new-employee" },
              { name: "Add Expense Claim", link: "/actions/expense-claim" },
              { name: "Create Salary Slip", link: "/actions/salary-slip" },
              { name: "New Holiday List", link: "/actions/holiday-list" },
            ]}
            color="white"
          />

          {/* Employee Management */}
          <Section
            title="Employee Management"
            items={[
              { name: "Tabel data dengan Search & Filter", link: "/employee/table" },
              { name: "Form tambah karyawan (10 section)", link: "/employee/add" },
              { name: "Import/Export data", link: "/employee/import-export" },
            ]}
            color="white"
          />

          {/* Claim Management */}
          <Section
            title="Claim Management"
            items={[
              { name: "Dashboard ringkasan klaim", link: "/claims/dashboard" },
              { name: "Employee Expense & Advance", link: "/claims/expense" },
              { name: "Travel Request & Attachment", link: "/claims/travel" },
            ]}
            color="white"
          />

          {/* Tips */}
          <div>
            <span className="font-semibold">Tips:</span>
            <div className="ml-6 mt-1 space-y-1">
              <p>Isi field required (*), Lampirkan bukti transaksi</p>
              <p>Gunakan filter untuk analisis, Cek status approval berkala</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

function Section({ title, items, color }) {
  return (
    <div>
      <span className="font-semibold block mb-3">{title}:</span>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {items.map((item, idx) => (
          <Link key={idx} href={item.link}>
            <div
              className={`cursor-pointer rounded-2xl shadow-md bg-white hover:bg-${color}-50 p-4 transition-all duration-200 border border-gray-200 hover:shadow-lg`}
            >
              <p className="text-gray-800 font-medium">{item.name}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
