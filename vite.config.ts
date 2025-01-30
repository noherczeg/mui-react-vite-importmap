import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImportMap from './vite-plugin-importmap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginImportMap({
      extraExclude: [],
      mapping: {
        "scheduler": "https://esm.sh/scheduler@0.25.0",
        "react": "https://esm.sh/react@19.0.0",
        "react-is": "https://esm.sh/react-is@19.0.0",
        "react/jsx-runtime": "https://esm.sh/react/jsx-runtime",
        "react-dom": "https://esm.sh/react-dom@19.0.0",
        "react-dom/client": "https://esm.sh/react-dom@19.0.0/client",
        "@mui/material/Box": "https://esm.sh/@mui/material@6.4.1/Box?deps=@mui/system@6.4.1,@mui/utils@6.4.1,prop-types@15.8.1,react@19.0.0",
        "@mui/material/Button": "https://esm.sh/@mui/material@6.4.1/Button?deps=@mui/system@6.4.1,@mui/utils@6.4.1,prop-types@15.8.1,react@19.0.0",
        "@mui/material/Typography": "https://esm.sh/@mui/material@6.4.1/Typography?deps=@mui/system@6.4.1,@mui/utils@6.4.1,prop-types@15.8.1,react@19.0.0",
        "@mui/system": "https://esm.sh/@mui/system@6.4.1?deps=@mui/utils@6.4.1,@mui/styled-engine@6.4.0,@mui/private-theming@6.4.1,prop-types@15.8.1,react@19.0.0",
        "@emotion/react": "https://esm.sh/@emotion/react@11.11.4",
        "@emotion/styled": "https://esm.sh/@emotion/styled@11.14.0",
      },
    }),
    react(),
  ],
})
