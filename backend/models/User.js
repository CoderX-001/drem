import mongoose from 'mongoose'
const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  accessToken: {
    type: String,
    required: true
  },
  refreshToken: {
    type: String,
    required: true
  },
  projects: {
    type: Array,
    required: false
  },
  publicKey: {
    type: String,
    required: false
  },
  privateKey: {
    type: String,
    required: false
  }
})

const User = mongoose.model('Developers', UserSchema)

export default User