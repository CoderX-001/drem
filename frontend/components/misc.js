// VARIABLES
export const guide = () => {
  const options = document.querySelectorAll('.options')
  const code = document.querySelectorAll('.drem-api-code')
  const guide = document.querySelector('.guide')

  const mediaQuery = window.matchMedia('(max-width: 767px)')
  let activeOption = null;
  if (options) {
    activeOption = document.querySelector('.options.active')
    guide.style.width = activeOption.clientWidth + 'px'

    if (mediaQuery.matches) guide.style.left = activeOption.offsetLeft + 'px'

    for(let i = 0; i < options.length; i++) {
      options[i].addEventListener('click', () => {
        const activeCode = document.querySelector('.drem-api-code.active')
        activeCode.classList.replace('active', 'hidden')
        
        code[i].classList.replace('hidden', 'active')
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
}

export const savePath = async (path) => {
  if (localStorage.getItem('pathName') !== location.pathname) {
    localStorage.setItem('pathName', path)
  }
}