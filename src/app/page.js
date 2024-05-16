"use client";
import Providers from "@/Providers/Providers";
import Login from "@/pages/Login";
import { ToastContainer } from "react-toastify";

export default function Page() {
  return (
    <>
      <Providers>
        <Login />
      </Providers>
    </>
  );
}
