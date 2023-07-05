const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema(
  {
    user: {
      type: String,
      required: true
    },
    repo: {
      type: String,
      required: true
    },
    files: [
      {
        path: { type: String, required: true },
        language: { type: String, required: true },
        createdAt: {
          type: Date,
          default: Date.now
        }
      }
    ]
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model("Project", projectSchema);
