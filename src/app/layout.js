import { Inter } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "my car blog",
  description: "the blog for car enthusiasts",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <ToastContainer
          autoClose={4500}
          hideProgressBar={true}
          closeOnClick
          rtl={true}
          theme="dark"
        />
      </body>
    </html>
  );
}
