export const checkEmail = async (email, submitURL) => {
  let messages = []

  const fetchRes = await fetch(`${submitURL}?email=${email.value}`)

  if (!fetchRes.ok) return false

  const response = await fetchRes.json()
  if (!response) return false
  
  const data = await response.message

  return data
}

export const createUserSubmit = async (submitURL, data) => {
  const createUser = await fetch(
    submitURL,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  if (!createUser.ok) {
    console.log(createUser.json())
    const data = await createUser.json()
    
    return { valid: false, data }
  }
  else {
    const response = await createUser.json()
  }

  return response
}

export const loginUserSubmit = async (submitURL, data) => {
  const loginUser = await fetch(
    submitURL,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  if (!loginUser) return false
  
  console.log(loginUser)
  
  const response = await loginUser.json()

  return response
}

export const getUserData = async (url) => {
  const userId = localStorage.getItem('userId')
  const accessToken = localStorage.getItem('accessToken')
  
  const data = await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify({
        id: userId
      }),
      headers: {
        'Content-Type': 'application/json',
        'authorization': 'Bearer accessToken'
      }
    }
  )
  
  if (!data.ok) return false
  
  const response = await data.json()
  
  return response
}
