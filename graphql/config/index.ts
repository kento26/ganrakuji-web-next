import { GraphQLClient } from 'graphql-request';
import { getSdk } from 'graphql/generated/client';

export const graphQLClient = new GraphQLClient(
  process.env.GRAPHQL_URL as string,
  {
    method: 'GET',
    jsonSerializer: {
      parse: JSON.parse,
      stringify: JSON.stringify,
    },
    headers: {
      authorization: process.env.BASIC64 as string,
    },
  },
);

export const sdk = getSdk(graphQLClient);
