document.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll('.input')

  inputs.forEach((input) => {
    input.addEventListener('input', (e) => {
      const span = e.target.previousElementSibling

      if (e.target.value.length === 0) {
        span.classList.add('span-end')
        input.style.paddingTop = '7px'
      } else {
        span.classList.add('span-active')
        span.classList.remove('span-end')
        input.style.fontSize = '14px'
        input.style.paddingTop = '13px'
      }
    })
  })
})
