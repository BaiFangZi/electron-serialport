const electron = require('electron')
// Module to control application life.
const app = electron.app
// Module to create native browser window.
const BrowserWindow = electron.BrowserWindow

const menu = electron.Menu

const path = require('path')
const url = require('url')


let mainWindow

function createWindow() {
	//去除窗体头部菜单
	// menu.setApplicationMenu(null)
	mainWindow = new BrowserWindow({
		width: 800,
		height: 525,
		center:true,
		resizable:false,
		webPreferences: {
			nodeIntegration: true
		}

	})
	mainWindow.loadURL(url.format({
		pathname: path.join(__dirname, 'index.html'),

	}))
	mainWindow.on('closed', function() {
		mainWindow = null
	})
}
app.on('ready', createWindow)

// app.on('window-all-closed', function () {
//   if (process.platform !== 'darwin') {
//     app.quit()
//   }
// })

// app.on('activate', function () {
//   if (mainWindow === null) {
//     createWindow()
//   }
// })
