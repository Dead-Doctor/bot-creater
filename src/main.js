const { app, BrowserWindow, dialog, ipcMain } = require('electron');

function createWindow() {
  console.log(__dirname + 'src/app/resources/icon.png');
  const win = new BrowserWindow({
    width: 800,
    height: 800,
    minWidth: 290,
    minHeight: 300,
    icon: './src/app/resources/icon.png',
    webPreferences: {
      nodeIntegration: true,
      enableBlinkFeatures: 'CSSColorSchemeUARendering',
    },
  });
  win.removeMenu();
  win.loadFile('./src/app/index.html');
  win.webContents.openDevTools();
}

app.whenReady().then(createWindow);
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});
