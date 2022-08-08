import React, { useContext, useEffect, useState } from "react"
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Zoom from '@mui/material/Zoom';
import './NotesPopup.css'
import GlobalContext from "../context/Global/GlobalContext";
import { alpha, styled } from '@mui/material/styles';

const Transition = React.forwardRef(function Transition(props, ref) {
  // return <Slide direction="up" ref={ref} {...props} />;
  return <Zoom in={true} style={{ transitionDelay: '0ms' }} {...props}>
</Zoom>
});




const NotesPopup = (props) => {
  // const classes = useStyles();
  const { notesFromApi } = useContext(GlobalContext);
  const [Note, setNote] = useState([])

  const { id, open, handleClose } = props

useEffect(() => {
  
  if (notesFromApi.length > 0) {
    const openNote = notesFromApi.filter(note => note.id === id)
    setNote(...openNote)
  }

  
}, [id, notesFromApi])

  const UpdateNote = (e) => {
    e.preventDefault()
    console.log(Note)
    
  }

 

  return (
    <div>
      <Dialog TransitionComponent={Transition} open={open} onClose={handleClose} >
        <DialogTitle><TextField fullWidth variant="outlined" onChange={(e) => setNote({...Note, title:e.target.value})} id="fullWidth" value={Note.title} /></DialogTitle>
        <DialogContent>
          <DialogContentText>
           
           <TextField fullWidth variant="outlined"  id="fullWidth" value={Note.tagLine} onChange={(e) => setNote({...Note, tagLine: e.target.value})} sx={{padding:0, borderColor:'red'}} />
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Start typing to add note..."
            type="text"
            fullWidth
            variant="outlined"
            value={Note.content}
            onChange={(e) => setNote({...Note, content: e.target.value})}
            multiline
  rows={4}
  maxRows={8}
  sx={{mt:3}}
          />
        </DialogContent>
        <DialogActions sx={{paddingY:2, paddingX:2}}>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={UpdateNote}>Save</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

export default  NotesPopup