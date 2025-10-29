import { Link } from 'react-router-dom'
import styled from 'styled-components'
import colors from '../../utils/colors'
import YogaIcon from '../../assets/yoga.svg'
import PoolIcon from '../../assets/pool.svg'
import BikeIcon from '../../assets/bike.svg'
import MuscuIcon from '../../assets/muscu.svg'

const NavWrapper = styled.div`
  position: fixed;
  background-color: ${colors.backgroundNav};
  height: calc(100% - 91px);
  width: 117px;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 60px 28px;
  margin-top: 91px;
`

const StyledSideNav = styled.nav`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
`

const StyledIconLink = styled(Link)`
  width: 64px;
  height: 64px;
  background-color: ${colors.white};
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`

const StyledIcon = styled.img`
  height: 32px;
`

const StyledText = styled.p`
  font-size: 12px;
  writing-mode: sideways-lr;
  color: ${colors.white};
`

function SideNav() {
  return (
    <NavWrapper>
      <StyledSideNav>
        <StyledIconLink to="">
          <StyledIcon src={YogaIcon} alt="Yoga" />
        </StyledIconLink>
        <StyledIconLink to="">
          <StyledIcon src={PoolIcon} alt="Natation" />
        </StyledIconLink>
        <StyledIconLink to="">
          <StyledIcon src={BikeIcon} alt="Cyclisme" />
        </StyledIconLink>
        <StyledIconLink to="">
          <StyledIcon src={MuscuIcon} alt="Musculation" />
        </StyledIconLink>
      </StyledSideNav>
      <StyledText>Copryght, SportSee 2020</StyledText>
    </NavWrapper>
  )
}

export default SideNav
