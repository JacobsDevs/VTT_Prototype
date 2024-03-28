const { create } = require('domain')
const { app, BrowserWindow } = require('electron')

const createWindow = () => {
	const win = new BrowserWindow({
		width: 800,
		height: 600
	})

	win.loadFile('index.html')
	return win
}

app.whenReady().then(() => {
	window = createWindow()

})

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') app.quit()
})