import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 28rem;
  height: 31.125rem;
  background: ${(props) => props.theme['grey-300']};
  border-radius: 6px 36px;
`
