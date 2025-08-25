"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const menu = [
    { name: "Home", path: "/" },
    { name: "Documentation", path: "/documentation" },
  ];

  return (
    <nav className="bg-white border-b p-4 flex items-center justify-between">
      {/* Logo kiri */}
      <div className="font-bold text-xl">DULUIN HRMS</div>

      {/* Menu kanan */}
      <div className="flex gap-4">
        {menu.map((item) => {
          const isActive = pathname === item.path;
          return (
            <Link key={item.name} href={item.path}>
              <span
                className={`px-3 py-1 rounded ${
                  isActive
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 hover:bg-gray-200"
                }`}
              >
                {item.name}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}