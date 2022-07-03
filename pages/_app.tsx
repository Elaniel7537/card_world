import type { AppProps } from "next/app";
import Head from "next/head";
// components
import MainLayout from "@layout/mainComponent";
// css
import "@styles/globals.scss";
//store
import { store } from "@app/store";
import { Provider } from "react-redux";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>Game Cards Worlds</title>
      </Head>
      <Provider store={store}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </Provider>
    </>
  );
};

export default MyApp;
