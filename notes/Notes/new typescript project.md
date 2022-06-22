# Node.js project configs
## Prettier
[The real reason to use Tabs over Spaces - accessibility](https://www.reddit.com/r/javascript/comments/c8drjo/nobody_talks_about_the_real_reason_to_use_tabs/)

```json
// .prettierrc
{
  "printWidth": 120,
  "singleQuote": true,
  "useTabs": true
}
```

## ESLint
```javascript
// eslintrc.js
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: ['eslint:recommended', 'plugin:@typescript-eslint/recommended'],
  env: {
    node: true,
  },
};
```

## Lint-Staged
```json
// .lintstagedrc.json
{
  "*.{js,ts}": ["eslint --fix"]
}
```


## Scaffolding commands
(`gitignore` is an alias I have for [downloading the Node.js gitignore from GitHub](wget https://raw.githubusercontent.com/github/gitignore/master/Node.gitignore -O .gitignore)):

```bash
npm init
git init
gitignore
npm i -D @types/node typescript ts-node
npx tsc --init

# If API
npm i -D nodemon

# ESLint
npm i -D @typescript-eslint/eslint-plugin @typescript-eslint/parser eslint

# Jest
npm i -D @types/jest jest ts-jest
npx ts-jest config:init

# Husky/Lint-Staged
npm i -D husky lint-staged
npm run prepare # https://github.com/typicode/husky

# Frameworks
nest new [project name]
express -e
serverless install -u https://github.com/serverless/examples/tree/master/aws-node-http-api -n my-project
yarn create react-app [project name] --template typescript
yarn create next-app --typescript
yarn create next-app --example with-mongodb # Not sure if this can be used with --typescript
yarn create strapi-app
yarn create docusaurus [project name] classic
```
