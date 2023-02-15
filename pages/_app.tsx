import '../styles/globals.css'
import type { AppProps } from 'next/app'

import '@rainbow-me/rainbowkit/styles.css';
import {
  getDefaultWallets,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { configureChains, createClient, WagmiConfig } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
  [polygonMumbai],
  [
    publicProvider(),
  ]
);

const { connectors } = getDefaultWallets({
  appName: 'Open Papers Protocol',
  chains
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider
})

export default function App({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig >
  )
}
