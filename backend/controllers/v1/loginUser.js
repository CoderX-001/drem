// VARIBALES
import bcrypt from 'bcryptjs'

import User from "../../models/User.js"
import { signAccessToken, signRefreshToken } from '../../utils/jwt.js'

const loginUser = async (req, res) => {
  const { email, password } = req.body

  if (!email || !password) return res.status(404).json({ error: 'Fields cannot be empty!' })

  try {
    const findUser = await User.findOne({ email })
    if (!findUser) return res.status(404).json({ error: 'Invalid login credentials!' })

    const verify = await bcrypt.compare(password, findUser.password)
    if (!verify) return res.status(401).json({ error: 'Invalid login credentials!' })

    const user = {
      id: findUser._id,
      email: findUser.email,
      name: findUser.name
    }
  
    const accessToken = await signAccessToken(user.id)
    const refreshToken = await signRefreshToken(user.id)
  
    if (!accessToken || !refreshToken) return res.status(500).json({ error: 'Something went wrong. Try again!' })

    const updateUser = await findUser.updateOne({ accessToken, refreshToken })
    if(!updateUser) return res.status(500).json({ error: 'Something went wrong. Try again!' })

    return res.status(201).json({ accessToken, refreshToken, userId: user.id })
  }
  catch(err) {
    throw err
  }
}

export default loginUser
