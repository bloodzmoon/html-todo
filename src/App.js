import { Navbar } from './components/Navbar.js'
import { HomePage } from './pages/HomePage.js'
import { TodoPage } from './pages/TodoPage.js'

export function App() {
  return `
    ${Navbar()}
    <div id="app-page"></div>
  `
}

function Router() {
  const endpoint = location.hash.replace('#', '')
  const page = document.querySelector('#app-page')
  page.innerHTML = ''

  switch (endpoint) {
    case '/':
      return (page.innerHTML = HomePage())
    case '/todo':
      return (page.innerHTML = TodoPage())
    default:
      return (page.innerHTML = HomePage())
  }
}

export function InitRouter() {
  if (!location.hash) {
    const { origin, pathname } = location
    location.href = `${origin}${pathname}#/`
  }
  const links = document.querySelectorAll('a[data-nav]')

  function updateActiveLinks() {
    links.forEach((link) => {
      if (link.getAttribute('data-nav') === location.hash.replace('#', ''))
        link.classList.add('active')
      else link.classList.remove('active')
    })
    Router()
  }
  updateActiveLinks()

  links.forEach((link) =>
    link.addEventListener('click', (e) => {
      e.preventDefault()
      const endpoint = e.target.getAttribute('data-nav')
      const { origin, pathname } = location
      location.href = `${origin}${pathname}#${endpoint}`
    })
  )

  window.addEventListener('popstate', () => {
    updateActiveLinks()
  })
}
