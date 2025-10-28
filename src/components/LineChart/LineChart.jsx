import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceArea,
} from 'recharts'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const TitleWrapper = styled.div`
  margin-top: 30px;
  margin-left: 35px;
  width: 50%;
`

const StyledTitle = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #ffffff;
  opacity: 50%;
`

const Title = () => (
  <TitleWrapper>
    <StyledTitle>Duréee moyenne des session</StyledTitle>
  </TitleWrapper>
)

const CustomeTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div
        style={{
          width: '39px',
          height: '25px',
          backgroundColor: '#FFFFFF',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <p
          style={{ fontSize: 8, fontWeight: 500 }}
        >{`${payload[0].value} min`}</p>
      </div>
    )
  }
  return null
}

const LineChartWrapper = styled.div`
  width: 100%;
  background-color: #ff0000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function TinyLineChart() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/user/12/average-sessions')
      .then((response) => response.json())
      .then((json) => {
        const formattedData = json.data.sessions.map((session, index) => ({
          name: ['L', 'M', 'Me', 'J', 'V', 'S', 'D'][index],
          sessionLenght: session.sessionLength,
        }))
        setData(formattedData)
      })
      .catch((error) => console.log(error))
  }, [])

  const yMin = Math.min(...data.map((d) => d.sessionLenght))
  const yMax = Math.max(...data.map((d) => d.sessionLenght))

  return (
    <LineChartWrapper>
      <Title />
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          onMouseMove={(state) => {
            if (state.isTooltipActive) {
              setActiveIndex(state.activeTooltipIndex)
            } else {
              setActiveIndex(null)
            }
          }}
          margin={{ top: 5, right: 0, left: -61, bottom: 5 }}
        >
          <defs>
            <linearGradient id="lineGradient" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#FFFFFF" stopOpacity={0.4032} />
              <stop offset="100%" stopColor="#FFFFFF" stopOpacity={1} />
            </linearGradient>
          </defs>

          {/* Bande à droite du point actif */}
          {activeIndex !== null && data.length > 0 && (
            <ReferenceArea
              x1={data[activeIndex].name}
              x2={data[data.length - 1].name}
              y1={yMin - 10}
              y2={yMax}
              fill="rgba(0,0,0,0.0975)" // couleur plus foncée
            />
          )}

          <CartesianGrid vertical={false} horizontal={false} />
          <XAxis
            dataKey="name"
            tickLine={false}
            axisLine={false}
            tick={{ fill: '#ffffff', opacity: '50%' }}
          />
          <YAxis
            dataKey="sessionLenght"
            axisLine={false}
            tick={false}
            domain={['dataMin - 10', 'dataMax +10 ']}
          />
          <Tooltip content={<CustomeTooltip />} cursor={false} />

          <Line
            isAnimationActive={false}
            type="natural"
            dataKey="sessionLenght"
            stroke="url(#lineGradient)"
            strokeWidth={2}
            dot={false}
            activeDot={{
              r: 4,
              fill: '#FFFFFF',
              stroke: '#FFFFFF',
              strokeOpacity: 0.5,
              strokeWidth: 8,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </LineChartWrapper>
  )
}
