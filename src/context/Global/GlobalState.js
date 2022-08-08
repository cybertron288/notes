import GlobalContext from './GlobalContext';
import React, { useState } from 'react'
// import axios from "axios"
// import { BASE_URL } from "../../constants"

const GlobalState = ({children}) => {

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
 
    return (
        <GlobalContext.Provider value={{ notesFromApi }}>
          {children}
        </GlobalContext.Provider>
      )
}

export default GlobalState;