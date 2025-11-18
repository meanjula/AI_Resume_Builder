AI RESUME BUILDER

A modern app built using:

- ⚡ Vite — blazing-fast dev environment

- ⚛️ React (JavaScript)

- 🎨 TailwindCSS v4 with the official Vite plugin

- 🧩 Shadcn UI — beautiful, copy-based UI components

- 📁 Organized folder structure with alias imports

🗂️ Project Structure

```bash

project/
│
├── src/
│   ├── components/
│   │   └── ui/        # Shadcn UI components
│   ├── App.jsx
│   └── main.jsx
│
├── jsconfig.json      # For VS Code + JS alias support
├── tsconfig.json      # Required by Shadcn UI CLI
├── tailwind.config.js
├── vite.config.js
└── package.json

```
---

## Screenshot
<img src="./public/code-explanation.png" width="45%" style="margin: auto;" />
<img src="./src/assets/code-explain-UI.png" width="45%" style="margin-right: 5%;" />

---
## 🚀 Getting Started

```bash
- npm create vite@latest Ai_Resume_Builder
```

### Install Dependencies

`npm install @tailwindcss/vite`


### Run the App

`npm run dev`

### Tailwind Setup
This project uses the new Tailwind Vite plugin (no PostCSS config needed).

✅ vite.config.js

```js

export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      // eslint-disable-next-line no-undef
      "@": path.resolve(__dirname, "./src")
    }
  }
})

```

✅ src/index.css

`@import "tailwindcss";`

### jsconfig.json

```js
{
  "compilerOptions": {
    "ignoreDeprecations": "6.0",
    "baseUrl": ".",
    "paths": {
      "@/*": ["src/*"]
    }
  }
}
```
### 🧩 Shadcn/ui

Run the shadcn init command to setup your project:

`
npx shadcn@latest init

`

- creates components.json

- configures Tailwind

- sets up import paths

- prepares your project to download components later

#### After initialization add components

for example if you want to add card component in the app.

`npx shadcn-ui add card`








