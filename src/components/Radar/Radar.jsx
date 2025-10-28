import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
} from 'recharts'

import { useEffect, useState } from 'react'

const SimpleRadarChart = () => {
  const [radarData, setRadarData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/user/18/performance')
      .then((response) => response.json())
      .then((json) => {
        const kindRadar = json.data.kind
        const formatedData = json.data.data.map((item) => ({
          subject:
            kindRadar[item.kind].charAt(0).toUpperCase() +
            kindRadar[item.kind].slice(1),
          A: item.value,
        }))
        setRadarData(formatedData)
      })
      .catch((error) => console.log(error))
  }, [])

  return (
    <div
      style={{
        width: '100%',
        aspectRatio: '1 / 1',
        backgroundColor: '#282D30',
        borderRadius: 5,
      }}
    >
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart
          responsive
          outerRadius="70%"
          data={radarData}
          margin={{
            top: 20,
            left: 20,
            right: 40,
            bottom: 20,
          }}
        >
          <PolarGrid color="#ffffffff" stroke="#ffffffff" radialLines={false} />
          <PolarAngleAxis
            dataKey="subject"
            tick={{ fontSize: 12, fill: '#ffffffff' }}
          />
          <PolarRadiusAxis axisLine={false} tick={false} tickCount={6} />
          <Radar
            name="Mike"
            dataKey="A"
            stroke="transparents"
            fill="#FF0101B2"
            fillOpacity={0.7}
          />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  )
}

export default SimpleRadarChart
