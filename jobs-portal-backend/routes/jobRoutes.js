// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const { createJob, getAllJobs, deleteJob } = require("../Controllers/jobController");

// Route to create a job
router.post("/", createJob);

// Route to fetch all jobs
router.get("/", getAllJobs);

// Route to delete a job by ID
router.delete("/:jobId", deleteJob);

module.exports = router;
