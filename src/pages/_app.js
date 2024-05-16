// page to the whole app into a provider context
import Providers from "@/Providers/Providers";
import React from "react";

function MyApp({ Component, pageProps }) {
  return (
    <Providers>
      <Component {...pageProps} />
    </Providers>
  );
}

export default MyApp;
