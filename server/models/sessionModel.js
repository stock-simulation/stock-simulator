const mongoose = require('mongoose');
const Schema = mongoose.Schema;


//Use Mongo's automatic document expiration service by giving the Mongoose schema the expires property.
//The session will be automatically removed after 300 seconds (5 minutes)

const sessionSchema = new Schema({
  cookieId: { type: String, required: true, unique: true },
  createdAt: { type: Date, expires: 300, default: Date.now }
});

module.exports = mongoose.model('Session', sessionSchema);