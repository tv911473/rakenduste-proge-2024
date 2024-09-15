import React from "react"
import "../MyInfo.css"

const MyInfo = ({ name, hobbies }) => {
  return (
    <div className="personal-info-container">
      <h1>{name}</h1>
      <ul className="hobbies">
        <h2>Hobbies:</h2>
        {hobbies.map(hobby => (
          <li>{hobby}</li>
        ))}
      </ul>
      <form className="form">
        <input
          type="email"
          id="email"
          placeholder="E-mail"
        />
        <textarea
          id="text"
          placeholder="Your message..."
        />
        <button
          name="send-button"
          type="button"
        >
          Send
        </button>
      </form>
    </div>
  )
}
export default MyInfo
