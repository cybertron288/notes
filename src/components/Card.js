import React, { useState } from "react"
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import PushPinRoundedIcon from '@mui/icons-material/PushPinRounded';
import Typography from '@mui/material/Typography';
import {  CardActionArea,  CardHeader, IconButton } from '@mui/material';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';




const CardLayout = (props) =>  {
    const {title, id, tagLine, content, isPinned, handlePinClick, handleRemovePin, handleNoteOpen } = props;
    const [showBtns, setShowBtns] = useState(false)
  return (
    <Card sx={{backgroundColor:'#00C39A', position: 'relative'}} onMouseOver={()=>setShowBtns(true)} 
    onMouseOut={()=>setShowBtns(false)} >
      <CardActionArea onClick={handleNoteOpen}>
      <CardHeader
        
        action={
            isPinned ? <IconButton aria-label="settings" onClick={(e) =>handleRemovePin(e,id)}>
            <PushPinRoundedIcon />
          </IconButton>: null
        }
        title={title}
        subheader={tagLine}
      />
        <CardContent sx={{ minHeight: "150px" }}>
          
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
          {showBtns && !isPinned ? 
     
     <IconButton sx={{position: 'absolute', bottom: 4, right: 4}} variant='contained' aria-label="upload picture" component="span" onClick={(e) => handlePinClick(e, id)}>
   <PushPinOutlinedIcon />
 </IconButton>
    : null}
        </CardContent>
        
      </CardActionArea>
      
    </Card>
  );
}

export default CardLayout;