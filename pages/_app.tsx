import type { AppProps } from "next/app";
// components
import MainLayout from "@Layout/mainComponent";
// css
import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <MainLayout>
      <Component {...pageProps} />
    </MainLayout>
  );
};

export default MyApp;
