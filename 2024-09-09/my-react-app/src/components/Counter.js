import React, { useState } from "react"

const Counter = () => {
  const [counter, setCounter] = useState(0)
  // const [counter, setCounter] = React.useState(0);

  const modifyCounter = amount =>
    setCounter(prevCounter => prevCounter + amount)

  return (
    <>
      <h1>{counter}</h1>

      {[
        { label: "+1", value: 1 },
        { label: "+5", value: 5 },
        { label: "-1", value: -1 },
        { label: "-5", value: -5 },
      ].map(element => (
        <button onClick={() => modifyCounter(element.value)}>
          sync {element.label}
        </button>
      ))}
    </>
  )
}

export default Counter
