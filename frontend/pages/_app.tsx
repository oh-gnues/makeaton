import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Layout>
        <Component {...pageProps} />
      </Layout>

      <NavBar/>
    </>
  );
}

export default MyApp;