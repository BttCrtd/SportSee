import { Link } from 'react-router-dom'
import Logo from '../../assets/logo.png'
import styled from 'styled-components'
import colors from '../../utils/colors'
import { useUser } from '../../utils/useUser'

const Header = styled.header`
  position: fixed;
  z-index: 1000;
  width: 100%;
  height: 91px;
  display: flex;
  flex-direction: row;
  background-color: ${colors.backgroundNav};
  padding: 18px 28px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
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
  const { userId } = useUser()
  return (
    <Header>
      <StyledLogo src={Logo} alt="Logo SportSee" />
      <StyledNav>
        <StyledLink to="/">Accueil</StyledLink>
        <StyledLink to={`/profil/${userId}`}>Profil</StyledLink>
        <StyledLink to="/réglage">Réglage</StyledLink>
        <StyledLink to="/communauté">Communauté</StyledLink>
      </StyledNav>
    </Header>
  )
}

export default HorizontalNav
