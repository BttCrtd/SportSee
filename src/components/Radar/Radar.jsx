import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
} from 'recharts'

import { useEffect, useState } from 'react'

const SimpleRadarChart = () => {
  const [radarData, setRadarData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/user/12/performance')
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
    <RadarChart
      style={{
        width: '100%',
        maxWidth: '258px',
        maxHeight: '263px',
        aspectRatio: 1,
        backgroundColor: '#282D30',
        borderRadius: 5,
      }}
      responsive
      outerRadius="80%"
      data={radarData}
      margin={{
        top: 20,
        left: 20,
        right: 20,
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
  )
}

export default SimpleRadarChart
