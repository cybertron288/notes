// models
const Note = require("../model/note") // Mongo User Schema

  const notesFromApi = [
    {
      id:'SOME245RANDOM',
      title: "note 1",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: false,
    },
    {
      id:'SOME255RANDOM',
      title: "note 2",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: true,
    },
    {
      id:'SOME265RANDOM',
      title: "note 3",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: false,
    },
    {
      id:'SOME275RANDOM',
      title: "note 4",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: false,
    },
    {
      id:'SOME285RANDOM',
      title: "note 5",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: false,
    },
    {
      id:'SOME295RANDOM',
      title: "note 6",
      tagLine: "tagline for note 1",
      content: "lorem ipsum dolor sit amet",
      isPinned: false,
    },
  ]
 

const getAllNotes = async (req, res) => {
  let allNotes
  try {
    // allNotes = await Note.find()
    allNotes = notesFromApi
  } catch (error) {
    return res
      .status(500)
      .json({ status: "error", error: "error in reading database" })
  }
  return res.status(200).json({ status: "ok", data: allNotes })
}
const getNote = async (req, res) => {
  const { _id } = req.body
  console.log("body", req.body)
  // const note = await Note.findOne({ _id }).lean()

  const note = notesFromApi.find(el => el.id === _id)



  if (note) {
    return res.status(200).json({ status: "ok", data: note })
  }
  return res.status(404).json({ status: "ok", data: "course not found" })
}

const updateNote = async (req, res) => {
  // !left with delete notes logic
 }


const deleteNote = (req, res) => { 
  const { id } = req.body
  console.log("body", req.body, )
  // const note = await Note.findOne({ _id }).lean()
  let usersWithoutTim = notesFromApi.filter(el => el.id !== id);

  if (usersWithoutTim) {
    return res.status(200).json({ status: "ok", data: usersWithoutTim })
  }
  return res.status(404).json({ status: "ok", data: "server error" })
}

module.exports = {
  getAllNotes,
  getNote,
  deleteNote,
  updateNote
}
