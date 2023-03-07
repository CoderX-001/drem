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

  return window.location.href = "/"
}
