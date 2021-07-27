const express = require("express");
const router = express.Router();

const { createNote, getNote, getOneNote } = require("../controllers/noteController");

router.route("/create").post(createNote);
router.route("/view").get(getNote);
router.route("/view/:id").get(getOneNote);

module.exports = router