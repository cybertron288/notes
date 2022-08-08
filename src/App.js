import "./App.css"
import Notes from "./pages/Notes"
import theme from "./Theme/Theme"
import { ThemeProvider } from "@mui/material"
import { Toaster } from "react-hot-toast"
import { AppContextProvider } from "./context/appContextProvider"

function App() {
  return (
    <>
      <Toaster />
      <AppContextProvider>
      <ThemeProvider theme={theme}>
        <Notes />
      </ThemeProvider>
      </AppContextProvider>
    </>
  )
}

export default App
