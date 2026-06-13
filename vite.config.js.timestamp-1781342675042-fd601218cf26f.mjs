// vite.config.js
import { defineConfig } from "file:///C:/Users/HP/Desktop/portfolio/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/HP/Desktop/portfolio/node_modules/@vitejs/plugin-react/dist/index.js";
import compression from "file:///C:/Users/HP/Desktop/portfolio/node_modules/vite-plugin-compression/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    // Brotli compression (best ratio)
    compression({ algorithm: "brotliCompress", ext: ".br" }),
    // Gzip fallback
    compression({ algorithm: "gzip", ext: ".gz" })
  ],
  build: {
    cssCodeSplit: true,
    rollupOptions: {
      output: {
        manualChunks: {
          // Split framer-motion into its own chunk — only loads when needed
          "framer-motion": ["framer-motion"],
          // Split React runtime separately for better caching
          "react-vendor": ["react", "react-dom"]
        }
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxEZXNrdG9wXFxcXHBvcnRmb2xpb1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcRGVza3RvcFxcXFxwb3J0Zm9saW9cXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL0Rlc2t0b3AvcG9ydGZvbGlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSdcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xyXG5pbXBvcnQgY29tcHJlc3Npb24gZnJvbSAndml0ZS1wbHVnaW4tY29tcHJlc3Npb24nXHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICAvLyBCcm90bGkgY29tcHJlc3Npb24gKGJlc3QgcmF0aW8pXHJcbiAgICBjb21wcmVzc2lvbih7IGFsZ29yaXRobTogJ2Jyb3RsaUNvbXByZXNzJywgZXh0OiAnLmJyJyB9KSxcclxuICAgIC8vIEd6aXAgZmFsbGJhY2tcclxuICAgIGNvbXByZXNzaW9uKHsgYWxnb3JpdGhtOiAnZ3ppcCcsIGV4dDogJy5neicgfSksXHJcbiAgXSxcclxuICBidWlsZDoge1xyXG4gICAgY3NzQ29kZVNwbGl0OiB0cnVlLFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBtYW51YWxDaHVua3M6IHtcclxuICAgICAgICAgIC8vIFNwbGl0IGZyYW1lci1tb3Rpb24gaW50byBpdHMgb3duIGNodW5rIFx1MjAxNCBvbmx5IGxvYWRzIHdoZW4gbmVlZGVkXHJcbiAgICAgICAgICAnZnJhbWVyLW1vdGlvbic6IFsnZnJhbWVyLW1vdGlvbiddLFxyXG4gICAgICAgICAgLy8gU3BsaXQgUmVhY3QgcnVudGltZSBzZXBhcmF0ZWx5IGZvciBiZXR0ZXIgY2FjaGluZ1xyXG4gICAgICAgICAgJ3JlYWN0LXZlbmRvcic6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXHJcbiAgICAgICAgfSxcclxuICAgICAgfSxcclxuICAgIH0sXHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtUixTQUFTLG9CQUFvQjtBQUNoVCxPQUFPLFdBQVc7QUFDbEIsT0FBTyxpQkFBaUI7QUFHeEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBO0FBQUEsSUFFTixZQUFZLEVBQUUsV0FBVyxrQkFBa0IsS0FBSyxNQUFNLENBQUM7QUFBQTtBQUFBLElBRXZELFlBQVksRUFBRSxXQUFXLFFBQVEsS0FBSyxNQUFNLENBQUM7QUFBQSxFQUMvQztBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsY0FBYztBQUFBLElBQ2QsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixpQkFBaUIsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUVqQyxnQkFBZ0IsQ0FBQyxTQUFTLFdBQVc7QUFBQSxRQUN2QztBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
