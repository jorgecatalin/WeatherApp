import React, { useState, useEffect } from "react"
import { LineChart, Line, Tooltip, XAxis, LabelList } from "recharts"

const renderCustomizedLabel = (props) => {
  const { x, y, width, height, value } = props
  const radius = 10

  return (
    <g>
      <text x={x - 5} y={y - 6} fill="#fff">
        {value + "°"}
      </text>
    </g>
  )
}
const data = [
  { temp: 55, ora: "8:00" },
  { temp: 22, ora: "12:00" },
  { temp: 32, ora: "18:00" },
  { temp: 22, ora: "00:00" },
]
export default function Chart(props) {
  const [wait, setWait] = useState(false)
  useEffect(() => {
    data[0].temp = Math.floor(props.date.morn)
    data[1].temp = Math.floor(props.date.day)
    data[2].temp = Math.floor(props.date.eve)
    data[3].temp = Math.floor(props.date.night)
    setWait(true)
  }, [])
  return (
    <div className="chart">
      {wait ? (
        <LineChart
          width={400}
          height={150}
          data={data}
          allowDataOverflow={true}
          margin={{ top: 20 }}
        >
          <Line type="monotone" dataKey="temp" stroke="#8884d8">
            <LabelList
              dataKey="temp"
              position="top"
              content={renderCustomizedLabel}
            />
          </Line>
          <XAxis
            interval="preserveStartEnd"
            dataKey="ora"
            padding={{ left: 20, right: 20 }}
            interval={0}
          ></XAxis>
        </LineChart>
      ) : (
        <div></div>
      )}
    </div>
  )
}
