const { contextBridge } = require("electron");

contextBridge.exposeInMainWorld("cricketLearnerDesktop", {
  platform: "macos",
  shell: "electron",
  version: "1.0.0",
});
