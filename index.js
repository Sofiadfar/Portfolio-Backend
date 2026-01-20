const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const contactRoutes = require("./routes/contactRoutes");
const errorHandler = require("./middlewares/errorMiddleware");

const app = express();

/* ================= MIDDLEWARES ================= */
app.use(cors({ origin: "*" }));
app.use(express.json());

/* ================= DATABASE ================= */
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => {
    console.error("MongoDB Error:", err.message);
    process.exit(1);
  });

/* ================= ROUTES ================= */
app.use("/api/contact", contactRoutes);

app.get("/", (req, res) => {
  res.send("Portfolio Backend API is running 🚀");
});

/* ================= ERROR HANDLER ================= */
app.use(errorHandler);

/* ================= SERVER START ================= */
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
