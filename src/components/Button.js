export function Button(props) {
  const button = document.createElement('button')
  button.classList.add('button')

  for (const key in props) {
    if (key === 'onClick') {
      button.addEventListener('click', props[key])
    } else if (key === 'label') {
      button.innerHTML = props[key]
    } else button[key] = props[key]
  }

  return button.outerHTML
}
