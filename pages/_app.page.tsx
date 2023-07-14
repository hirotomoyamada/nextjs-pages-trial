import type { AppPropsWithLayout } from 'next/app';
import { UIProvider } from '@yamada-ui/react';

const App = ({ Component, pageProps }: AppPropsWithLayout) => {
  const getLayout = Component.getLayout ?? ((page) => page);

  return (
    // <ChakraProvider>
    <UIProvider>{getLayout(<Component {...pageProps} />)}</UIProvider>
    // </ChakraProvider>
  );
};

export default App;
