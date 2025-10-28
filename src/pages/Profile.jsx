import './Profile.css'
import styled from 'styled-components'
import PersonalDashboard from '../components/PersonalDashboard/PersonalDashboard'
import NutritionStats from '../components/NutritionStats/NutritionStats'
import SimpleBarChart from '../components/BarChart/BarChart'
import SimpleRadarChart from '../components/Radar/Radar'
import PieChartInFlexbox from '../components/Pie/Pie'
import TinyLineChart from '../components/LineChart/LineChart'
import { useState, useEffect } from 'react'

const Wrapper = styled.section`
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`

const WrapperSecondary = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
`

const SessionPerfScoreWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  width: 100%;
  height: 100%;
  gap: 1rem;
`

const ChartWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 30px;
`

const NutritionStatsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

function Profile() {
  const nutritionCategories = ['Calories', 'Proteines', 'Glucides', 'Lipides']
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/user/12')
      .then((response) => response.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <Wrapper>
      <PersonalDashboard name={data.userInfos?.firstName} />

      <WrapperSecondary>
        <ChartWrapper>
          <SimpleBarChart />
          <SessionPerfScoreWrapper>
            <TinyLineChart />
            <SimpleRadarChart />
            <PieChartInFlexbox />
          </SessionPerfScoreWrapper>
        </ChartWrapper>

        <NutritionStatsWrapper>
          {' '}
          {/* gap 40px*/}
          {/* Affichage des statistiques nutritionnelles */}
          {data.keyData ? (
            Object.values(data.keyData).map((value, index) => (
              <NutritionStats
                key={index}
                name={nutritionCategories[index]}
                stats={value}
              />
            ))
          ) : (
            <NutritionStats name={'Calorie'} stats={0} />
          )}
        </NutritionStatsWrapper>
      </WrapperSecondary>
    </Wrapper>
  )
}

export default Profile
