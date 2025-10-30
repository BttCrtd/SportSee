import { useUser } from '../utils/useUser'
import styled from 'styled-components'
import colors from '../utils/colors'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`

const Title = styled.h1`
  font-size: 28px;
  font-weight: 700;
`

const UserButton = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  background-color: transparent;
  border: none;
  cursor: pointer;
`

const SwitchLabel = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`

const SwitchInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: ${colors.Redprimary};
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`

const Slider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: ${colors.grayPrimary};
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`

function Home() {
  const { toggleUserId, userId } = useUser()

  const checked = userId === 18 || userId === '18'
  return (
    <Wrapper>
      <Title>Bienvenue sur la page d'accueil</Title>
      <UserButton>
        <SwitchLabel>
          <SwitchInput
            type="checkbox"
            checked={checked}
            onChange={toggleUserId}
          />
          <Slider />
        </SwitchLabel>
        Utilisateur connecté : {checked ? '18' : '12'}
      </UserButton>
    </Wrapper>
  )
}

export default Home
