//mongoose allows us to interact with the mongodb
const mongoose = require('mongoose'); 
const Schema = mongoose.Schema;

// Define collection and schema
let Thesis = new Schema(
{
   title: {
      type: String
   },
   author: {
      type: String
   },
   dateApproved: {
      type: String
   },
   department: {
      type: String
   },
   description: {
      type: String
   }
},

// Thesis Schema for "theses" collection in the mongodb
   {
      collection: 'theses'
   })

module.exports = mongoose.model('Thesis', Thesis)