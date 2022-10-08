import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    html {
      overflow: scroll;
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    *:focus {
        outline: 0;
    }

    body {
        background: ${(props) => props.theme['grey-100']};
        color: ${(props) => props.theme['brown-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, a {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
    }

    h1, h2, h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme['brown-700']}
    }
`
