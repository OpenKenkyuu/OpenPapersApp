import { getDefaultWallets } from '@rainbow-me/rainbowkit';
import { configureChains, createClient, mainnet } from 'wagmi';
import { polygonMumbai } from 'wagmi/chains';
import { publicProvider } from 'wagmi/providers/public';

const { chains, provider } = configureChains(
    [polygonMumbai, mainnet],
    [
        publicProvider(),
    ]
);

const { connectors } = getDefaultWallets({
    appName: 'Open Papers Protocol',
    chains
});

export const client = createClient({
    autoConnect: false,
    connectors,
    provider
})

export { chains }