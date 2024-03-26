//const { app, BrowserWindow } = require('electron'); viejo
const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('node:path');

function createWindow() {
  const mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    transparent: true, // Hacer la ventana transparente
    frame: false, // Quitar el marco de la ventana si lo deseas
    backgroundColor: '#00000000', // Establecer el color de fondo transparente
    devTools: false, // Desactivar las herramientas de desarrollador
    webPreferences: {
      nodeIntegration: false,
      preload: path.join(__dirname, 'preload.js')
    },
    // No mostrar en la barra de tareas
    skipTaskbar: true,
    // Oculta la barra de menú
    autoHideMenuBar: true
  });

  //mainWindow.loadURL('https://admin.osunlar.org');
  mainWindow.loadFile('index.html');
  
  // Maximizar la ventana
  mainWindow.maximize();


}

// Escuchar evento closeApp desde el proceso de renderizado
ipcMain.on('closeApp', () => {
  app.quit(); // Cerrar la aplicación
});

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.whenReady().then(() => {
  createWindow()

  app.on('activate', function () {
    // On macOS it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

// Quit when all windows are closed, except on macOS. There, it's common
// for applications and their menu bar to stay active until the user quits
// explicitly with Cmd + Q.
app.on('window-all-closed', function () {
  if (process.platform !== 'darwin') app.quit()
})
