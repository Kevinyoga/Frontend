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
        { name: "Overview", href: "/" },
      ],
    },
    {
      name: "Getting Started",
      children: [
        { name: "Intro", href: "/gettingstarted" },
      ],
    },
    {
      name: "Employee Management",
      children: [
        { name: "Employee List", href: "/employeemanage/data" },
        { name: "Create New Employee", href: "/employeemanage/new-employee" },
        { name: "Joining", href: "/employeemanage/joining" },
        { name: "Address & Contact", href: "/employeemanage/address" },
        { name: "Attendance", href: "/employeemanage/attendance" },
        { name: "Salary", href: "/employeemanage/salary" },
        { name: "Personal", href: "/employeemanage/personal" },
        { name: "Profile", href: "/employeemanage/profile" },
        { name: "Exit", href: "/employeemanage/exit" },
      ],
    },
    {
      name: "Claims & Travel",
      children: [
        { name: "Employee Expense", href: "/claimtravel/expense" },
        { name: "Create Expense", href: "/claimtravel/addexpense" },
        { name: "Employee Advance", href: "/claimtravel/advance" },
        { name: "Add New Advance", href: "/claimtravel/addadvance" },
        { name: "Expense Claim Type", href: "/claimtravel/expense-type" },
        { name: "Create Expense Claim Type", href: "/claimtravel/add-expense-type" },
        { name: "Employee Travel", href: "/claimtravel/travel" },
        { name: "Create Travel", href: "/claimtravel/add-travel" },
      ],
    },
    {
      name: "Shift & Attendance",
      children: [
        { name: "Shift Attendance Management", href: "/shift-attendance/shift-attendance-management" },
        { name: "Attendance Dashboard", href: "/shift-attendance/attendance-dashboard" },
        { name: "Add Attendance", href: "/shift-attendance/add-attendance" },
      ],
    },
    {
      name: "Company",
      children: [
        { name: "Overview", href: "/hrmsdashboard/overview" },
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