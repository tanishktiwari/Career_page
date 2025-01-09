// controllers/jobController.js
const Job = require("../models/Job");

const createJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json({ message: "Job posted successfully", job: newJob });
  } catch (error) {
    res.status(400).json({ message: "Error posting job", error: error.message });
  }
};

const getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find();
    res.status(200).json(jobs);
  } catch (error) {
    res.status(400).json({ message: "Error fetching jobs", error: error.message });
  }
};
// Delete a job by ID
const deleteJob = async (req, res) => {
  try {
    const { jobId } = req.params; // Get job ID from request parameters
    const job = await Job.findByIdAndDelete(jobId);

    if (!job) {
      return res.status(404).json({ message: "Job not found" });
    }

    res.status(200).json({ message: "Job deleted successfully" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

module.exports = {
  createJob,
  getAllJobs,
  deleteJob
};
