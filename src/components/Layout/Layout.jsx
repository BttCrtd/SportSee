import HorizontalNav from '../Nav/horizontalNav'
import SideNav from '../Nav/sideNav'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const BodyWrapper = styled.div`
  display: flex;
  flex: 1;
  flex-direction: row;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <HorizontalNav />
      <BodyWrapper>
        <SideNav />
        <div>{children}</div>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Layout
