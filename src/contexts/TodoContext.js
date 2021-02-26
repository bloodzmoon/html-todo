let id = 0
export const todos = []

export function addTodo(newTask) {
  todos.push({ id, task: newTask, done: false })
  id += 1
}

export function toggleTodo(id) {
  todos.forEach((todo, index) => {
    if (String(todo.id) === String(id)) {
      todos[index] = { ...todo, done: !todo.done }
    }
  })
}

export function deleteTodo(id) {
  const index = todos.findIndex((todo) => String(todo.id) === String(id))
  todos.splice(index, 1)
}
