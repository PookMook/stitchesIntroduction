
import type { AppProps } from 'next/app';
import { Global } from 'ui/stitches.config';
import * as React from 'react';

function App({ Component, pageProps }: AppProps) {

    Global();
  return (
        <Component {...pageProps} />
  );
}
export default App;
