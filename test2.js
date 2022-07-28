import mongoose from 'mongoose'

const URL = 'mongodb://abc:test@cluster0.abc.mongodb.net/ecommerce?retryWrites=true&w=majority'

const connection = mongoose.connect(URL, {
  useNewUrlParser: true
}).then(_ => console.log('Aplicación conectada a MongoDB Atlas'))

export default connection
