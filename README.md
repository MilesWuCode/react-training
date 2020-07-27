# React

## features

- [react-router-dom](#react-router-dom)
- [tailwind-css](#tailwind-css)
- [cookie](#cookie)
- [redux](#redux)
- [styled-components](#styled-components)

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
yarn add tailwindcss postcss-cli autoprefixer -D
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
    "build:tailwind": "postcss assets/tailwind.css -o src/css/tailwind.css"
  },
```

## Cookie

- wip

## Redux

- wip

## styled-components

```sh
yarn add styled-components
```
