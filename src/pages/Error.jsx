import styled from 'styled-components'
import { Link } from 'react-router-dom'
import colors from '../utils/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: 100%;
`
const H1 = styled.h1`
  font-size: 28px;
  font-weight: 700;
  color: ${colors.Redprimary};
`

const StyledLink = styled(Link)`
  font-size: 20px;
  font-weight: 500;
`

function Error() {
  return (
    <Wrapper>
      <H1>Oups ! La page que vous recherchez n'existe pas.</H1>
      <StyledLink to="/">Retour à l'accueil</StyledLink>
    </Wrapper>
  )
}

export default Error
