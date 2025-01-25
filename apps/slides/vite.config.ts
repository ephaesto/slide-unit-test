import { defineConfig } from 'vite';
import mdx from '@mdx-js/rollup';
import react from '@vitejs/plugin-react-swc';
import { remarkSlide } from './plugin';
// remark-frontmatter

// https://vite.dev/config/
export default defineConfig({
  plugins: [mdx({ remarkPlugins: [remarkSlide] }), react({ devTarget: 'esnext' })],
  build: {
    target: 'esnext', //browsers can handle the latest ES features
  },
});
