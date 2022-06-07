const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const educationSchema = new Schema({
  education_name: {
    type: String,
    required: true
  },
  location: {
    type: String,
    required: true
  },
  phone_number:{
      type:String,
      required: true
  },
  mode_of_learning:{
      type: String,
      required: true
  }

});



module.exports = mongoose.model('Education', educationSchema);
