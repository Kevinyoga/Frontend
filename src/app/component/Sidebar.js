"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Sidebar() {
  const pathname = usePathname();
  const [openMenu, setOpenMenu] = useState(null);

  const menus = [
    {
      name: "Overview",
      children: [
        { name: "Overview", href: "/hrmsdashboard/overview" },
      ],
    },
    {
      name: "Getting Started",
      children: [
        { name: "Intro", href: "/" },
        { name: "Setup", href: "/setup" },
      ],
    },
    {
      name: "Employee Management",
      children: [
        { name: "Table Data dengan Search & Filter", href: "/employeemanage/searchfilter" },
        { name: "Tambah Karyawan", href: "/employeemanage/add" },
        { name: "Import/Export data", href: "/employeemanage/importexport" },
      ],
    },
    {
      name: "Company",
      children: [
        { name: "Overview", href: "/hrmsdashboard/overview" },
      ],
    },
    {
      name: "Claims & Travel",
      children: [
        { name: "New Claim", href: "/claimtravel/new" },
        { name: "History", href: "/claimtravel/history" },
      ],
    },
    {
      name: "Leaves",
      children: [
        { name: "Request Leave", href: "/leaves/request" },
        { name: "Leave History", href: "/leaves/history" },
      ],
    },
    {
      name: "Payroll",
      children: [
        { name: "Salary Slip", href: "/payroll/slip" },
        { name: "Reports", href: "/payroll/reports" },
      ],
    },
    {
      name: "Attendance",
      children: [
        { name: "Daily Log", href: "/attendance/daily" },
        { name: "Summary", href: "/attendance/summary" },
      ],
    },
  ];

  // Buka otomatis menu sesuai halaman aktif
  useEffect(() => {
    menus.forEach((menu, idx) => {
      if (menu.children?.some((child) => child.href === pathname)) {
        setOpenMenu(idx);
      }
    });
  }, [pathname]);

  return (
    <div className="w-64 bg-gray-50 shadow flex flex-col sticky top-0 h-screen overflow-y-auto">
      {/* Judul Sidebar */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-800">HRMS Documentation</h3>
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {menus.map((menu, idx) => (
          <div key={menu.name}>
            {/* Parent Toggle */}
            <button
              onClick={() => setOpenMenu(openMenu === idx ? null : idx)}
              className={`w-full text-left px-4 py-2 rounded-lg transition ${
                openMenu === idx
                  ? "bg-gray-200 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {menu.name}
            </button>

            {/* Submenu */}
            {menu.children && openMenu === idx && (
              <div className="ml-6 mt-1 flex flex-col space-y-1">
                {menu.children.map((child) => (
                  <Link
                    key={child.href}
                    href={child.href}
                    className={`block px-3 py-1 rounded-md text-sm transition ${
                      pathname === child.href
                        ? "bg-gray-100 text-gray-800 font-medium"
                        : "text-gray-500 hover:bg-gray-50"
                    }`}
                  >
                    {child.name}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
    </div>
  );
}