import { useState } from "react"

function IndexPopup() {
  const [data, setData] = useState("")

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        width: "500px",
        height: "500px"}}>
      <div id="canvas"
        style={{
          display: "flex",
          flexDirection: "column",
          width: "450px",
          height: "400px",
          backgroundColor: "blue"}}>
        <h1>SOME TEXT</h1>
      </div>
    </div>
  )
}

export default IndexPopup
