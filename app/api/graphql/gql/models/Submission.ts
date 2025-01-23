import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema({
  email: { type: String, required: true },
  firstname: { type: String, required: true },
  lastname: { type: String, required: true },
  zipCode: { type: String, required: true },
});

export default mongoose.models.Submission ||
  mongoose.model("Submission", submissionSchema);
