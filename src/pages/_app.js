// page to the whole app into a provider context
import Providers from "@/Providers/Providers";
import React from "react";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps }) {
  return (
    <ToastContainer>
      <Providers>
        <Component {...pageProps} />
      </Providers>
    </ToastContainer>
  );
}

export default MyApp;
