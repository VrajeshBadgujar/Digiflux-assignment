const express = require("express");
require("./db/conn");
const Student = require("./models/student");
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

// created student

app.post("/students", (req, res) => {
  console.log(req.body);
  const user = new Student(req.body);
  user
    .save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch((e) => {
      res.status(400).send(e);
    });
});

// get all the student

app.get("/students", async (req, res) => {
  try {
    const studentsData = await Student.find();
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

// get individual student through rollno

app.get("/students/:rollno", async (req, res) => {
  try {
    const rollno = req.params.rollno;
    const data = await Student.find({ rollno: rollno });
    console.log(data);

    if (!data) {
      return res.status(404).send();
    } else {
      res.send(data);
    }
  } catch (error) {
    res.status(500).send();
  }
});

// delete individual student through rollno

app.delete("/students/:rollno", async (req, res) => {
  try {
    const rollno = req.params.rollno;
    const deleteData = await Student.findOneAndDelete({ rollno: rollno });
    console.log(deleteData);
    if (!deleteData) {
      res.status(404).send();
    }
    res.send(deleteData);
  } catch (error) {
    res.status(500).send(error);
  }
});

// get all the students by their marks high to low

app.get("/students/:marks", async (req, res) => {
  try {
    const studentsData = await Student.find({}).sort({ marks: -1 });
    console.log(studentsData);
    res.send(studentsData);
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`CONNECTION IS SETUP AT ${port}`);
});
