# LMS Frontend

### Setup Instruction

1. Clone the Project

```
  git clone https://github.com/gkartikey05/Learning-Management-System.git
```

2. Move into directory

```
  cd CLIENT
```

3. Install the dependencies

```
  npm i
```

4. Run the server

```
  npm run dev
```

### Setup instruction for Tailwind CSS

[Tailwind CSS official instruction docs](https://tailwindcss.com/docs/installation)

1. Install Tailwind CSS

```
  npm install -D tailwindcss postcss autoprefixer
```

2. Create Tailwind CSS config file

```
  npx tailwindcss init
```

3. Add file extentions to content property of Tailwind config file

```
  "./src/**/*.{html,js,jsx,ts,tsx}", "./index.html"
```

4. Add the Tailwind directives at the top of the `index.css` file

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```

5. Add the following details in the plugin property of `tailwind.config.js` file

```
  [require('daisyui'), require('@tailwindcss/line-clamp')]
```

### Adding Plugins ans Dependencies

```
  npm install @reduxjs/toolkit react-redux react-router-dom react-icons react-chartjs-2 chart.js daisyui axios react-hot-toast @tailwindcss/line-clamp
```

### Configure auto import sort eslint

1. Install simple import sort

```
  npm install --save-dev eslint-plugin-simple-import-sort
```

2. If you have `eslint.config.js` then add below configuration in you eslint file

```
  import simpleImportSort from "eslint-plugin-simple-import-sort";

  export default [
    {
      plugins: {
        "simple-import-sort": simpleImportSort,
      },
      rules: {
        "simple-import-sort/imports": "error",
        "simple-import-sort/exports": "error",
      },
    },
  ];
```

3. Or if you have `.eslintrc.*` then add below configuration in you eslint file

```
  {
    "plugins": ["simple-import-sort"],
    "rules": {
      "simple-import-sort/imports": "error",
      "simple-import-sort/exports": "error"
    },
    "parserOptions": {
      "sourceType": "module",
      "ecmaVersion": "latest"
    }
  }
```

4. If you want to enable auto import sort on file save in `VS Code`

- Open `settings.json`
- Add the following config

```
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  }
```
