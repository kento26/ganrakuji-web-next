import type { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  overwrite: true,
  schema: '',
  documents: 'graphql/documents/*.graphql',
  generates: {
    'graphql/generated/client.ts': {
      config: {
        skipTypename: true,
        avoidOptionals: true,
        maybeValue: 'T',
      },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-graphql-request',
      ],
    },
  },
};

export default config;
