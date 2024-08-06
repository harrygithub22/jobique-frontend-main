import Job from "../models/jobModel.js";
import { StatusCodes } from "http-status-codes";

export const getJobs = async (req, res) => {
  const jobs = await Job.find();
  res.status(StatusCodes.OK).json({ nbHits: jobs.length, jobs });
};

export const getJob = async (req, res) => {
  const job = await Job.findById(req.params.id);
  if (!job) return res.status(StatusCodes.NOT_FOUND).send();
  res.status(StatusCodes.OK).json({ job });
};

export const addJob = async (req, res) => {
  const job = await Job.create(req.body);
  res.status(StatusCodes.CREATED).json({ job });
};
export const updateJob = async (req, res) => {
  const {
    params: { id: jobId },
    body: { company, jobStatus, position, jobType, jobLocation },
  } = req;
  const job = await Job.findOneAndUpdate(
    {
      _id: jobId,
    },
    req.body,
    { new: true, runValidators: true }
  );
  if (!job)
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `Job id with :${jobId} not found `});
  res.status(StatusCodes.OK).json({ job });
};
export const removeJob = async (req, res) => {
  const { id } = req.params;
  const job = await Job.findOneAndDelete({ _id: id });
  if (!job)
    res
      .status(StatusCodes.NOT_FOUND)
      .json({ msg: `Job id with :${jobId} not found `});
  res.status(StatusCodes.OK).send();
};