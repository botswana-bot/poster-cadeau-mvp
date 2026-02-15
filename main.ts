import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve(async (req) => {
  const url = new URL(req.url);

  // Basic health
  if (url.pathname === "/health") {
    return new Response("ok", { headers: { "content-type": "text/plain" } });
  }

  // Serve static files from ./public
  const res = await serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: false,
    quiet: true,
  });

  // SPA fallback: if a client-side route is requested (e.g. /capsule/1),
  // serve index.html so React Router can handle it.
  if (res.status === 404 && !url.pathname.includes(".") && url.pathname !== "/") {
    try {
      const index = await Deno.readFile("public/index.html");
      return new Response(index, {
        status: 200,
        headers: { "content-type": "text/html; charset=utf-8" },
      });
    } catch {
      // fall through
    }
  }

  return res;
});
