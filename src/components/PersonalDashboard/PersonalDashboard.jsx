import colors from '../../utils/colors'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 80px;
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

function PersonalDashboard({ name = 'Thomas' }) {
  return (
    <Wrapper>
      <Title>
        Bonjour <StyledName>{name}</StyledName>
      </Title>
      <Text>Félicitation ! Vous avez explosé vos objectifs hier 👏</Text>
    </Wrapper>
  )
}

export default PersonalDashboard
