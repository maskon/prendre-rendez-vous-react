import { useState } from "react"
import Context from "../../Context"

function ContextProvider({ children }) {
  const [add, setAdd] = useState([])

  let indexDate, indexClock

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
    <Context.Provider value={{ add, indexDate, indexClock, addCart, removeCart, handleClickDate, handleClickClock }}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider
