const { app, BrowserWindow } = require('electron')

let mainWindow;

app.on('ready', createWindow)

function createWindow() {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 400,
  })

  mainWindow.loadFile('index.html')
}