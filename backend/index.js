const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const Course = require('./models/Course');

mongoose.connect("mongodb+srv://yasmine:1234@cluster0.yguhmob.mongodb.net/yourdbname", {
 
}).then(() => {
  console.log("Connected to the database successfully");
}).catch((error) => {
  console.error("Error connecting to the database:", error);
});

const app = express();

app.use(express.json());
app.use(cors());
app.use("/images", express.static("images"));



app.get('/api/courses', async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    console.error("Error fetching courses:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.post('/api/courses', async (req, res) => {
  try {
    const { title, description, price, image } = req.body;
    const course = new Course({ title, description, price, image });
    await course.save();
    res.status(201).json(course);
  } catch (error) {
    console.error("Error creating course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.put('/api/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, price, image } = req.body;
    await Course.findByIdAndUpdate(id, { title, description, price, image });
    res.sendStatus(200);
  } catch (error) {
    console.error("Error updating course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.delete('/api/courses/:id', async (req, res) => {
  try {
    const { id } = req.params;
    await Course.findByIdAndDelete(id);
    res.sendStatus(200);
  } catch (error) {
    console.error("Error deleting course:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.listen(3000, () => {
	console.log("I am listening in port 3000");
});