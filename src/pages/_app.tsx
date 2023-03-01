import '../styles/globals.css'
import type { AppProps } from 'next/app'
import NextHead from 'next/head'
import { useEffect, useState } from 'react';

import '@rainbow-me/rainbowkit/styles.css';
import { RainbowKitProvider } from '@rainbow-me/rainbowkit';

import { WagmiConfig } from 'wagmi';
import { chains, client } from '../wagmi';
import Navbar from '../components/Navbar';


export default function App({ Component, pageProps }: AppProps) {
  const [mounted, setMounted] = useState(false)
  useEffect(() => setMounted(true), [])
  return (
    <WagmiConfig client={client}>
      <RainbowKitProvider chains={chains} modalSize="compact">

        <NextHead>
          <title>Open Papers Protocol</title>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </NextHead>

        <div className="font-jetbrains">
          <Navbar />
          {mounted && <Component {...pageProps} />}
        </div>

      </RainbowKitProvider>
    </WagmiConfig >
  )
}
