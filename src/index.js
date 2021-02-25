import { App, InitRouter } from './App.js'

document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('#app').innerHTML = App()
  InitRouter()
})

const observer = new MutationObserver((list) => {
  const evt = new CustomEvent('dom-changed', { detail: list })
  document.body.dispatchEvent(evt)
})
observer.observe(document.body, {
  attributes: true,
  childList: true,
  subtree: true,
})
