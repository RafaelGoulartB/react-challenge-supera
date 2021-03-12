import Head from "next/head";
import { DefaultSeo } from "next-seo";
import ThemeContainer from "../contexts/theme/theme-container";
import seoConfig from "../config/seo";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ThemeContainer>
        <DefaultSeo {...seoConfig} />
        <Component {...pageProps} />
      </ThemeContainer>
    </>
  );
}

export default MyApp;
