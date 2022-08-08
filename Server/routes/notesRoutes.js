var express = require("express")

var router = express.Router()

const { getAllNotes, getNote } = require("../controller/noteController")

router.get("/getAllNotes", getAllNotes)

router.post("/get_courses", getNote)

module.exports = router
