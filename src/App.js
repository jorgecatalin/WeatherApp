import React, { useState, useEffect } from "react"
import Navbar from "./Componente/Navbar.js"
import Content from "./Componente/Content.js"
import Footer from "./Componente/Footer.js"

function App() {
  const [date, setDate] = useState({})
  const [wait, setWait] = useState(true)
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        let longitudine = position.coords.longitude,
          latitudine = position.coords.latitude
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
          "&appid=e9e74eee0dd11008febcccb305a879fe&units=metric&exclude=hourly,minutely&lang=ro"
        fetch(fetchText, requestOptions)
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            setDate(result)
            setWait(false)
          })
          .catch((error) => console.log("error", error))
      })
    } else console.log("NU MERGE GEOLOCATIA ")
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Content date={date} wait={wait}></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
