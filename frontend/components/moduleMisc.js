export const isAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const id = localStorage.getItem('userId')
  
  const hiddenToken = document.querySelector('.hidden-token')
  console.log(hiddenToken)
  console.log(location.href)
  console.log(accessToken)

  if (accessToken !== null && refreshToken !== null && id !== null){
    if (!hiddenToken || hiddenToken.value === null || hiddenToken.value === "" || hiddenToken.value == "undefined") {
      return location.href = redirect
    }
  }
  else if (accessToken === null || refreshToken === null || id === null){
    let allowedPages = [
      "https://drem-g2j0.onrender.com/",
      "https://drem-g2j0.onrender.com/pages/login",
      "https://drem-g2j0.onrender.com/pages/signup"
    ]
    if (!location.href.includes(allowedPages[0]) || !location.href.includes(allowedPages[1])  || !location.href.includes(allowedPages[2])) {
      return location.href = '/pages/login'
    }
  }
}
