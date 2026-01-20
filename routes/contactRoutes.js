const express = require("express");
const { body } = require("express-validator");
const { createContact } = require("../controllers/contactController");
const validateRequest = require("../middlewares/validateRequest");

const router = express.Router();

router.post(
  "/",
  [
    body("name").notEmpty().withMessage("Name is required"),
    body("email").isEmail().withMessage("Valid email is required"),
    body("message").notEmpty().withMessage("Message is required"),
  ],
  validateRequest,
  createContact,
);

module.exports = router;
