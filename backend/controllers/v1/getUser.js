// VARIABLES
import User from "../../models/User.js"

const getUser = async () => {
  const { userId } = req.body
  const { id } = req.user

  console.log(req.user)

  if (id !== userId) return res.status(403).json({ error: 'Invalid token!' })

  const findUser = await User.findOne({ _id: id })
  if (!findUser) return res.status(403).json({ error: 'Invalid token' })

  return res.status(200).json(req.user)
}

export default getUser