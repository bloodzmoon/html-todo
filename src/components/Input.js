export function Input(props) {
  const input = document.createElement('input')
  input.classList.add('input')

  for (const key in props) {
    if (key === 'onChange') {
      input.addEventListener('change', props[key])
    } else input[key] = props[key]
  }

  return input.outerHTML
}
