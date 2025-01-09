// models/Job.js
const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
  companyName: { type: String, required: true },
  companyWebsite: { type: String, required: true },
  jobTitle: { type: String, required: true },
  jobCategory: { type: String, required: true },
  jobType: { type: String, required: true },
  jobLocation: { type: String, required: true },
  salaryRange: { type: String, required: true },
  experience: { type: String, required: true },
  qualification: { type: String, required: true },
  applicationDeadline: { type: Date, required: true },
  applicationLink: { type: String, required: true },
  jobDescription: { type: String, required: true },
});

const Job = mongoose.model("Job", jobSchema);

module.exports = Job;
