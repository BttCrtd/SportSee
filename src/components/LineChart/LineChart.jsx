import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts'
import styled from 'styled-components'

const data = [
  {
    name: 'L',
    sessionLenght: 30,
  },
  {
    name: 'M',
    sessionLenght: 40,
  },
  {
    name: 'Me',
    sessionLenght: 50,
  },
  {
    name: 'J',
    sessionLenght: 30,
  },
  {
    name: 'V',
    sessionLenght: 30,
  },
  {
    name: 'S',
    sessionLenght: 50,
  },
  {
    name: 'D',
    sessionLenght: 50,
  },
]

const TitleWrapper = styled.div`
  margin-top: 30px;
  margin-left: 35px;
  width: 147px;
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
          width: 40,
          height: 25,
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
  max-width: 258px;
  max-height: 263px;
  height: 100%;
  background-color: #ff0000;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export default function TinyLineChart() {
  return (
    <LineChartWrapper>
      <Title />
      <LineChart
        style={{
          width: '100%',
          maxWidth: '258px',
          aspectRatio: 1.618,
          backgroundColor: '#FF0000',
          borderRadius: '5px',
        }}
        responsive
        data={data}
        margin={{
          top: 5,
          right: 0,
          left: 0,
          bottom: 5,
        }}
      >
        <CartesianGrid
          strokeDasharray="3 3"
          vertical={false}
          horizontal={false}
        />
        <XAxis
          dataKey="name"
          tickLine={false}
          axisLine={false}
          tick={{ fill: '#ffffff', opacity: '50%' }}
        />
        <Tooltip content={<CustomeTooltip />} cursor={false} />
        <Line
          type="monotone"
          dataKey="sessionLenght"
          strokeWidth={2}
          stroke="#FFFFFF"
          strokeOpacity={0.4}
          dot={false}
          activeDot={{
            r: 4, // rayon du point
            fill: '#FFFFFF', // couleur du point
            stroke: '#FFFFFF', // bordure
            strokeOpacity: 0.5,
            strokeWidth: 8, // épaisseur de la bordure
          }}
        />
      </LineChart>
    </LineChartWrapper>
  )
}
