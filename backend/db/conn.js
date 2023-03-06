import mongoose from 'mongoose'

const conn = (url) => {
  mongoose.set('strictQuery', true)
  
  mongoose.connect(url, {
    maxPoolSize: 50,
    connectTimeoutMS: 2500,
    useNewUrlParser: true,
    dbName: 'dremAPI'
  }, (err, success) => {
    if (err) throw err
  
    if (success) console.log('Database connected...')
  })
}


export default conn