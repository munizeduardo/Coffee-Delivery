import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 2rem 0;

  nav {
    display: flex;
    gap: 0.75rem;

    div {
      height: 2.375rem;
      display: flex;

      a {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.4rem;

        text-decoration: none;
        font-size: 0.875rem;
        color: ${(props) => props.theme['purple-700']};
      }
    }
  }
`

const BaseAnchorContainer = styled.div`
  padding: 0.5rem;
  border-radius: 8px;
`

export const LocationContainer = styled(BaseAnchorContainer)`
  background: ${(props) => props.theme['purple-300']};

  svg {
    color: ${(props) => props.theme['purple-500']};
  }
`

export const ShopcartContainer = styled(BaseAnchorContainer)`
  background: ${(props) => props.theme['yellow-300']};

  svg {
    color: ${(props) => props.theme['yellow-700']};
  }
`
