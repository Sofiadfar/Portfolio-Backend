const Contact = require("../models/Contact");

exports.createContact = async (req, res, next) => {
  try {
    const { name, email, message } = req.body;

    const newContact = await Contact.create({
      name,
      email,
      message,
    });

    res.status(201).json({
      success: true,
      message: "Message submitted successfully",
      data: newContact,
    });
  } catch (error) {
    next(error);
  }
};
