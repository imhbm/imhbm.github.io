import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// Middleware to set the correct MIME type for .tsx files
const setMimeType = () => ({
  name: 'set-mime-type',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.endsWith('.tsx')) {
        res.setHeader('Content-Type', 'application/javascript');
      }
      next();
    });
  }
});

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
    setMimeType()
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
