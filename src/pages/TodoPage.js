import { Input } from '../components/Input.js'
import { Button } from '../components/Button.js'
import { TodoList } from '../components/TodoList.js'
import { addTodo } from '../contexts/TodoContext.js'

export function TodoPage() {
  return `
    <div class="todo-page">
      <form id="todo-form">
        ${Input({
          placeholder: 'Type something to add..',
          autocomplete: 'nope',
        })}
        ${Button({ type: 'button', label: 'ADD' })}
      </form>
      ${TodoList()}
    </div>
  `
}

document.body.addEventListener('dom-changed', (e) => {
  if (location.hash.replace('#', '') !== '/todo') return

  const form = document.querySelector('#todo-form')
  const display = document.querySelector('#todo-display')
  const input = Array.from(form.children).find(
    (child) => child.tagName === 'INPUT'
  )
  const button = Array.from(form.children).find(
    (child) => child.tagName === 'BUTTON'
  )

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    if (input.value === '') return
    addTodo(input.value)
    input.value = ''
    display.dispatchEvent(new Event('update-todo'))
  })

  button.addEventListener('click', () => {
    if (input.value === '') return
    addTodo(input.value)
    input.value = ''
    display.dispatchEvent(new Event('update-todo'))
  })
})

let firstLoaded = false
window.addEventListener('popstate', () => {
  if (location.hash.replace('#', '') === '/todo') {
    if (firstLoaded) return

    const tryToLoad = setInterval(() => {
      const display = document.querySelector('#todo-display')
      if (!display) return
      display.dispatchEvent(new Event('update-todo'))
      firstLoaded = true
      console.log('a')
      clearInterval(tryToLoad)
    }, 10)
  } else {
    firstLoaded = false
  }
})
