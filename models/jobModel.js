import mongoose from "mongoose";
import {JOB_STATUS, JOB_TYPE, } from "../util/constants.js"

const jobSchema = mongoose.Schema(
  {
    company: String,
    profile: String,
    jobStatus: {
      type: String,
      enum: Object.values(JOB_STATUS),
      default: "pending",
    },
    jobType: {
      type: String,
      enum: Object.values(JOB_TYPE),
      default: "full-time",
    },
    jobLocation: {
      type: String,
      default: "ghaziabad",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Job", jobSchema);