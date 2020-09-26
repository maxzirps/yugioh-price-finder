import { ChakraProvider } from "@chakra-ui/core";

const MyApp = ({ Component, pageProps }) => (
  <ChakraProvider resetCSS>
    <Component {...pageProps} />
  </ChakraProvider>
);

export default MyApp;
