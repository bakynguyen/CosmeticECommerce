const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    delete: { type: Boolean },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Products", productSchema);
