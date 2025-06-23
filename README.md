
markdown
Copy
Edit
<h1 align="center">🧠 Mock AI Interview</h1>
<p align="center"><b>React + TypeScript + Vite</b> based web app built for seamless AI-powered interview experiences.</p>
<p align="center">
  🔗 <a href="https://mock-ai-interview-814f0.web.app/" target="_blank"><b>Live Demo</b></a> •
  💻 <a href="https://github.com/yashikavishwakarma/aii"><b>Source Code</b></a>
</p>

## 🚀 Tech Stack

- ⚛️ React – Modern JavaScript UI library
- ⚡ Vite – Fast development server and build tool
- 🟦 TypeScript – Strong typing for JavaScript
- 🔥 Firebase Hosting – Fast, global deployment
- 🧠 @vitejs/plugin-react-swc – SWC-powered fast refresh
- 📏 ESLint – Linting and code style enforcement

## 🌐 Live Project

This project is deployed using Firebase Hosting.  
🔗 **Live Demo:** [https://mock-ai-interview-814f0.web.app/](https://mock-ai-interview-814f0.web.app/)

## 📦 Installation & Setup

```bash
git clone https://github.com/yashikavishwakarma/aii.git
cd aii
npm install
🚀 Run Development Server
bash
Copy
Edit
npm run dev
🏗️ Build for Production
bash
Copy
Edit
npm run build
🔍 Preview Production Build Locally
bash
Copy
Edit
npm run preview
📐 ESLint Setup (TypeScript + React)
For enabling type-aware lint rules in production:

ts
Copy
Edit
export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // Or stricter:
    // ...tseslint.configs.strictTypeChecked,
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
});
For React-specific linting:

ts
Copy
Edit
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
});
📁 Folder Structure
php
Copy
Edit
aii/
├── public/               # Static files
├── src/                  # Source code
│   ├── assets/           # Images and other assets
│   ├── components/       # Reusable components
│   ├── App.tsx           # Main app component
│   └── main.tsx          # Entry point
├── dist/                 # Production build output (auto-generated)
├── firebase.json         # Firebase Hosting configuration
├── index.html            # Base HTML file
├── package.json          # Project metadata and scripts
├── tsconfig.json         # TypeScript configuration
├── vite.config.ts        # Vite build configuration
└── .eslintrc.cjs         # ESLint configuration
🧾 License
This project is licensed under the MIT License.
