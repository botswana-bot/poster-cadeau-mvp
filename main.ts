import { serveDir } from "https://deno.land/std@0.224.0/http/file_server.ts";

Deno.serve((req) => {
  const url = new URL(req.url);

  // Basic health
  if (url.pathname === "/health") {
    return new Response("ok", { headers: { "content-type": "text/plain" } });
  }

  // Serve static files from ./public
  return serveDir(req, {
    fsRoot: "public",
    urlRoot: "",
    showDirListing: false,
    quiet: true,
  });
});
