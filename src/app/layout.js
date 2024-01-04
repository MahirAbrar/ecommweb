import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import GlobalState from "../context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <GlobalState>
          <Navbar />
          <ToastContainer />
          <main>{children}</main>
        </GlobalState>
      </body>
    </html>
  );
}
