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
  npm install -D tailwindcss
```

2. Create Tailwind CSS config file

```
  npx tailwindcss init
```

3. Add file extentions to content property of Tailwind config file

```
  "./src/**/*.{html,js,jsx,ts,tsx}"
```

4. Add the Tailwind directives at the top of the `index.css` file

```
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
```
