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
const ChildrenWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 117px;
  margin-top: 100px;
  padding: 30px 0;
`

function Layout({ children }) {
  return (
    <Wrapper>
      <HorizontalNav />
      <BodyWrapper>
        <SideNav />
        <ChildrenWrapper>{children}</ChildrenWrapper>
      </BodyWrapper>
    </Wrapper>
  )
}

export default Layout
