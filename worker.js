// Minimal Worker entry. Cloudflare's static-assets binding serves dist/
// directly; this fallback exists only so the Worker has an entrypoint.
// Anything that isn't a static asset returns 404.
export default {
  async fetch() {
    return new Response('Not found', { status: 404 });
  },
};
