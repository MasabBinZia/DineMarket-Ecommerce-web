import "./globals.css";
import { Inter } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Credits from "@/components/layout/Credits";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Dine Market",
  description: "E-Commerce Hackthon-01",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        {/* HomePage */}
        <main className="">{children}</main>
        <Footer />
        <Credits/>
      </body>
    </html>
  );
}
