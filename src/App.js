import React, { useState, useEffect } from "react"
import Navbar from "./Componente/Navbar.js"
import Content from "./Componente/Content.js"
import Footer from "./Componente/Footer.js"

function App() {
  const [date, setDate] = useState({})
  const [oras, setOras] = useState({})
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

        // preiau numele orasului dupa coordonate google api nu am facut billingu
        /*
        let reverseGeocoding =
          " https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
          latitudine +
          "," +
          longitudine +
          "&key=AIzaSyCBkYlYSgXSTv4av1S86uKFGZpTGYSGMlY"
          */
        let orasNume =
          "https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=" +
          latitudine +
          "&longitude=" +
          longitudine +
          "&localityLanguage=ro"
        let fetchText =
          "https://api.openweathermap.org/data/2.5/onecall?lat=" +
          latitudine +
          "&lon=" +
          longitudine +
          "&appid=e9e74eee0dd11008febcccb305a879fe&units=metric&exclude=hourly,minutely&lang=ro"

        Promise.all([
          fetch(orasNume)
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              setOras(result)
            })
            .catch((error) => console.log("error", error)),
          //preiau datele meteo dupa coordonate
          fetch(fetchText, requestOptions)
            .then((response) => response.json())
            .then((result) => {
              console.log(result)
              result.daily.pop()
              setDate(result)
            })
            .catch((error) => console.log("error", error)),
        ]).then(() => {
          setWait(false)
        })
      })
    } else console.log("NU MERGE GEOLOCATIA ")
  }, [])

  return (
    <div className="App">
      <Navbar></Navbar>
      <Content date={date} wait={wait} oras={oras}></Content>
      <Footer></Footer>
    </div>
  )
}

export default App
