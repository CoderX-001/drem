export const isAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const id = localStorage.getItem('userId')
  
  const hiddenToken = document.querySelector('.hidden')
  console.log(hiddenToken)
  console.log(location.href)
  console.log(accessToken)

  if (accessToken !== null && refreshToken !== null && id !== null){
    if (!hiddenToken || hiddenToken.value === null || hiddenToken.value === "" || hiddenToken.value == "undefined") {
      return location.href = redirect
    }
  }
  else if (accessToken === null || refreshToken === null || id === null){
    if (location.href !== "https://drem-g2j0.onrender.com/" || location.href !== "https://drem-g2j0.onrender.com/pages/login" || location.href !== "https://drem-g2j0.onrender.com/pages/signup") {
      return location.href = '/pages/login'
    }
  }
}
