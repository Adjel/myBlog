"use client";
// page to the whole app into a provider context
import Providers from "@/Providers/Providers";
import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <ToastContainer
        autoClose={4500}
        hideProgressBar={true}
        closeOnClick
        rtl={true}
        theme="dark"
      />
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
