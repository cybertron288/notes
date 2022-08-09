import GlobalContext from "./GlobalContext"
import React, { useState, useEffect } from "react"
import axios from "axios"
const BASE_URL = "http://localhost:5005"

const GlobalState = ({ children }) => {
  const [notesFromApi, setNotesFromApi] = useState([])

  useEffect(() => {
    getAllNotes()
  }, [])

  const getAllNotes = () => {
    axios.get(`${BASE_URL}/api/getAllNotes`).then((res) => {
      setNotesFromApi(res.data.data)
      console.log(res.data.data)
    })
  }

  const deleteNote = (id) => {
    axios
      .delete(`${BASE_URL}/api/deleteNote`, {
        data: { id: id },
        headers: { Authorization: "***" },
      })
      .then((res) => {
        console.log("deleted", res.data)
        getAllNotes()
      })
  }

  const updateNOte = (data) => {
    axios
      .put(`${BASE_URL}/api/updateNote`, {
        data: data,
        headers: { Authorization: "***" },
      })
      .then((res) => {
        console.log("updated", res.data)
        getAllNotes()
      }).catch((err) => {
        console.log(err)
      }
      )
  }
  return (
    <GlobalContext.Provider value={{ notesFromApi, deleteNote }}>
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState
