import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    font-family: 'Roboto', sans-serif;
    margin: 0;
    box-sizing: border-box;
    }

   body {
      min-width: 1024px;
      min-height: 780px;
      height: 100vh;
    } 

    #root {
        height: 100%;
    }
`
export default GlobalStyle
