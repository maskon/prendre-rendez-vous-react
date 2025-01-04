import { useState } from "react"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Context from "./Context"
import Home from "./pages/Home"
import Cabinet from "./pages/Cabinet"

let indexDate, indexClock

export default function App() {
  const [add, setAdd] = useState([])

  function addCart(item) {
    const exists = add.some((existingItem) => existingItem.id === item.id)
    if (!exists) {
      setAdd((prev) => [
        ...prev,
        {
          ...item,
          date: item.date[indexDate],
          clock: item.clock[indexClock],
        },
      ])
    }
  }

  function removeCart(id) {
    setAdd((prev) => prev.filter((item) => item.id !== id))
  }

  function handleClickDate(index) {
    indexDate = index
  }

  function handleClickClock(index) {
    indexClock = index
  }

  return (
    <Context.Provider
      value={{
        addCart,
        removeCart,
        handleClickDate,
        handleClickClock,
        indexDate,
        indexClock,
        add,
      }}
    >
      <Router basename='/prendre-rendez-vous-react'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<Cabinet />} />
          {/* <Route path='*' element={<NotFound />} /> */}
        </Routes>
      </Router>
    </Context.Provider>
  )
}
