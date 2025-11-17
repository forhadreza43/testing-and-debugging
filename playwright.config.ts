import { defineConfig } from '@playwright/test';

export default defineConfig({
   testDir: './e2e',
   timeout: 30_000,
   fullyParallel: true,
   reporter: [['html', { open: 'never' }]],

   use: {
      headless: true,
      trace: 'on-first-retry',
   },

   webServer: {
      command: 'bun run dev', // Start Next.js via Bun
      url: 'http://localhost:3000',
      reuseExistingServer: !process.env.CI,
   },
});
