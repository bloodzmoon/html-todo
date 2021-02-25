import { Input } from '../components/Input.js'

export function TodoPage() {
  return `
    <div class="todo-page">
      <form id="todo-form">
        ${Input({
          placeholder: 'Type something to add..',
          autocomplete: 'nope',
        })}
        <button >ADD</button>
      </form>
    </div>
  `
}

document.body.addEventListener('dom-changed', () => {
  const form = document.querySelector('#todo-form')
  if (!form) return

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const input = Array.from(form.children).find(
      (child) => child.tagName === 'INPUT'
    )
    console.log(input.value)
    input.value = ''
  })
})
