const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
// Thesis Schema for "theses" collection in the mongodb
let Thesis = new Schema(
{
   title: {
      type: String
   },
   author: {
      type: String
   },
   department: {
      type: String
   },
   description: {
      type: String
   },
   dateUpload: {
      type: Date, default: Date.now()
   }
},

   {
      collection: 'theses'
   })

module.exports = mongoose.model('Thesis', Thesis)