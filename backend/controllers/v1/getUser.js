// VARIABLES
import User from "../../models/User.js"

const getUser = async (req, res) => {
  const { userId } = req.body

  console.log(req.headers['authorization'])

  const findUser = await User.findOne({ _id: userId })
  if (!findUser) return res.status(403).json({ error: 'Invalid token' })

  const user = {
    name: findUser.name,
    email: findUser.email,
    appType: findUser.appType,
    appName: findUser.appName,
    publicKey: findUser.publicKey,
    privateKey: findUser.privateKey
  }
  return res.status(200).json(user)
}

export default getUser
