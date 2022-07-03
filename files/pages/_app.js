import "typeface-oswald";
import "bootstrap/dist/css/bootstrap.min.css";
import "@/css/animate.css";
import "@/css/font-awesome.min.css";
import "@/css/icons.css";
import "@/css/preset.css";
import "@/css/services.css";
import "@/css/theme.css";
import "@/css/Portfolio.css";
import "@/css/responsive.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Head from "next/head";
import { appWithTranslation } from 'next-i18next'
import 'custom-cursor-react/dist/index.css';
import "@/css/SliderBanner.css";




function MyApp({ Component, pageProps }) {

  return <>
    <Head>

      <link rel="shortcut icon" href="/favicon.png" />

      <meta name="description" content="IKONIKS  software company for developing web and mobile applications "></meta>
    </Head>

    <Component {...pageProps} />


  </>;
}

export default appWithTranslation(MyApp);
