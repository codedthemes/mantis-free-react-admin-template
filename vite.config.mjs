// https://github.com/vitejs/vite/discussions/3448
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';

// ----------------------------------------------------------------------

export default defineConfig({
  plugins: [react(), jsconfigPaths()],
  // https://github.com/jpuri/react-draft-wysiwyg/issues/1317
  base: '/app', // accessing env variable is not possible here. So hard coding this.

  build:{
    outDir:"./build"
  }
});
