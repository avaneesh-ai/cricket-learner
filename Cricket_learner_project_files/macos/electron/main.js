const { app, BrowserWindow, Menu, shell } = require("electron");
const http = require("http");
const fs = require("fs");
const path = require("path");

let localServer = null;
let localOrigin = "";

const contentTypes = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".webmanifest": "application/manifest+json; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".xml": "application/xml; charset=utf-8",
  ".txt": "text/plain; charset=utf-8",
};

function cleanUrlPath(rawUrl) {
  try {
    return decodeURIComponent((rawUrl || "/").split("?")[0] || "/");
  } catch {
    return "/";
  }
}

function appRoot() {
  return app.getAppPath();
}

function safePath(root, urlPath) {
  const cleanPath = cleanUrlPath(urlPath);
  const normalized = path.normalize(cleanPath).replace(/^(\.\.[/\\])+/, "");
  const filePath = path.join(root, normalized === "/" ? "index.html" : normalized);
  return filePath.startsWith(root) ? filePath : path.join(root, "index.html");
}

function fillPublicUrl(body) {
  return body.toString("utf8").replaceAll("__PUBLIC_URL__", localOrigin);
}

function send(response, status, headers, body) {
  response.writeHead(status, {
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    ...headers,
  });
  response.end(body);
}

function startLocalServer() {
  return new Promise((resolve, reject) => {
    const root = appRoot();
    const server = http.createServer((request, response) => {
      const requestPath = cleanUrlPath(request.url);
      if (requestPath === "/health") {
        send(response, 200, { "Content-Type": "application/json" }, JSON.stringify({ ok: true }));
        return;
      }

      let filePath = safePath(root, request.url || "/");
      if (!fs.existsSync(filePath) || fs.statSync(filePath).isDirectory()) {
        filePath = path.join(root, "index.html");
      }

      fs.readFile(filePath, (error, body) => {
        if (error) {
          send(response, 500, { "Content-Type": "text/plain; charset=utf-8" }, "Server error");
          return;
        }

        const ext = path.extname(filePath);
        const isHtml = ext === ".html";
        const responseBody = isHtml ? fillPublicUrl(body) : body;
        send(response, 200, {
          "Content-Type": contentTypes[ext] || "application/octet-stream",
          "Cache-Control": isHtml ? "no-store" : "public, max-age=3600",
        }, responseBody);
      });
    });

    server.once("error", reject);
    server.listen(0, "127.0.0.1", () => {
      const address = server.address();
      localServer = server;
      localOrigin = `http://127.0.0.1:${address.port}`;
      resolve(localOrigin);
    });
  });
}

function createMenu(mainWindow) {
  const template = [
    {
      label: "Cricket Learner AI",
      submenu: [
        { role: "about" },
        { type: "separator" },
        { role: "hide" },
        { role: "hideOthers" },
        { role: "unhide" },
        { type: "separator" },
        { role: "quit" },
      ],
    },
    {
      label: "View",
      submenu: [
        { label: "Reload", accelerator: "CmdOrCtrl+R", click: () => mainWindow.reload() },
        { label: "Actual Size", role: "resetZoom" },
        { label: "Zoom In", role: "zoomIn" },
        { label: "Zoom Out", role: "zoomOut" },
        { type: "separator" },
        { role: "togglefullscreen" },
      ],
    },
    {
      label: "Help",
      submenu: [
        {
          label: "Open Privacy Policy",
          click: () => mainWindow.loadURL(`${localOrigin}/privacy.html`),
        },
      ],
    },
  ];
  Menu.setApplicationMenu(Menu.buildFromTemplate(template));
}

async function createWindow() {
  const origin = await startLocalServer();
  const mainWindow = new BrowserWindow({
    width: 1280,
    height: 820,
    minWidth: 1024,
    minHeight: 700,
    title: "Cricket Learner AI",
    backgroundColor: "#edf4ef",
    show: false,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
    },
  });

  mainWindow.once("ready-to-show", () => mainWindow.show());
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (url.startsWith(origin)) return { action: "allow" };
    shell.openExternal(url);
    return { action: "deny" };
  });

  mainWindow.webContents.on("will-navigate", (event, url) => {
    if (url.startsWith(origin)) return;
    event.preventDefault();
    shell.openExternal(url);
  });

  createMenu(mainWindow);
  await mainWindow.loadURL(origin);
}

app.whenReady().then(createWindow);

app.on("activate", () => {
  if (BrowserWindow.getAllWindows().length === 0) createWindow();
});

app.on("window-all-closed", () => {
  if (localServer) localServer.close();
  if (process.platform !== "darwin") app.quit();
});
