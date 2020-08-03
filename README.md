# React

## features

- [react-router-dom](#react-router-dom)
- [tailwind-css](#tailwind-css)
- [cookie](#cookie)
- [redux](#redux)
- [styled-components](#styled-components)
- [axios with repository-pattern](#axios-with-repository-pattern)
- [form with validation](#form-with-validation)
- [graphql](#graphql)
- [context](#context)
- [auth](#auth)

## react-router-dom

```sh
yarn add react-router-dom
```

./src/app.js

```js
import { BrowserRouter, Route, Link } from "react-router-dom";
```

## tailwind-css

```sh
yarn add tailwindcss postcss-cli autoprefixer
npx tailwind init --full
touch postcss.config.js
```

postcss.config.js

```js
module.exports = {
  plugins: [require("tailwindcss"), require("autoprefixer")],
};
```

package.json

```json
  "scripts": {
    "build:tailwind": "postcss src/tailwind.css -o src/App.css"
  },
```

## Cookie

- wip

## Redux

```sh
# create app
npx create-react-app my-app --template redux
# existing app
yarn add redux react-redux redux-logger @reduxjs/toolkit
```

## styled-components

```sh
yarn add styled-components
```

## axios with repository-pattern

```sh
yarn add axios
```

## form with validation

```sh
yarn add react-hook-form @hookform/resolvers @hapi/joi classnames
```

## graphql

- wip
