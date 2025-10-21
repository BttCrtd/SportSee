import colors from '../../utils/colors'
import styled from 'styled-components'
import { getIcon } from '../../utils/icons/icons'

const StatsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 258px;
  height: 124px;
  gap: 24px;
  background-color: ${colors.background};
  border-radius: 5px;
`
const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  height: 60px;
  background-color: ${(props) => props.$bgColor}1A;
  border-radius: 6px;
`

const PrimaryText = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #282d30;
`
const SecondaryText = styled.p`
  font-size: 14px;
  font-weight: 500;
  color: ${colors.grayPrimary};
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
`

function NutritionStats({ name, stats }) {
  const { iconSource, unit, color } = getIcon(name)

  return (
    <StatsWrapper>
      <IconWrapper $bgColor={color}>
        <img src={iconSource} alt="Logo Flamme" />
      </IconWrapper>
      <TextWrapper>
        <PrimaryText>
          {stats}
          {unit}
        </PrimaryText>
        <SecondaryText>{name}</SecondaryText>
      </TextWrapper>
    </StatsWrapper>
  )
}

export default NutritionStats
