import { Inter, Poppins } from "next/font/google";
import Header from "./components/Header";
import "./globals.css";

const poppins = Poppins({ weight: ["400", "700"], subsets: ["latin"] });

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "My Next App",
  description: "web development with next.js",
  keywords: "next.js, web development, react, javascript",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header />
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
