import type { AppProps } from "next/app";
import Head from "next/head";
// components
import MainLayout from "@layout/mainComponent";
// css
import "@styles/globals.scss";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Game Cards Worlds</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </>
  );
};

export default MyApp;
