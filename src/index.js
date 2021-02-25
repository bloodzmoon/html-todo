import { App, InitRouter } from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = App()
  InitRouter()
})
