import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import TeacherModel from "./models/teacher.model.js";

const app = express();
const port = 3000;

// ======================
// Middleware
// ======================
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// MongoDB Connection

const connectDB = async () => {
  try {

    await mongoose.connect("mongodb+srv://ankitgupta23391_db_user:hQukLuvUH7velqJZ@cluster0.kihvb0j.mongodb.net/newTeacher");

    console.log("MongoDB Connected Successfully...............");

  } catch (error) {

    console.log("MongoDB Connection Failed");
    console.log(error.message);

  }
};

connectDB();


// Home Route

app.get("/", (req, res) => {
  res.send("Teacher API Running Successfully");
});



// CREATE TEACHER

app.post("/addteacher", async (req, res) => {

  try {

    const {
      name,
      address,
      sub,
      qualification,
      dob,
    } = req.body;

    // Validation
    if (!name || !address || !sub) {
      return res.status(400).json({
        success: false,
        message: "Name, Address and Subject are required",
      });
    }

    // Create Teacher
    const newTeacher = await TeacherModel.create({
      name,
      address,
      sub,
      qualification,
      dob,
    });

    res.status(201).json({
      success: true,
      message: "Teacher Added Successfully",
      data: newTeacher,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Teacher Not Added",
      error: error.message,
    });

  }

});



// GET ALL TEACHERS

app.get("/allteachers", async (req, res) => {

  try {

    const teachers = await TeacherModel.find();

    res.status(200).json({
      success: true,
      totalTeachers: teachers.length,
      data: teachers,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Teachers Not Found",
      error: error.message,
    });

  }

});



// GET SINGLE TEACHER

app.get("/singleteacher/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const teacher = await TeacherModel.findById(id);

    if (!teacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      data: teacher,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      error: error.message,
    });

  }

});


// ======================
// UPDATE TEACHER
// ======================
app.patch("/updateteacher/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const updatedTeacher = await TeacherModel.findByIdAndUpdate(
      id,
      req.body,
      { new: true }
    );

    if (!updatedTeacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher Updated Successfully",
      data: updatedTeacher,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Teacher Not Updated",
      error: error.message,
    });

  }

});


// ======================
// DELETE TEACHER
// ======================
app.delete("/deleteteacher/:id", async (req, res) => {

  try {

    const { id } = req.params;

    const deletedTeacher = await TeacherModel.findByIdAndDelete(id);

    if (!deletedTeacher) {
      return res.status(404).json({
        success: false,
        message: "Teacher Not Found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Teacher Deleted Successfully",
      data: deletedTeacher,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: "Teacher Not Deleted",
      error: error.message,
    });

  }

});



app.get("/viewteacher/:id", async (req, res) => {

  try {

    const teacher = await TeacherModel.findById(req.params.id);

    if (!teacher) {

      return res.status(404).json({
        success: false,
        message: "Teacher not found",
      });

    }

    res.status(200).json({
      success: true,
      data: teacher,
    });

  } catch (error) {

    res.status(500).json({
      success: false,
      message: error.message,
    });

  }

});

// ======================
// Server Start
// ======================
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});