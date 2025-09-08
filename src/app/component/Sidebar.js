"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const menus = [
    { name: "Getting Started", href: "/" },
    { name: "HRMS Dashboard", href: "/hrmsdashboard" }, // 👈 tidak ada children
    {
      name: "Employee Management",
      href: "/employeemanage",
      children: [
        { name: "Add Employee", href: "/employeemanage/add" },
        { name: "List Employee", href: "/employeemanage/list" },
      ],
    },
    { name: "Attendance", href: "/attendance" },
    { name: "Claims & Travel", href: "/claimtravel" },
    { name: "Leaves", href: "/leaves" },
    { name: "Payroll", href: "/payroll" },
  ];

  return (
    <div className="w-64 h-full bg-gray-50 shadow flex flex-col">
      {/* Judul Sidebar */}
      <div className="p-4 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-800">HRMS Documentation</h3>
      </div>

      <nav className="flex flex-col p-4 space-y-2">
        {menus.map((menu) => (
          <div key={menu.href}>
            {/* Parent Menu */}
            <Link
              href={menu.href}
              className={`block px-4 py-2 rounded-lg transition ${
                pathname === menu.href
                  ? "bg-gray-200 text-gray-900 font-semibold"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {menu.name}
            </Link>

            {/* Submenu */}
            {menu.children && (
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
