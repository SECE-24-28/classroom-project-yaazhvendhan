const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(cors());
app.use(express.json());

console.log("connecting...");

// MongoDB connection
mongoose
  .connect("mongodb://localhost:27017/mycourse")
  .then(() => console.log("DB connection successful..."))
  .catch((err) => console.log(err));

const Course = require("./model/CourseModel");

// GET all courses
app.get("/api/courses", async (req, res) => {
  try {
    const courses = await Course.find();
    res.json(courses);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST create course
app.post("/api/courses", async (req, res) => {
  try {
    const { title, duration } = req.body;

    if (!title || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const course = new Course({ title, duration });
    const savedCourse = await course.save();

    res.status(201).json(savedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// PUT update course by ID
app.put("/api/courses/:id", async (req, res) => {
  try {
    const { title, duration } = req.body;

    if (!title || !duration) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const updatedCourse = await Course.findByIdAndUpdate(
      req.params.id,
      { title, duration },
      { new: true }
    );

    if (!updatedCourse) {
      return res.status(404).json({ message: "Course not found" });
    }

    res.json(updatedCourse);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});








// Start server
app.listen(PORT, () =>
  console.log(`Server is running on http://localhost:${PORT}`)
);
