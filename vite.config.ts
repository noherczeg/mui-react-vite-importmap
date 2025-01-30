import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImportMap from './vite-plugin-importmap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginImportMap({
      mapping: {
        "scheduler": "https://esm.sh/scheduler@0.25.0",
        "react": "https://esm.sh/react@19.0.0",
        "react-is": "https://esm.sh/react-is@19.0.0",
        "react/jsx-runtime": "https://esm.sh/react@19.0.0/jsx-runtime",
        "react-dom": "https://esm.sh/react-dom@19.0.0",
        "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
        "@mui/material": "https://esm.sh/@mui/material@6.4.1?bundle=true&deps=react@19.0.0,react-dom@19.0.0,@emotion/react@11.14.0,@emotion/styled@11.14.0",
        "@emotion/react": "https://esm.sh/@emotion/react@11.14.0?bundle=true&deps=hoist-non-react-statics@3.3.2",
        "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.0?bundle=true",
      },
    }),
    react(),
  ],
});
