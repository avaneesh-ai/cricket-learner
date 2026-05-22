const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.PORT || 4173);

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".md": "text/markdown; charset=utf-8"
};

function cleanUrlPath(rawUrl) {
  try {
    return decodeURIComponent((rawUrl || "/").split("?")[0] || "/");
  } catch (error) {
    return "/";
  }
}

function safePath(urlPath) {
  const cleanPath = cleanUrlPath(urlPath);
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, normalized === "/" ? "index.html" : normalized);
  return filePath.startsWith(root) ? filePath : path.join(root, "index.html");
}

function publicOrigin(request) {
  const configured = String(process.env.PUBLIC_URL || process.env.SITE_URL || "").trim().replace(/\/+$/, "");
  if (/^https?:\/\//i.test(configured)) return configured;

  const host = String(request.headers["x-forwarded-host"] || request.headers.host || `localhost:${port}`)
    .split(",")[0]
    .trim();
  const forwardedProto = String(request.headers["x-forwarded-proto"] || "")
    .split(",")[0]
    .trim();
  const isLocal = /^(localhost|127\.0\.0\.1|\[?::1\]?)(:|$)/i.test(host);
  const proto = forwardedProto || (isLocal ? "http" : "https");
  return `${proto}://${host}`.replace(/\/+$/, "");
}

function fillPublicUrl(body, request) {
  return body.toString("utf8").replaceAll("__PUBLIC_URL__", publicOrigin(request));
}

function renderRobots(request) {
  const origin = publicOrigin(request);
  return `User-agent: *\nAllow: /\nSitemap: ${origin}/sitemap.xml\n`;
}

function renderSitemap(request) {
  const origin = publicOrigin(request);
  const lastModified = fs.statSync(path.join(root, "index.html")).mtime.toISOString().slice(0, 10);
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n  <url>\n    <loc>${origin}/</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>weekly</changefreq>\n    <priority>1.0</priority>\n  </url>\n  <url>\n    <loc>${origin}/privacy.html</loc>\n    <lastmod>${lastModified}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.6</priority>\n  </url>\n</urlset>\n`;
}

function send(response, status, headers, body) {
  response.writeHead(status, {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    ...headers
  });
  response.end(body);
}

function redirect(response, location) {
  response.writeHead(301, {
    "Location": location,
    "Cache-Control": "public, max-age=3600"
  });
  response.end();
}

const server = http.createServer((request, response) => {
  const requestPath = cleanUrlPath(request.url);
  const brandedPath = requestPath.replace(/\/+$/, "").toLowerCase();

  if (brandedPath === "/cricket-learner-ai" || brandedPath === "/cricket learner ai") {
    redirect(response, "/");
    return;
  }

  if (request.url === "/health") {
    send(response, 200, { "Content-Type": "application/json" }, JSON.stringify({ ok: true }));
    return;
  }

  if (requestPath === "/robots.txt") {
    send(response, 200, {
      "Content-Type": contentTypes[".txt"],
      "Cache-Control": "public, max-age=3600"
    }, renderRobots(request));
    return;
  }

  if (requestPath === "/sitemap.xml") {
    send(response, 200, {
      "Content-Type": contentTypes[".xml"],
      "Cache-Control": "public, max-age=3600"
    }, renderSitemap(request));
    return;
  }

  let filePath = safePath(request.url || "/");
  if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
    filePath = path.join(root, "index.html");
  }

  fs.readFile(filePath, (error, body) => {
    if (error) {
      send(response, 500, { "Content-Type": "text/plain; charset=utf-8" }, "Server error");
      return;
    }

    const ext = path.extname(filePath);
    const isConfig = path.basename(filePath) === "app-config.js";
    const isHtml = ext === ".html";
    const cacheControl = isConfig || isHtml ? "no-store" : "public, max-age=3600";
    const responseBody = isHtml ? fillPublicUrl(body, request) : body;

    send(response, 200, {
      "Content-Type": contentTypes[ext] || "application/octet-stream",
      "Cache-Control": cacheControl
    }, responseBody);
  });
});

server.listen(port, () => {
  console.log(`Cricket Learner AI is running on http://localhost:${port}`);
});
