const { app, BrowserWindow } = require("electron")
const path = require("node:path")

function createWindow() {
    const window = new BrowserWindow({
        width: 1200,
        height: 900,
        useContentSize: true
    })

    window.loadFile("index.html")
}

app.whenReady().then(() => {
    createWindow()

    app.on("activate", () => {
        if (BrowserWindow.getAllWindows().length === 0) {
            createWindow()
        }
    })
})

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") {
        app.quit()
    }
})