import styled from 'styled-components'

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 28rem;
  min-height: 31.125rem;
  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['grey-200']};
`

export const CartItemList = styled.div`
  flex: 1;
`

export const CartItem = styled.div`
  display: flex;
  justify-content: space-between;

  width: 23rem;
  height: 5rem;

  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;

  border-bottom: 1px solid ${(props) => props.theme['grey-400']};

  img {
    width: 4rem;
    height: 4rem;
  }

  .itemWrapper {
    display: flex;
    align-items: center;
    gap: 1.25rem;
  }

  .itemDetails {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.5rem;
  }

  .itemName {
    color: ${(props) => props.theme['brown-500']};
  }

  .buttonContainer {
    display: flex;
    gap: 0.25rem;

    width: 10.75rem;
    height: 2rem;

    button {
      color: ${(props) => props.theme['purple-300']};
      all: unset;
      display: flex;
    }
  }

  .quantityContainer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 0.25rem;
  }

  .price {
    font-weight: bold;
    color: ${(props) => props.theme['brown-300']};
  }
`

const BaseButtonContainer = styled.div`
  display: flex;
  gap: 0.25rem;
  align-items: center;

  height: 2rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['grey-400']};

  button:hover {
    cursor: pointer;
  }
`

export const QuantityButtonContainer = styled(BaseButtonContainer)`
  justify-content: space-between;
  width: 4.5rem;
`

export const RemoveButtonContainer = styled(BaseButtonContainer)`
  :hover {
    background: ${(props) => props.theme['grey-500']};
    cursor: pointer;
  }

  p {
    font-size: 12px;
    font-weight: 400;
    color: ${(props) => props.theme['brown-300']};
  }
`

export const CartSummary = styled.div`
  display: flex;
  flex-direction: column;
  width: 23rem;
  gap: 2rem;
`

export const PricesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`

export const Price = styled.div`
  display: flex;
  justify-content: space-between;

  p {
    font-size: 14px;
    font-weight: 400;
    color: ${(props) => props.theme['brown-300']};
  }

  h2 {
    font-size: 20px;
    font-family: Roboto, sans-serif;
  }
`

export const PlaceOrderButton = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.875rem;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-500']};

  cursor: pointer;

  :hover {
    background: ${(props) => props.theme['yellow-700']};
  }

  p {
    color: ${(props) => props.theme.white};
  }
`
