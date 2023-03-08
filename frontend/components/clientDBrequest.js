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

export const getUserData = async (url, data) => {
  const accessToken = localStorage.getItem('accessToken')
  
  const getData = await fetch(
    url,
    {
      method: 'POST',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json',
        'authorization': `Bearer ${accessToken}`
      }
    }
  )
  
  if (!data) return false
  
  const response = await data.json()
  console.log(response)
  
  return response
}
