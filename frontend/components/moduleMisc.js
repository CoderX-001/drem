export const isAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem("accessToken");
  const refreshToken = localStorage.getItem("refreshToken");
  const id = localStorage.getItem("userId");

  const hiddenToken = document.querySelector(".hidden-token");

  if (accessToken !== null && refreshToken !== null && id !== null) {
    if (
      !hiddenToken ||
      hiddenToken.value === null ||
      hiddenToken.value === "" ||
      hiddenToken.value == "undefined"
    ) {
      return (window.location.href = redirect);
    }
  } else if (accessToken === null || refreshToken === null || id === null) {
    const path = localStorage.getItem('pathName')

    if (path !== location.pathname) {
      return location.href = '/pages/login'
    }
  }
};

export const logout = () => {
  localStorage.removeItem("accessToken")
  localStorage.removeItem("refreshToken")
  localStorage.removeItem("userId")

  document.cookie = "logged_in=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
  return window.location.href = "/"
}

const getLogin = () => {
  let valid = true
  let access
  document.cookie.includes('; ') ? access = document.cookie.split('; ')[1] : access = document.cookie
  
  let verify = access.split('=')
  
  if (verify[1] === 'true'){
    valid = false
  }
  
  return valid
}

export const sliderWelcome = (element) => {
  if (!getLogin()) return false
  
  setTimeout(() => {
    element.classList.add('active')
  }, 800)

  document.body.addEventListener('click', () => {
    element.classList.remove('active')
  }, false)
  
  document.cookie = "logged_in=true; path=/"
}
