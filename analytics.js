// Import and inject Vercel Analytics
// This uses dynamic import to load the analytics module
(async () => {
  try {
    const { inject } = await import('https://cdn.jsdelivr.net/npm/@vercel/analytics@2/dist/index.mjs');
    inject();
  } catch (error) {
    console.warn('Failed to load Vercel Analytics:', error);
  }
})();
