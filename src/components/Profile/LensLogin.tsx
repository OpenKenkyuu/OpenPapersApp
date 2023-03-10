import { useActiveProfile, useWalletLogin, useWalletLogout } from '@lens-protocol/react';
import { useAccount, useConnect, useDisconnect } from 'wagmi';
import { InjectedConnector } from 'wagmi/connectors/injected';
import ActiveLensProfile from './ActiveLensProfile';
import { FollowProfile } from './Follow';

function LensLogin() {
    const { login, error: loginError, isPending: isLoginPending } = useWalletLogin();
    const { logout, isPending } = useWalletLogout();


    const { isConnected } = useAccount();
    const { disconnectAsync } = useDisconnect();

    const { connectAsync } = useConnect({
        connector: new InjectedConnector(),
    });

    const onLoginClick = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { connector } = await connectAsync();

        if (connector instanceof InjectedConnector) {
            const signer = await connector.getSigner();
            await login(signer);
        }
    };


    if (!isConnected) {
        return (
            <button disabled={isPending} onClick={onLoginClick}>
                Log in
            </button>
        );
    } else {
        return (
            <div>
                <button disabled={isPending} onClick={logout}>
                    Log out
                </button>

                <ActiveLensProfile />
            </div>
        );
    }

}

export default LensLogin;