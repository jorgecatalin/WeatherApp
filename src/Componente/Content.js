import React, { useState, useEffect } from "react"

export default function Content(props) {
  useEffect(() => {}, [])
  function esteIncarcat() {
    if (!props.wait) {
      console.log("intra aici")
      let zile = [
        "Duminica",
        "Luni",
        "Marti",
        "Miercuri",
        "Joi",
        "Vineri",
        "Sambata",
        "Duminica",
        "Luni",
        "Marti",
        "Miercuri",
        "Joi",
        "Vineri",
        "Sambata",
      ]

      let d = new Date()
      let n = d.getDay()
      return props.date.daily.slice(1).map((item, i) => {
        let poza =
          "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"
        return (
          <div key={i} className="PrognozaCard">
            <div>{zile[n + i]}</div>
            <img src={poza}></img>
            <div className="PrognozaCardTemperaturi">
              <div>{Math.floor(item.temp.max)}°</div>
              <div>{Math.floor(item.temp.min)}°</div>
            </div>
          </div>
        )
      })
    }

    let x = []
    for (let k = 0; k < 7; k++)
      x.push(
        <div className="PrognozaCardLoading">
          <img src={require("./loading.gif")}></img>
        </div>
      )
    return x
  }
  return (
    <div className="Content">
      <div className="PrognozaTop">{esteIncarcat()}</div>
    </div>
  )
}
