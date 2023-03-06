// VARIABLES
import bcrypt from 'bcryptjs'

import User from '../../models/User.js'
import { signAccessToken, signRefreshToken } from '../../utils/jwt.js'

const createUser = async (req, res) => {
  const { name, email, password } = req.body

  if (!name || !email || !password) return res.status(404).json({ error: 'Fields cannot be empty!' })

  const salt = await bcrypt.genSalt(10)
  if (!salt) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  const hash = await bcrypt.hash(password, salt)
  if (!hash) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  const newUser = new User({
    name,
    email,
    password: hash
  })

  const user = {
    id: newUser._id,
    email: newUser.email,
    name: newUser.name
  }

  const accessToken = await signAccessToken(user)
  const refreshToken = await signRefreshToken(user)

  if (!accessToken || !refreshToken) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  newUser.accessToken = accessToken
  newUser.refreshToken = refreshToken

  const saveUser = await newUser.save()

  if (!saveUser) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  return res.status(201).json({ accessToken, refreshToken, userId: user.id })

}

export default createUser