import { ApolloClient, InMemoryCache } from '@apollo/client';
import { IndexerEndpoint } from './config';
import { offsetLimitPagination } from './utils';

export const setupApolloClient = () => {
  const cache = setupCache();
  const uri = IndexerEndpoint.Test;

  return new ApolloClient({
    uri,
    cache,
  });
};

const setupCache = () => {
  return new InMemoryCache({
    typePolicies: {
      ConversionPool: {
        keyFields: ['id'],
      },
      Query: {
        fields: {
          conversionPools: {
            ...offsetLimitPagination(['orderBy', 'orderDirection', 'where']),
          },
        },
      },
    },
  });
};
