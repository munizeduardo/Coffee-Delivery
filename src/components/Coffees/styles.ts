import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['grey-300']};
  border-radius: 6px 36px;
`
