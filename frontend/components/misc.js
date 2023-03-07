export const savePath = async (path) => {
  window.addEventListener('load', () => {
    if (localStorage.getItem('pathName') !== location.pathname) {
      localStorage.setItem('pathName', path)
    }
  })
}