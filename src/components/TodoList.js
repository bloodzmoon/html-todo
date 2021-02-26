import { todos, toggleTodo, deleteTodo } from '../contexts/TodoContext.js'

export function TodoList() {
  return `
    <div class="todo-list">
      <h3 class="todo-title">TODO LIST</h3>
      <div id="todo-display"></div>
    </div>
  `
}

document.body.addEventListener('dom-changed', () => {
  if (location.hash.replace('#', '') !== '/todo') return

  const display = document.querySelector('#todo-display')

  display.addEventListener('update-todo', () => {
    display.innerHTML = ''
    todos.forEach((todo) => {
      const todoHTML = document.createElement('div')
      todoHTML.classList.add('todo-item')
      if (todo.done) todoHTML.classList.add('done')
      else todoHTML.classList.remove('done')
      todoHTML.setAttribute('data-id', todo.id)
      todoHTML.addEventListener('click', (e) => {
        toggleTodo(e.target.getAttribute('data-id'))
        display.dispatchEvent(new Event('update-todo'))
      })

      const delHTML = document.createElement('span')
      delHTML.classList.add('del')
      delHTML.setAttribute('data-id', todo.id)
      delHTML.innerHTML = 'DEL'
      delHTML.addEventListener('click', (e) => {
        e.stopPropagation()
        deleteTodo(e.target.getAttribute('data-id'))
        display.dispatchEvent(new Event('update-todo'))
      })

      todoHTML.append(todo.task)
      todoHTML.append(delHTML)

      display.append(todoHTML)
    })
  })
})
