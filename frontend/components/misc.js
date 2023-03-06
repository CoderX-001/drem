// VARIABLES
const options = document.querySelectorAll('.options')
const guide = document.querySelector('.guide')
let activeOption = null;
console.log(guide.parentElement.clientWidth)
if (options) {
  activeOption = document.querySelector('.options.active')
  guide.style.width = activeOption.clientWidth + 'px'
  for(let i = 0; i < options.length; i++) {
    options[i].addEventListener('click', () => {
      if (!options[i].classList.contains('active')) {
        activeOption = document.querySelector('.options.active')
        activeOption.classList.remove('active')
        options[i].classList.add('active')
        guide.style.width = options[i].clientWidth + 'px'
        guide.style.left = options[i].offsetLeft + 'px'
      }
      else {
        return false
      }
    })
  }
}