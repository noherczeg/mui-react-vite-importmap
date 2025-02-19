import { type Plugin } from 'vite';

interface ImportMapConfig {
  mapping?: Record<string, string>;
  extraExclude?: string[];
}

export default function vitePluginImportMap({ mapping = {}, extraExclude = [] }: ImportMapConfig): Plugin {
  return {
    name: 'vite-plugin-importmap',
    enforce: 'pre',
    // @ts-ignore
    config(config) {
      const externalDeps = [...Object.keys(mapping), ...extraExclude];

      config.build = config.build || {};
      config.build.rollupOptions = config.build.rollupOptions || {};
      config.build.rollupOptions.external = (id: string) => {
        return externalDeps.includes(id);
      };

      return { exclude: externalDeps };
    },

    transformIndexHtml(html) {
      const importMapScript = `<script type="importmap">${JSON.stringify({ imports: mapping }, null, 2)}</script>`;

      return html.replace('</head>', `${importMapScript}\n</head>`);
    },
  };
}
