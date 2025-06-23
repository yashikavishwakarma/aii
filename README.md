<h1 align="center">🧠 Mock AI Interview</h1>

<p align="center">
  <b>React + TypeScript + Vite</b> based web app built for seamless AI-powered interview experiences.
</p>

<p align="center">
  🔗 <a href="https://mock-ai-interview-814f0.web.app/" target="_blank"><b>Live Demo</b></a> •
  💻 <a href="https://github.com/yashikavishwakarma/aii" target="_blank"><b>Source Code</b></a>
</p>

<hr/>

<h2>🚀 Tech Stack</h2>
<ul>
  <li><b>React</b> – JavaScript UI library</li>
  <li><b>Vite</b> – Fast dev server and bundler</li>
  <li><b>TypeScript</b> – Type-safe JavaScript</li>
  <li><b>Firebase Hosting</b> – Global deployment</li>
  <li><b>@vitejs/plugin-react-swc</b> – Fast refresh</li>
  <li><b>ESLint</b> – Linting and formatting</li>
</ul>

<h2>🌐 Live Demo</h2>
<p>
  Hosted on Firebase:<br/>
  <a href="https://mock-ai-interview-814f0.web.app/" target="_blank">https://mock-ai-interview-814f0.web.app/</a>
</p>

<h2>📦 Installation & Setup</h2>

<pre><code># Clone the repository
git clone https://github.com/yashikavishwakarma/aii.git
cd aii

# Install dependencies
npm install
</code></pre>

<h3>Run Development Server</h3>
<pre><code>npm run dev</code></pre>

<h3>Build for Production</h3>
<pre><code>npm run build</code></pre>

<h3>Preview Production Build</h3>
<pre><code>npm run preview</code></pre>

<h2>🧹 ESLint Setup</h2>

<p><b>Enable type-aware lint rules in production:</b></p>
<pre><code>export default tseslint.config({
  extends: [
    ...tseslint.configs.recommendedTypeChecked,
    // or stricter:
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
</code></pre>

<p><b>React-specific rules:</b></p>
<pre><code>import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

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
</code></pre>

<h2>📁 Folder Structure</h2>
<pre><code>aii/
├── public/               # Static files
├── src/                  # App source code
│   ├── assets/           
│   ├── components/       
│   ├── App.tsx           
│   └── main.tsx          
├── dist/                 # Production build output
├── firebase.json         # Firebase config
├── index.html            
├── package.json          
├── tsconfig.json         
├── vite.config.ts        
└── .eslintrc.cjs         
</code></pre>

<hr/>

<p align="center">
  Made with ❤️ using React + TypeScript + Vite<br/>
  Deployed live via Firebase by <a href="https://github.com/yashikavishwakarma" target="_blank">Yashika Vishwakarma</a>
</p>
