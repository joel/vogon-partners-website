// @ts-check
import { defineConfig } from 'astro/config';

// Static HTML for Cloudflare Pages (or any static host).
// No production custom domain is configured. Staging ≠ go-live.
export default defineConfig({
  output: 'static',
  trailingSlash: 'never',
});
