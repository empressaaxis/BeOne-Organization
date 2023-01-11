// import "../styles/globals.css";
import { useState } from "react";

// import { ChakraProvider } from "@chakra-ui/react";
// import { SessionProvider } from "next-auth/react";
// import { NextSeo } from "next-seo";
import Router from "next/router";
import React from "react";
// import { QueryClient, QueryClientProvider } from "react-query";
// import { ReactQueryDevtools } from "react-query/devtools";

// import Loader from "@components/Loader";
// import SEO from "next-seo.config";
// import { theme } from "styles/theme";

// import * as gtag from "../src/lib/gtag";

function MyApp({ Component, pageProps }) {
  // const queryClient = new QueryClient();

  // const [isLoading, setIsLoading] = useState(false);
  // const handleRouteChange = (url: URL) => {
  //   gtag.pageview(url);
  // };
  // Router.events.on("routeChangeStart", () => {
  //   setIsLoading(true);
  //   handleRouteChange;
  // });
  // Router.events.on("routeChangeComplete", () => {
  //   setIsLoading(false);
  // });

  return (
    <>
      {/* <ChakraProvider resetCSS theme={theme}> */}
      {/* <QueryClientProvider client={queryClient}> */}
      {/* <ReactQueryDevtools initialIsOpen={false} /> */}
      {/* <SessionProvider session={pageProps.session}> */}
      {/* {isLoading && <Loader />} */}
      {/* <NextSeo {...SEO} /> */}
      <Component {...pageProps} />
      {/* </SessionProvider> */}
      {/* </QueryClientProvider> */}
      {/* </ChakraProvider> */}
    </>
  );
}

export default MyApp;
