import React, { useState } from "react"
import "./App.css"
import Name from "./components/Name"
import Counter from "./components/Counter"
import PropDrilling from "./components/PropDrilling"
import Show from "./components/Show"
import Context from "./components/Context"
import MyInfo from "./components/MyInfo"

function App() {
  const [show, setShow] = useState(true)
  const hobbies = ["biking", "hiking", "camping"]
  const name = "Taavi"

  const toggleShow = () => setShow(prevShow => !prevShow)

  return (
    <>
      <Context />
      <Show
        show={show}
        toggleShow={toggleShow}
      />
      <PropDrilling />
      <Counter />
      <Name />
      <hr></hr>
      <MyInfo
        name={name}
        hobbies={hobbies}
      />
    </>
  )
}

export default App
