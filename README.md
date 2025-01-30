# mui-react-importmap

The goal of this project is to showcase how we can externalize dependencies while:
- keeping type checking
- utilizing CDNs to fetch our dependencies
- utilizing the importmap standard to wire in dependency URLs

This way we can speed up the build process dramatically without any transpiling hacks.

## Vite Plugin

To achieve our goal we created a Vite plugin: [vite-plugin-importmap](./vite-plugin-importmap.ts).

**Usage:**

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import vitePluginImportMap from './vite-plugin-importmap';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vitePluginImportMap({
      mapping: {
        "react": "https://esm.sh/react@19.0.0",
        "react-dom": "https://esm.sh/react-dom@19.0.0",
        "@mui/material": "https://esm.sh/@mui/material@6.4.1?bundle=true&deps=react@19.0.0,react-dom@19.0.0",
        // etc...
      },
    }),
    react(),
  ],
});
```
