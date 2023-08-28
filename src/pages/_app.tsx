import Head from "next/head";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "../theme";
import { AppProps } from "next/app";
import "./../components/Logo/style.css";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Ryan Ruh - Software Developer</title>
        <meta
          name="description"
          content="I'm Ryan Ruh, a self-taught Software developer, interested in the web, JS lover"
        />
        <meta name="language" content="English" />
        <meta name="author" content="Ryan Ruh" />

        {/* Open Graph / Linkedin / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://RyanRuh.dev/" />
        <meta property="og:title" content="Ryan Ruh | Back-end developer" />
        <meta
          property="og:description"
          content="Hello world! I'm Ryan Ruh, a self-taught Software developer, JS lover."
        />
        <meta property="og:image" content="https://RyanRuh.dev/banner.svg" />
        <meta property="og:image:alt" content="Ryan Ruh" />
        <meta property="og:image:type" content="image/svg+xml" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:locale" content="en_US" />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://RyanRuh.dev/" />
        <meta property="twitter:site" content="@RyanRuh" />
        <meta
          property="twitter:title"
          content="Ryan Ruh | Software developer"
        />
        <meta
          property="twitter:description"
          content="Hello world! I'm Ryan Ruh, a self-taught Software develop, JS lover."
        />
      </Head>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} />
      </ChakraProvider>
    </>
  );
}

export default MyApp;
