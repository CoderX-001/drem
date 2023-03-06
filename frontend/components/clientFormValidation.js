export const validateSignupForm = (options) => {
  const { name, email, password, cpassword } = options

  // Handle errors
  let errors = []

  if (name && name.value.length < 1 || email && email.value.length < 1 || password && password.value.length < 1 || cpassword && cpassword.value.length < 1)
    errors.push({ error: 'Fields cannot be empty' })

  if (name) {
    if (name.value.length < 3)
      errors.push({ error: 'Name is not valid' })
  }

  if (email) {
    const atpos = email.value.indexOf('@')
    const dotpos = email.value.lastIndexOf('.')

    if (atpos <= 3 || dotpos <= 5 || atpos > dotpos || dotpos - atpos < 2)
      errors.push({ error: 'Invalid email' })
  }

  if (password && cpassword) {
    if (password.value.length < 8)
      errors.push({ error: 'Password is too short' })

    if (password.value !== cpassword.value)
      errors.push({ error: 'Passwords do not match' })
  }

  if (errors.length > 0) return { valid: false, errors }

  return true
}

export const validateLoginForm = (options) => {
  const { email, password } = options

  if (email && email.value.length < 1 || password && password.value.length < 1) {
    let errors = 
    [
      { error: 'Field(s) cannot be empty' }
    ]
    return { valid: false, errors }
  }

  return true
}
