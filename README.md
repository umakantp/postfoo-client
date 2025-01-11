# postfoo-client

PostFoo helps you keep track of your finances and information for you and your family

This is deployed @ [postfoo.com](https://postfoo.com) and server at [gql.postfoo.com](https://gql.postfoo.com)

### Setup

- First thing

  ```sh
  npm install
  cp .env.example .env
  ```

- Run the server:

  ```sh
  npm run dev
  ```

### Directory structure

```
postfoo-client
├── .github (GitHub actions)
├── .vscode (VS Code editor settings)
├── build (Build output)
├── node_modules (Dependencies)
├── .env (Environment variables)
├── .gitignore (Files to ignore)
├── codegen.yml (GraphQL codegen config)
├── next.config.mjs (Next.js config)
├── eslint.config.mjs (ESLint config)
├── postcss.config.mjs (PostCSS config)
├── tailwind.config.mjs (Tailwind CSS config)
├── tsconfig.json (TypeScript config)
├── components.json (shadcn/ui components config)
├── package.json
├── README.md
├── assets
│   └── fonts (Fonts)
├── public (Static files)
└── src
    ├── app (Components for page/url)
    ├── components (Reusable components)
    │   ├── commons (Common components)
    │   └── ui (shadcn/ui components)
    ├── generated (Generated graphql file)
    ├── graphql
    │   ├── fragments (Fragments for GQL queries and mutations)
    │   ├── mutations (GQL mutations)
    │   └── queries (GQL queries)
    ├── styles (Reusable styles)
    └── utils
        ├── constants.ts (Constants routes, etc.)
        ├── utils.ts (Reusable helper functions)
        ├── history.ts (History helper functions)
        ├── logger.ts (Logging helper functions)
        ├── storage.ts (Local storage helper functions)
        └── toast.ts (Toast helper functions)
```

### SMS (account verification)

On local, we do not send SMS. You can use a fake number like `+1234567890` and can see sms code in the console.

### Howt to use graphql

1. Create a fragment of the shape you want to query in `src/graphql/fragments`

```
  fragment FundResponse on Fund {
    id
    name
    type
  }
```

  2. Query can be defined in `src/graphql/queries`

```
  query funds($input: FundsInput!) {
    funds(input: $input) {
      ...FundResponse
    }
  }
```

  3. Generate the GQL code

```
  npm run codegen
```

  4. Import and run generated query

```
  import { useFundsQuery } from 'src/generated/graphql'
```

### Deployments

Deployments are done manually by triggering the [Deploy script](https://github.com/umakantp/postfoo-client/actions/workflows/merge-dev-to-main.yml).

### Coding guidelines

Generally reading the code should get you the gist of what are the general guidelines. But there has to be some proper documentation in place soon.

### TODO

- [ ] Add a proper documentation
- [ ] Add a prettier
- [ ] Add a proper e2e testing
- [ ] Fix the eslint config to add more general rules
