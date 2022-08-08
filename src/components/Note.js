import { Box, Container, Grid, Pagination, Typography } from "@mui/material"
import React, { useEffect, useState, useContext } from "react"
import CardLayout from "./Card"
import showToast from "../services/toasterService"
import NotesPopup from "./NotesPopup";
import GlobalContext from "../context/Global/GlobalContext";



const Note = () => {
  const { notesFromApi } = useContext(GlobalContext);
  const [pinnedNotes, setPinnedNotes] = useState([])
  const [notPinnedNotes, setNotPinnedNotes] = useState([])
  const [fakeNotes, setFakeNotes] = useState(notesFromApi)
  const [openNoteId, setopenNoteId] = useState()

  const [open, setOpen] = useState(false);

  const handleClickOpen = (id) => {
    
    setopenNoteId(id)
    setOpen(true);
    console.log(id)
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

  const handlePinClick = (e,id) => {
    e.stopPropagation();
    const pinnedNotesFiltered = fakeNotes.filter(checkIfPinned)
    if (pinnedNotesFiltered.length > 1) {
      showToast('error','cannot pin more than 2 notes.');
    } else {
      let newFakeNotes = [...fakeNotes]
      newFakeNotes.find((n) => n.id === id).isPinned = !newFakeNotes.find(
        (n) => n.id === id
      ).isPinned
      setFakeNotes(newFakeNotes)
    }
  }

  const handleRemovePin = (e,id) =>{
    e.stopPropagation();
    let newFakeNotes = [...fakeNotes]
    newFakeNotes.find((n) => n.id === id).isPinned = !newFakeNotes.find(
      (n) => n.id === id
    ).isPinned
    setFakeNotes(newFakeNotes)
  }

  return (
    <>
{openNoteId ? <NotesPopup handleClose={handleClose} open={open} id={openNoteId}  /> : null}
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
                <Grid item xs={4} key={index} onClick={()=>handleClickOpen(note.id)}>
                  <CardLayout
                    title={note.title}
                    tagLine={note.tagLine}
                    content={note.content}
                    isPinned={note.isPinned}
                    handlePinClick={handlePinClick}
                    handleRemovePin = {handleRemovePin}
                    id={note.id}
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
              <Grid item xs={4} key={index} onClick={()=>handleClickOpen(note.id)}>
                <CardLayout
                  title={note.title}
                  tagLine={note.tagLine}
                  content={note.content}
                  handlePinClick={handlePinClick}
                  handleRemovePin = {handleRemovePin}
                  id={note.id}
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
