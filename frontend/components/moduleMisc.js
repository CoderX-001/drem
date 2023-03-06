export const isAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const id = localStorage.getItem('userId')

  if (accessToken !== null && refreshToken !== null && id !== null){
    return location.href = redirect
  }
}

export const notAuthenticated = (redirect) => {
  const accessToken = localStorage.getItem('accessToken')
  const refreshToken = localStorage.getItem('refreshToken')
  const id = localStorage.getItem('userId')

  if (accessToken === null || refreshToken === null || id === null){
    return location.href = redirect
  }
}
