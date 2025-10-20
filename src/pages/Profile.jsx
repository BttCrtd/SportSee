import './Profile.css'
import styled from 'styled-components'
import BodyHeader from '../components/BodyHeader/BodyHeader'
import NutritionStats from '../components/NutritionStats/NutritionStats'
import { useState, useEffect } from 'react'

const Wrapper = styled.section`
  padding: 64px 107px;
`

const WrapperSecondary = styled.div`
  display: flex;
  flex-direction: row;
  gap: 32px;
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
      <BodyHeader />

      <WrapperSecondary>
        <div>
          <h1>Graphique</h1>
        </div>

        <div>
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
        </div>
      </WrapperSecondary>
    </Wrapper>
  )
}

export default Profile
