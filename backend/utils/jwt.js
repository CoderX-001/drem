import jwt from 'jsonwebtoken'
import User from '../models/User.js'

export const signAccessToken = (user) => {
  const payload = user.id
  const secretKey = process.env.ACCESS_TOKEN

  const options = {
    expiresIn: '1y',
    issuer: 'drem.com',
    audience: [user.id],
  }

  const accessToken = jwt.sign(payload, secretKey, options)
  if (!accessToken) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  return accessToken
}

export const signRefreshToken = (user) => {
  const payload = user
  const secretKey = process.env.REFRESH_TOKEN

  const options = {
    expiresIn: '1y',
    issuer: 'drem.com',
    audience: [user],
  }

  const refreshToken = jwt.sign(payload, secretKey, options)
  if (!refreshToken) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  return refreshToken
}

export const signPrivateKey = (user) => {
  const payload = user
  const secretKey = process.env.PRIVATE_KEY_CHECK_TOKEN

  const options = { issuer: 'drem.com' }

  const privateKey = jwt.sign(payload, secretKey, options)
  if (!privateKey) return res.status(500).json({ error: 'Something went wrong. Try again!' })

  return privateKey
}

export const verifyPrivateKey = (req, res, next) => {
  const secretKey = process.env.PRIVATE_KEY_CHECK_TOKEN
  let token;

  if (!req.headers['private-key']) return res.status(403).json({ error: 'Cannot access without token' })

  const bearerHeader = req.headers['private-key']
  const bearerToken = bearerHeader.split(' ')
  token = bearerToken[1]

  try {
    const verify = jwt.verify(token, secretKey)

    req.user = User.findById(verify.id).select('-password')

    next()
  }
  catch (err) {
    throw err
  }

  if (!token) return res.status(403).json({ error: 'No token, cannot access' })
}

export const verifyAccessToken = (req, res, next) => {
  const secretKey = process.env.ACCESS_TOKEN
  let token;

  if (!req.headers['authorization']) return res.status(403).json({ error: 'Cannot access without token' })

  const bearerHeader = req.headers['authorization']
  const bearerToken = bearerHeader.split(' ')
  token = bearerToken[1]

  try {
    if (token) {
      const verify = jwt.verify(token, secretKey)

      req.user = User.findById(verify.id).select('-password')
      req.token = token

      next()
    }
  }
  catch (err) {
    throw err
  }

  if (!token) return res.status(403).json({ error: 'No token, cannot access' })
}
