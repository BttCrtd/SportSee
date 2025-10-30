import { PieChart, Pie, Label, ResponsiveContainer } from 'recharts'
import styled from 'styled-components'
import { useUser } from '../../utils/useUser'
import { useState, useEffect } from 'react'

const Title = styled.h2`
  font-size: 15px;
  font-weight: 500;
  color: #20253a;
`

const CustomLabel = ({ viewBox, score }) => {
  const { cx, cy } = viewBox
  return (
    <>
      <text
        x={cx}
        y={cy - 10}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#282D30"
        fontSize="26"
        fontWeight="700"
        width={95}
      >
        {score}%
      </text>
      <text
        x={cx}
        y={cy + 16}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#9B9EAC"
        fontSize="16"
      >
        de votre
      </text>
      <text
        x={cx}
        y={cy + 36}
        textAnchor="middle"
        dominantBaseline="central"
        fill="#9B9EAC"
        fontSize="16"
      >
        objectif
      </text>
    </>
  )
}

export default function PieChartInFlexbox() {
  const { userId } = useUser()
  const [score, setScore] = useState(null)

  useEffect(() => {
    fetch(`http://localhost:3000/user/${userId}`)
      .then((response) => response.json())
      .then((json) => {
        const userData = json.data
        const scoreValue = userData.score || userData.todayScore || 0
        setScore(scoreValue)
      })
      .catch((error) => console.error('Error fetching user score:', error))
  }, [userId])

  if (score === null) {
    return <div>Loading...</div>
  }

  const data = [
    { name: 'score', value: score * 100, fill: '#FF0000' },
    { name: 'rest', value: 100 - score * 100, fill: '#FBFBFB' },
  ]
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        padding: '22px',
        alignItems: 'stretch',
        backgroundColor: '#FBFBFB',
        borderRadius: '5px',
      }}
    >
      <Title>Score</Title>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart responsive width="100%" height="100%">
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            outerRadius="90%"
            innerRadius="80%"
            isAnimationActive={false}
            cornerRadius={50}
            startAngle={90}
            endAngle={450}
          >
            <Label
              position="middle"
              content={(props) => (
                <CustomLabel {...props} score={data[0].value} />
              )}
            />
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  )
}
