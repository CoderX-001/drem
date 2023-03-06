export const isAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const id = localStorage.getItem('userId')
  
  const hiddenToken = document.querySelector('.hidden')

  if (accessToken !== null && refreshToken !== null && id !== null){
    if (!hiddenToken || hiddenToken.value === null || hiddenToken.value === "" || hiddenToken.value == "undefined") {
      return location.href = redirect
    }
  }
  else if (accessToken === null || refreshToken === null || id === null){
    if (location.href !== "/" || location.href !== "/pages/login" || location.href !== "/pages/signup") return location.href = '/pages/login'
  }
}
