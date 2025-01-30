import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImportMap from './vite-plugin-importmap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginImportMap({
      mapping: {
        "react": "https://esm.sh/react@19.0.0",
        "react/jsx-runtime": "https://esm.sh/react@19.0.0/jsx-runtime",
        "react-dom": "https://esm.sh/react-dom@19.0.0",
        "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
        "@mui/material": "https://esm.sh/@mui/material@6.4.2?bundle=true&deps=react@19.0.0,react-dom@19.0.0,@emotion/react@11.14.0,@emotion/styled@11.14.0",
        "@mui/x-data-grid": "https://esm.sh/@mui/x-data-grid@7.24.1?bundle=true&deps=@mui/material@6.4.2,react@19.0.0,react-dom@19.0.0,@mui/system@6.4.2",
        "@emotion/react": "https://esm.sh/@emotion/react@11.14.0?bundle=true",
        "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.0?bundle=true",
      },
    }),
    react(),
  ],
});
