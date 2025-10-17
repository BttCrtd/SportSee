import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/colors'

const Header = styled.header`
  display: flex;
  flex-direction: row;
  background-color: ${colors.backgroundNav};
  padding: 18px 28px;
`

const StyledNav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`

const StyledLogo = styled.img`
  height: 60px;
`
const StyledLink = styled(Link)`
  color: ${colors.white};
  text-decoration: none;
  font-size: 24px;
  font-weight: 500;
`

function HorizontalNav() {
  return (
    <Header>
      <StyledLogo src={Logo} alt="Logo SportSee" />
      <StyledNav>
        <StyledLink to="">Accueil</StyledLink>
        <StyledLink to="">Profil</StyledLink>
        <StyledLink to="">Réglage</StyledLink>
        <StyledLink to="">Communauté</StyledLink>
      </StyledNav>
    </Header>
  )
}

export default HorizontalNav
