import React, { useState, useEffect } from "react"
import "./App.css"
function App() {
  useEffect(() => {
    let longitudine = 0,
      latitudine = 0
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        longitudine = position.coords.longitude
        latitudine = position.coords.latitude
      })
    } else console.log("NU MERGE GEOLOCATIA ")
    console.log(longitudine, latitudine)

    let requestOptions = {
      method: "GET",
      redirect: "follow",
    }
    let fetchText =
      "https://api.openweathermap.org/data/2.5/onecall?lat=" +
      latitudine +
      "&lon=" +
      longitudine +
      "&exclude=hourly,daily&appid=e9e74eee0dd11008febcccb305a879fe"
    fetch(fetchText, requestOptions)
      .then((response) => response.text())
      .then((result) => console.log(result))
      .catch((error) => console.log("error", error))
    console.log("merge")
  }, [])

  return (
    <div className="App">
      <div>af</div>
    </div>
  )
}

export default App
