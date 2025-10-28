import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { useState, useEffect } from 'react'

const TittleAndLegendWrapper = styled.div`
  width: 100%;
  margin-bottom: 31px;
  max-width: 777px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`
const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #20253a;
`

const LegendWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
  gap: 32px;
`

const BarLegendeWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`
const BulleLegend1 = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: #282d30;
`

const BulleLegend2 = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 25px;
  background-color: #e60000;
`

const Text = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: #74798c;
`

const CustomLegend = () => (
  <TittleAndLegendWrapper>
    <Title>Activité quotidienne</Title>
    <LegendWrapper>
      <BarLegendeWrapper>
        <BulleLegend1></BulleLegend1>
        <Text>Poids (kg)</Text>
      </BarLegendeWrapper>
      <BarLegendeWrapper>
        <BulleLegend2></BulleLegend2>
        <Text>Calories brûlées (kCal)</Text>
      </BarLegendeWrapper>
    </LegendWrapper>
  </TittleAndLegendWrapper>
)

const CustomizedXAxisTick = (...args) => {
  const { x, y, payload } = args[0]
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={-2} y={0} dy={20} textAnchor="middle" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  )
}

const CustomizedYAxisTick = (...args) => {
  const { x, y, payload } = args[0]
  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={5} dx={37} textAnchor="middle" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  )
}

const ToolTipWrapper = styled.div`
  width: 39px;
  height: 63px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: ${colors.Redprimary};
`

const TipText = styled.p`
  font-size: 7px;
  font-weight: 500;
  color: ${colors.white};
`

function CustomTooltip({ payload, active, coordinate }) {
  if (active) {
    return (
      <ToolTipWrapper
        style={{
          position: 'absolute',
          top: coordinate.y - 60,
          left: coordinate.x + 35,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
      >
        <TipText className="label">{`${payload[0].value}`}kg</TipText>
        <TipText className="intro">{`${payload[1].value}`}Kcal</TipText>
      </ToolTipWrapper>
    )
  }
}

const ChartWrapper = styled.div`
  max-width: 835px;
  width: 100%;
  padding: 24px 32px;
  background-color: rgb(251, 251, 251);
  border-radius: 5px;
`

const SimpleBarChart = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/user/18/activity')
      .then((response) => response.json())
      .then((json) => {
        const formattedData = json.data.sessions.map((session, index) => ({
          name: index + 1,
          weight: session.kilogram,
          calories: session.calories,
        }))
        setData(formattedData)
      })
  }, [])

  const minWeight = Math.min(...data.map((item) => item.weight))
  const maxWeight = Math.max(...data.map((item) => item.weight))
  const step = (maxWeight - minWeight) / 2
  const ticks = [minWeight - 1, minWeight + step, maxWeight + 1]

  return (
    <ChartWrapper>
      <CustomLegend />

      <ResponsiveContainer width="100%" height={217}>
        <BarChart
          data={data}
          margin={{ top: 20, right: 0, left: 20, bottom: 0 }}
          barGap={8}
          barCategoryGap="20%"
        >
          <CartesianGrid
            strokeDasharray="3 3"
            vertical={false}
            horizontal={true}
            yAxisId="right"
          />

          <XAxis
            dataKey="name"
            tick={CustomizedXAxisTick}
            tickLine={false}
            axisLine={{ stroke: '#DEDEDE', strokeWidth: 1 }}
            padding={{ left: -21, right: -22 }}
            interval={0}
          />

          <YAxis
            yAxisId="right"
            dataKey="weight"
            orientation="right"
            ticks={ticks}
            tick={CustomizedYAxisTick}
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 1', 'dataMax + 1']}
          />

          <YAxis
            yAxisId="left"
            dataKey="calories"
            orientation="left"
            tick={CustomizedYAxisTick}
            tickLine={false}
            axisLine={false}
            domain={['dataMin - 50', 'dataMax + 50']}
            width={0}
          />

          <Tooltip content={<CustomTooltip />} />

          <Bar
            dataKey="weight"
            yAxisId="right"
            fill="#282D30"
            radius={[3, 3, 0, 0]}
            isAnimationActive={false}
            barSize={7}
          />

          <Bar
            dataKey="calories"
            yAxisId="left"
            fill="#E60000"
            radius={[3, 3, 0, 0]}
            isAnimationActive={false}
            barSize={7}
          />
        </BarChart>
      </ResponsiveContainer>
    </ChartWrapper>
  )
}

export default SimpleBarChart
