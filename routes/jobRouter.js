import express from "express";
import { addJob, getJob, getJobs, removeJob, updateJob } from "../controllers/jobController.js"
import { validateJobInput } from "../middleware/validationMiddleware.js";
const jobRouter = express.Router()

jobRouter.route("/").post(validateJobInput,addJob).get(getJobs)
jobRouter.route("/:id").get(getJob).delete(removeJob).patch(validateJobInput,updateJob)

export default jobRouter