import { ApolloClient, InMemoryCache, gql } from '@apollo/client'

const API_URL = 'https://api.lens.dev'

/* create the API client */
export const apolloClient = new ApolloClient({
  uri: API_URL,
  cache: new InMemoryCache()
})

export const challenge = gql`
  query Challenge($address: EthereumAddress!) {
    challenge(request: { address: $address }) {
      text
    }
  }
`

export const authenticate = gql`
  mutation Authenticate(
    $address: EthereumAddress!
    $signature: Signature!
  ) {
    authenticate(request: {
      address: $address,
      signature: $signature
    }) {
      accessToken
      refreshToken
    }
  }
`

export const getDefaultProfile = gql`
  query DefaultProfile($request: DefaultProfileRequest!) {
    defaultProfile(request: $request) {
      id
    }
  }
`