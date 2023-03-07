import { validateLoginForm, validateSignupForm } from './clientFormValidation.js'
import { checkEmail, createUserSubmit, loginUserSubmit } from './clientDBrequest.js'

const signupForm = document.querySelector('form#signup')
const loginForm = document.querySelector('form#login')
const btnLoader = document.querySelector('.btn-loader')



let errorNumber = []


const loginFormHandler = async (values, spinner) => {
  const { email, password } = values

  const errorContainer = document.querySelector('.errors')

  const options = {
    email,
    password
  }

  const results = validateLoginForm(options)

  if (spinner) {
    spinner.classList.replace('hidden', 'inline-block')
    spinner.classList.add('fa-spin')
  }
  if (results.valid === false) {
    if (spinner && spinner.classList.contains('fa-spin')) {
      spinner.classList.replace('inline-block', 'hidden')
      spinner.classList.remove('fa-spin')
    }
    
    let errors = results.errors
    
    errors.forEach((result, index) => {
      if (result.error) {

        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = result.error
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', index+1)

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
      }
    })
  }
  else if (results === true) {
    if (errorNumber.length > 0) {
      errorNumber = []
      errorContainer.innerHTML = ""
    }

    if (spinner) {
      spinner.classList.replace('hidden', 'inline-block')
      spinner.classList.add('fa-spin')
    }
    
    try {
      const url = 'https://api-drem.onrender.com/api/v1/main/auth/login'
      const body = {
        email: email.value,
        password: password.value
      }

      const data = await loginUserSubmit(url, body)
      console.log(data)
      if (data.valid === false) {
        console.log(data)
        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = 'Something went wrong. Try again'
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', '1')

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
        
        if (spinner && spinner.classList.contains('fa-spin')) {
          spinner.classList.replace('inline-block', 'hidden')
          spinner.classList.remove('fa-spin')
        }
        
        return console.error('Something went wrong!')
      }

      if (data.error) {
        let n = 0
        if (spinner && spinner.classList.contains('fa-spin')) {
          spinner.classList.replace('inline-block', 'hidden')
          spinner.classList.remove('fa-spin')
        }

        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = data.error
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', n+1)

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)

          n++
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
      }
      else {
        localStorage.setItem('accessToken', `Bearer ${data.accessToken}`)
        localStorage.setItem('refreshToken', `Bearer ${data.refreshToken}`)
        localStorage.setItem('userId', data.userId)

        location.href = '../pages/dashboard'
      }
    }
    catch(err) {
      throw err
    }
  }
}


const signupFormHandler = async (values, spinner) => {
  const { name, email, password, cpassword } = values

  const errorContainer = document.querySelector('.errors')

  const options = {
    name,
    email,
    password,
    cpassword
  }


  const results = validateSignupForm(options)
  if (spinner) {
    spinner.classList.replace('hidden', 'inline-block')
    spinner.classList.add('fa-spin')
  }
  if (results.valid === false) {
    if (spinner && spinner.classList.contains('fa-spin')) {
      spinner.classList.replace('inline-block', 'hidden')
      spinner.classList.remove('fa-spin')
    }
    
    let errors = results.errors
    
    errors.forEach((result, index) => {
      if (result.error) {

        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = result.error
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', index+1)

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
      }
    })
  }
  else if (results === true) {
    if (errorNumber.length > 0) {
      errorNumber = []
      errorContainer.innerHTML = ""
    }

    if (spinner) {
      spinner.classList.replace('hidden', 'inline-block')
      spinner.classList.add('fa-spin')
    }
    const url = 'https://api-drem.onrender.com/api/v1/main/check/email'

    const foundUser = 'A user with the provided email already exists'
    const notFoundUser = 'User does not exist'
    
    try {
      const emailCheckData = await checkEmail(email, url)
      if (!emailCheckData) {
        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = 'Something went wrong. Try again'
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', '1')

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
        
        if (spinner && spinner.classList.contains('fa-spin')) {
          spinner.classList.replace('inline-block', 'hidden')
          spinner.classList.remove('fa-spin')
        }
        
        return console.error('Something went wrong!')
      }

      if (emailCheckData === foundUser) {
        if (spinner && spinner.classList.contains('fa-spin')) {
          spinner.classList.replace('inline-block', 'hidden')
          spinner.classList.remove('fa-spin')
        }

        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = 'Email already exists'
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', '1')

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
      }
      else if (emailCheckData === notFoundUser) {
        if (spinner) {
          spinner.classList.replace('hidden', 'inline-block')
          spinner.classList.add('fa-spin')
        }

        const url = 'https://api-drem.onrender.com/api/v1/main/auth/register'
        const body = {
          name: name.value,
          email: email.value,
          password: password.value
        }

        const data = await createUserSubmit(url, body)
        if (!data) {
        const errorDiv = document.createElement('div')
        const errorMsg = document.createElement('span')
        const errorCancel = document.createElement('i')

        errorCancel.setAttribute('class', 'fa fa-times close')
        errorMsg.innerHTML = 'Something went wrong. Try again'
        errorDiv.setAttribute('class', 'error px-4 py-2 mb-3 rounded bg-red-400')
        errorDiv.setAttribute('id', '1')

        if (errorNumber.indexOf(errorDiv.id) == -1){
          errorNumber.push(errorDiv.id)
  
          errorDiv.appendChild(errorMsg)
          errorDiv.appendChild(errorCancel)
  
          errorContainer.appendChild(errorDiv)
        }

        errorCancel.addEventListener('click', () => {
          errorCancel.parentElement.classList.replace('error', 'hidden')
          const newList = errorNumber.filter(e => {
            return e != errorNumber.indexOf(errorCancel.parentElement.id)+1
          })
          errorNumber = newList
        })
        
        if (spinner && spinner.classList.contains('fa-spin')) {
          spinner.classList.replace('inline-block', 'hidden')
          spinner.classList.remove('fa-spin')
        }
        
        return console.error('Something went wrong!')
      }

        localStorage.setItem('accessToken', `Bearer ${data.accessToken}`)
        localStorage.setItem('refreshToken', `Bearer ${data.refreshToken}`)
        localStorage.setItem('userId', data.userId)

        location.href = '../pages/dashboard'
      }
    }
    catch(err) {
      throw err
    }
  }
}

if (signupForm) {
  const name = document.querySelector('input[name=name]')
  const email = document.querySelector('input[name=email]')
  const password = document.querySelector('input[name=password]')
  const cpassword = document.querySelector('input[name=cpassword]')

  const values = { name, email, password, cpassword }
  signupForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    signupFormHandler(values, btnLoader)
  })
}

if (loginForm) {
  const email = document.querySelector('input[name=email]')
  const password = document.querySelector('input[name=password]')

  const values = { email, password }
  loginForm.addEventListener('submit', (evt) => {
    evt.preventDefault()
    loginFormHandler(values, btnLoader)
  })
}
