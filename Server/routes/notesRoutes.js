var express = require("express")

var router = express.Router()

const { getAllNotes, getNote, deleteNote, updateNote } = require("../controller/noteController")

router.get("/getAllNotes", getAllNotes)

router.post("/getNote", getNote)

router.delete("/updateNote", updateNote)

router.delete("/deleteNote", deleteNote)

module.exports = router
