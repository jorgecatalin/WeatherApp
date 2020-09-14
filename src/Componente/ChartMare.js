import React, { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  Tooltip,
  XAxis,
  LabelList,
  ResponsiveContainer,
} from "recharts"

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
export default function ChartMare(props) {
  const [wait, setWait] = useState(true)
  useEffect(() => {
    console.log(props.date)
    setWait(true)
  }, [])
  return (
    <div className="chartMare">
      {wait ? (
        <ResponsiveContainer width="95%" height="90%">
          <LineChart
            data={props.date}
            allowDataOverflow={true}
            margin={{ top: 30 }}
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
              dataKey="ziua"
              padding={{ left: 35, right: 35 }}
              interval={0}
            ></XAxis>
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <div>fwawaawfwaf</div>
      )}
    </div>
  )
}
