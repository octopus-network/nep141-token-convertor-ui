import { ApolloClient, InMemoryCache, gql } from '@apollo/client';
const APIURL = 'https://api.studio.thegraph.com/query//<SUBGRAPH_NAME>/';
export const client = new ApolloClient({
  uri: APIURL,
  cache: new InMemoryCache(),
});
