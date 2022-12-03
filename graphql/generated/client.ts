import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import gql from 'graphql-tag';

export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};

export type FetchHomePageQueryQueryVariables = Exact<{ [key: string]: never }>;

export type FetchHomePageQueryQuery = {
  pages: {
    edges: Array<{
      node: {
        commonACF: {
          historyText: string;
          introductionName: string;
          introductionText: string;
          tombText: string;
          yogaText: string;
          facilitiesAndEquipment: Array<{
            facilitiesAndEquipmentText: string;
            facilitiesAndEquipmentTitle: string;
            facilitiesAndEquipmentImage: { sourceUrl: string };
          }>;
          historyImage01: { sourceUrl: string };
          historyImage02: { sourceUrl: string };
          mainvisualSliderImage: Array<{ sliderImage: { sourceUrl: string } }>;
          yogaImage: { sourceUrl: string };
        };
      };
    }>;
  };
};

export const FetchHomePageQueryDocument = gql`
  query fetchHomePageQuery {
    pages {
      edges {
        node {
          commonACF {
            facilitiesAndEquipment {
              facilitiesAndEquipmentText
              facilitiesAndEquipmentTitle
              facilitiesAndEquipmentImage {
                sourceUrl(size: LARGE)
              }
            }
            historyText
            historyImage01 {
              sourceUrl(size: LARGE)
            }
            historyImage02 {
              sourceUrl(size: LARGE)
            }
            introductionName
            introductionText
            mainvisualSliderImage {
              sliderImage {
                sourceUrl(size: LARGE)
              }
            }
            tombText
            yogaImage {
              sourceUrl(size: LARGE)
            }
            yogaText
          }
        }
      }
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper,
) {
  return {
    fetchHomePageQuery(
      variables?: FetchHomePageQueryQueryVariables,
      requestHeaders?: Dom.RequestInit['headers'],
    ): Promise<FetchHomePageQueryQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<FetchHomePageQueryQuery>(
            FetchHomePageQueryDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders },
          ),
        'fetchHomePageQuery',
        'query',
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
