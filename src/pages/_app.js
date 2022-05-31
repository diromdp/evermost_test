import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { colorModeConfig } from "../lib/chakra";
import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = extendTheme({
  config: colorModeConfig,
})
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
