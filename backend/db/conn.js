import mongoose from 'mongoose'

const conn = (url) => {
  mongoose.set('strictQuery', true)
  
  mongoose.connect(url, {
    maxPoolSize: 50,
    connectTimeoutMS: 2500,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'dremAPI'
  }).then(() => console.log('Database connected...'))
  .catch(err => console.error(err))
}


export default conn
