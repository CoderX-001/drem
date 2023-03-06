export const checkEmail = async (email, submitURL) => {
  let messages = []

  const fetchRes = await fetch(`${submitURL}?email=${email.value}`)

  if (!fetchRes) return false

  const response = await fetchRes.json()
  if (!response.ok) return false
  
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

  if (!createUser.ok) return false

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

  if (!loginUser.ok) throw new Error('Something went wrong!')

  const response = await loginUser.json()

  return response
}
