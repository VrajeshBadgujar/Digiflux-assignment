const mongoose = require("mongoose");
// const validator = require("validator");

const studentSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
  },

  rollno:{
    required: true,
    type: Number,
  },

  marks:{
    required: true,
    type: Number,
    unique: true
    // max: 100,
  }


});

const Student = new mongoose.model("Student", studentSchema);

module.exports = Student;
