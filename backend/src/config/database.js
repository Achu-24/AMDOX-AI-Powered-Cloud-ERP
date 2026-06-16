/* eslint-disable no-undef */
const mongoose = require('mongoose')

const connectDB = async () => {
  const conn = await mongoose.connect(process.env.MONGO_URI, {
    dbName: process.env.DB_NAME || 'amdox_erp',
  })
  console.log(`MongoDB connected: ${conn.connection.host}`)
}

module.exports = connectDB