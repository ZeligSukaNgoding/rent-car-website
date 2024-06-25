import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/page";
import Footer from "@/components/footer/page";

const poppins = Poppins({ subsets: ["latin"],weight: '400' });

export const metadata = {
  title: "Zelig Trans",
  description: "Working with leading suppliers, we offer great prices on all car groups, including luxury cars, people carriers, minivans and automatic cars.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Navbar/>
        {children}
        <Footer/>
        </body>
    </html>
  );
}
