import React, { useEffect } from "react"
import { CSSTransition } from "react-transition-group"
let zile = [
  "Duminică",
  "Luni",
  "Marți",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambătă",
  "Duminică",
  "Luni",
  "Marți",
  "Miercuri",
  "Joi",
  "Vineri",
  "Sambătă",
]
export default function Content(props) {
  useEffect(() => {}, [])
  function esteIncarcatCurent() {
    if (!props.wait) {
      let d = new Date()
      let n = d.getDay()
      let minute = new Date().toLocaleTimeString("ro-RO", {
        hour12: false,
        hour: "numeric",
        minute: "numeric",
      })
      let poza =
        "http://openweathermap.org/img/wn/" +
        props.date.current.weather[0].icon +
        "@2x.png"
      return (
        <div className="PrognozaAziContainer">
          <div className="flexcolumn">
            <div className="titluPrognoza">{props.oras.city}</div>
            <div className="PrognozaZile">
              {zile[n] + "  "}
              {minute}
            </div>
            <div className="PrognozaZile">
              {props.date.current.weather[0].description}
            </div>
            <div className="flexrow">
              <img src={poza} alt="vreme"></img>
              <div className="PrognozaGrade">
                {Math.floor(props.date.current.temp)}°
              </div>
            </div>
          </div>
          <div className="PrognozaDreapta">
            <div>Umiditate: {props.date.current.humidity}%</div>
            <div className="marginTopp">
              Vânt: {(props.date.current.wind_speed * 3.6).toFixed(1)} km/h
            </div>
          </div>
        </div>
      )
    }
    return (
      <div className="PrognozaCurentLoading">
        <img src={require("./loading.gif")} alt="vreme"></img>
      </div>
    )
  }
  function esteIncarcat() {
    if (!props.wait) {
      console.log("intra aici")

      let d = new Date()
      let n = d.getDay()
      return props.date.daily.map((item, i) => {
        let poza =
          "http://openweathermap.org/img/wn/" + item.weather[0].icon + "@2x.png"
        return (
          <div key={i} className="PrognozaCard">
            <div>{zile[n + i]}</div>
            <img src={poza} alt="vreme"></img>
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
        <div key={k} className="PrognozaCardLoading">
          <img src={require("./loading.gif")} alt="vreme"></img>
        </div>
      )
    return x
  }
  return (
    <div className="Content">
      <CSSTransition appear={true} in={true} timeout={1000} classNames="fade">
        <div className="PrognozaAzi">{esteIncarcatCurent()}</div>
      </CSSTransition>
      <CSSTransition appear={true} in={true} timeout={1000} classNames="fade">
        <div className="PrognozaTop">{esteIncarcat()}</div>
      </CSSTransition>
    </div>
  )
}
