// VARIABLES
import express from 'express'

import User from '../../models/User.js'
import createUser from '../../controllers/v1/createUser.js'
import loginUser from '../../controllers/v1/loginUser.js'

const router = express.Router()

router.get('/check/email', async (req, res) => {
  const { email } = req.query
  console.log(email)

  if (!email) return res.status(400).json({ message: 'No email in request' })

  const findEmail = await User.findOne({ email })

  if (!findEmail) return res.status(200).json({ message: 'User does not exist' })

  return res.status(200).json({ message: 'A user with the provided email already exists' })
})

router.post('/auth/register', createUser)
router.post('/auth/login', loginUser)

export default router