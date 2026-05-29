import mongoose from "mongoose";

const { Schema } = mongoose;

const teacherSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },

    address: {
      type: String,
      required: true,
    },

    sub: {
      type: String,
      required: true,
    },

    qualification: {
      type: String,
      default: "",
    },

    dob: {
      type: Date,
    },
  },
  { timestamps: true }
);

const TeacherModel = mongoose.model("teacher", teacherSchema);

export default TeacherModel;