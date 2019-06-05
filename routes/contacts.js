const express = require("express");

const router = express.Router();

// @route  Get api/contacts;
// @desc Get All Users Contacts;
// @access Private;
router.get("/", (req, res) => {
  res.send("Get all contacts, contactsб сщтефсеы, contacts");
});

// @route  POST api/contacts;
// @desc Add new contacts;
// @access Private;
router.post("/", (req, res) => {
  res.send("Add contact");
});

// @route  PUT api/contacts/:id;
// @desc Update contacts;
// @access Private;
router.put("/:id", (req, res) => {
  res.send("Update Contact");
});

// @route  DELETE api/contacts/:id;
// @desc Update contacts;
// @access Private;
router.delete("/:id", (req, res) => {
  res.send("Delete Contact");
});

module.exports = router;
