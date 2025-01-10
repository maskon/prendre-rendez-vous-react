import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import Cabinet from "./pages/Cabinet"
import ContextProvider from "./components/ContextProvider/ContextProvider"

function App() {
  return (
    <ContextProvider>
      <Router basename='/prendre-rendez-vous-react'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Cabinet />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </ContextProvider>
  )
}

export default App
