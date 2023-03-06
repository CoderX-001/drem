// let errorCloser = document.querySelectorAll('.error > i')

// if (errorCloser) {
//   errorCloser.forEach(close => {
//     close.addEventListener('click', () => {
//       close.parentElement.classList.replace('error', 'hidden')
//     })
//   })
// }

// VARIABLES

const handleInput = () => {
  const inputs = document.querySelectorAll('input')

  inputs.forEach(input => {
    input.addEventListener('blur', () => {
      if (input.nextElementSibling) {
        return input.value.length > 0 ? input.nextElementSibling.classList.add('active') : input.nextElementSibling.classList.remove('active')
      }
    })
  })
}

handleInput()