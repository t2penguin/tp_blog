import { AppProps } from 'next/app'
import '../styles/index.css'

import { ChakraProvider } from '@chakra-ui/react'
import 'zenn-content-css';
import { useEffect } from 'react';

export default function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    import("zenn-embed-elements");
  })
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  )
}
