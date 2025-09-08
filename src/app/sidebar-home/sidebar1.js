"use client";

export default function DocSidebar() {
  const sections = [
    { id: "login", title: "Langkah-Langkah Login" },
    { id: "daftar", title: "Langkah-Langkah Daftar" },
    { id: "password", title: "Cara Reset Password" },
  ];

  return (
    <aside className="w-64 bg-gray-50 shadow p-4 rounded-xl h-fit sticky top-4 self-start">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Daftar Isi</h3>
      <nav className="flex flex-col space-y-2">
        {sections.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="px-3 py-2 rounded-md text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition"
          >
            {s.title}
          </a>
        ))}
      </nav>
    </aside>
  );
}
