export const savePath = async (path) => {
  if (localStorage.getItem('pathName') !== location.pathname) {
    localStorage.setItem('pathName', path)
  }
}