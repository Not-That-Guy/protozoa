const electron = require('electron');
const url = require('url');
const path = require('path');

electron.app.on('ready', function(){
    var window = new electron.BrowserWindow({
        width: 500,
        height: 400,
        backgroundColor: '#ececec'
    });
    window.setMenu(null);
    window.loadURL(
        url.format({
            pathname: path.join(__dirname, 'index.html'),
            protocol: 'file:',
            slashes: true
        })
    );
});
