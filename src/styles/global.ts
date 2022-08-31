import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :focus {
        outline: 0;
        box-shadow: 0 0 0 2px ${(props) => props.theme['grey-500']}
    }

    body {
        background: ${(props) => props.theme['grey-100']};
        color: ${(props) => props.theme['brown-300']};
        -webkit-font-smoothing: antialiased;
    }

    body, input, textarea, button, a {
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 1rem;
    }

    h1, h2, h3 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 700;
      color: ${(props) => props.theme['brown-700']}
    }
`
