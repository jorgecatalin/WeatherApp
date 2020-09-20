import React from "react"
import { Link } from "react-router-dom"

export default function Navbar(props) {
  return (
    <div className="Navbar">
      <div>WeatherApp</div>
      <div className="NavbarDreapta">
        <Link to="/WeatherApp/Setari">
          <div>Setari</div>
        </Link>
        <Link to="/WeatherApp">
          <div>Home</div>
        </Link>
      </div>
    </div>
  )
}
