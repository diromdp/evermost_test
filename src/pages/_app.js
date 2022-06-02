import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { PersistGate } from 'redux-persist/integration/react';
import { useStore } from 'react-redux';

import { colorModeConfig } from "../lib/chakra";
import { wrapper } from '../store/store';

import '../styles/globals.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const theme = extendTheme({
   config: colorModeConfig,
   styles: {
      global: {
         body: {
            bg: 'blackAlpha.600',
         },
      },
   },
})

function MyApp({ Component, pageProps }) {
   const store = useStore((state) => state);
   
   return process.browser ? (
      <>
         <PersistGate persistor={store.__persistor} loading={<div>Loading</div>}>
            <ChakraProvider theme={theme}>
               <Component {...pageProps} />
            </ChakraProvider>
         </PersistGate>
      </>
   ) : (
      <>
         <PersistGate persistor={store}>
            <ChakraProvider theme={theme}>
               <Component {...pageProps} />
            </ChakraProvider>
         </PersistGate>
      </>

   )
}

export default wrapper.withRedux(MyApp);
