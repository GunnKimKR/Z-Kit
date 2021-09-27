const {ipcRenderer} = require('electron')

window.addEventListener('wheel', e => {
  
  if(e.deltaY > 0) {
    ipcRenderer.send('wheel-up', e.deltaY+10)
  } else if(e.deltaY < 0) {
    ipcRenderer.send('wheel-down',  e.deltaY-10)
  }
})