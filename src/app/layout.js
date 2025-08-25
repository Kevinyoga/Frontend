import "./globals.css";
import Navbar from "../app/component/Navbar";

export const metadata = {
  title: "Duluin HRMS Docs",
  description: "Dokumentasi resmi HRMS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        {/* Navbar ditaruh di sini */}
        <Navbar />
        {/* Page content */}
        {children}
      </body>
    </html>
  );
}
