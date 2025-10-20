import { useState, useEffect } from 'react'
import colors from '../../utils/colors'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`

const Title = styled.h1`
  font-size: 48px;
  font-weight: 500;
`

const StyledName = styled.span`
  color: ${colors.RedLogo};
`

const Text = styled.p`
  font-size: 18px;
  font-weight: 400;
  color: ${colors.black};
`

function BodyHeader() {
  const [data, setData] = useState({})

  useEffect(() => {
    fetch('http://localhost:3000/user/12')
      .then((response) => response.json())
      .then((json) => setData(json.data))
  }, [])

  return (
    <Wrapper>
      <Title>
        Bonjour <StyledName>{data.userInfos?.firstName}</StyledName>
      </Title>
      <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
    </Wrapper>
  )
}

export default BodyHeader
