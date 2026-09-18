// @ts-check
import { defineConfig } from 'astro/config';

// Static HTML for Cloudflare Pages (or any static host).
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
  // Keep spaces around inline links and <span> so public copy does not run together.
  compressHTML: false,
});
