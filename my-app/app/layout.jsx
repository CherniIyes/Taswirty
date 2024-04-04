import { Inter } from "next/font/google";
import "../styles/globals.css"
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Photography",
  description: "Picture The World, Picture The Moment",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div>
          {children}
        </div>
      </body>
    </html>
  );
}
