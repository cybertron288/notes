import { Box, Container, Grid, Pagination, Typography } from "@mui/material"
import React, { useEffect, useState } from "react"
import CardLayout from "./Card"
import showToast from "../services/toasterService"
import NotesPopup from "./NotesPopup";

const notesFromApi = [
  {
    title: "note 1",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: false,
  },
  {
    title: "note 2",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: true,
  },
  {
    title: "note 3",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: false,
  },
  {
    title: "note 4",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: false,
  },
  {
    title: "note 5",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: false,
  },
  {
    title: "note 6",
    tagLine: "tagline for note 1",
    content: "lorem ipsum dolor sit amet",
    isPinned: false,
  },
]

const Note = () => {
  const [pinnedNotes, setPinnedNotes] = useState([])
  const [notPinnedNotes, setNotPinnedNotes] = useState([])
  const [fakeNotes, setFakeNotes] = useState(notesFromApi)

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const checkIfPinned = (note) => {
    return note.isPinned === true
  }

  const checkIfNotPinned = (note) => {
    return note.isPinned === false
  }

  useEffect(() => {
    if (fakeNotes.length > 0) {
      const pinnedNotesFiltered = fakeNotes.filter(checkIfPinned)
      
      setPinnedNotes(pinnedNotesFiltered)
      const notPinnedNotesFiltered = fakeNotes.filter(checkIfNotPinned)
      setNotPinnedNotes(notPinnedNotesFiltered)
    }

    return () => {}
  }, [fakeNotes])

  const handlePinClick = (title) => {
    const pinnedNotesFiltered = fakeNotes.filter(checkIfPinned)
    if (pinnedNotesFiltered.length > 1) {
      showToast('error','cannot pin more than 2 notes.');
    } else {
      let newFakeNotes = [...fakeNotes]
      newFakeNotes.find((n) => n.title === title).isPinned = !newFakeNotes.find(
        (n) => n.title === title
      ).isPinned
      setFakeNotes(newFakeNotes)
    }
  }

  const handleRemovePin = (title) =>{
    let newFakeNotes = [...fakeNotes]
    newFakeNotes.find((n) => n.title === title).isPinned = !newFakeNotes.find(
      (n) => n.title === title
    ).isPinned
    setFakeNotes(newFakeNotes)
  }

  return (
    <>
<NotesPopup handleClose={handleClose} open={open} />
      <Container maxWidth="xl" sx={{ marginY: 2 }}>
        {pinnedNotes.length !== 0 ? (
          <Box sx={{ width: "100%" }}>
            <Typography variant="overline" color={"primary"}>
              Pinned
            </Typography>
            <Grid
              container
              spacing={2}
              alignItems="center"
              justifyContent="left"
              marginY={2}
            >
              {pinnedNotes.map((note, index) => (
                <Grid item xs={4} key={index} onClick={handleClickOpen}>
                  <CardLayout
                    title={note.title}
                    tagLine={note.tagLine}
                    content={note.content}
                    isPinned={note.isPinned}
                    handlePinClick={handlePinClick}
                    handleRemovePin = {handleRemovePin}
                    
                  />
                </Grid>
              ))}
            </Grid>
          </Box>
        ) : null}
        <Box sx={{ width: "100%" }}>
          {pinnedNotes.length !== 0 ? (
            <Typography variant="overline" color={"primary"}>
              Others
            </Typography>
          ) : null}
          <Grid
            container
            spacing={2}
            alignItems="center"
            justifyContent="left"
            marginY={2}
          >
            {notPinnedNotes.map((note, index) => (
              <Grid item xs={4} key={index} onClick={handleClickOpen}>
                <CardLayout
                  title={note.title}
                  tagLine={note.tagLine}
                  content={note.content}
                  handlePinClick={handlePinClick}
                  handleRemovePin = {handleRemovePin}
                  
                />
              </Grid>
            ))}
          </Grid>
        </Box>

        <Pagination count={10} color="primary" />
      </Container>
 
    </>
  )
}

export default Note
