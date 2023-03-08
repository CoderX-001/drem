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

  if (!createUser) return false
  
  const response = await createUser.json()

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
  
  const response = await loginUser.json()

  return response
}

export const getUserData = async (submitURL, data) => {
  let accessToken = localStorage.getItem('accessToken')
  
  const getData = await fetch(
    submitURL,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'authorization': accessToken
      }
    }
  )
  
  if (!getData) return false
  
  const response = getData.json()
  
  return response
}
