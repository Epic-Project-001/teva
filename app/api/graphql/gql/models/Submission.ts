import mongoose from "mongoose";

const submissionSchema = new mongoose.Schema(
  {
    acknowledged: { type: Boolean, required: true },
    authorized: { type: Boolean },
    email: { type: String, required: true },
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    zipCode: { type: String, required: true },
    community: { type: [String] },
    black: { type: Boolean },
    hispanic: { type: Boolean },
    asian: { type: Boolean },
    language: { type: String },
  },
  { timestamps: true }
);

export default mongoose.models.Submission ||
  mongoose.model("Submission", submissionSchema);
