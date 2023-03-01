import {
    SignInWithLens, Theme, Size
} from '@lens-protocol/widgets-react'

const LensLogin = () => {
    async function onSignIn(tokens, profile) {
        console.log('tokens: ', tokens)
        console.log('profile: ', profile)
    }
    return (
        <SignInWithLens onSignIn={onSignIn} theme={Theme.green} size={Size.medium} />
    );
}

export default LensLogin;