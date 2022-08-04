import "./App.css"
import Notes from "./pages/Notes"
import theme from "./Theme/Theme"
import { ThemeProvider } from "@mui/material"
import { Toaster } from "react-hot-toast"

function App() {
  return (
    <>
      <Toaster />
      <ThemeProvider theme={theme}>
        <Notes />
      </ThemeProvider>
    </>
  )
}

export default App
