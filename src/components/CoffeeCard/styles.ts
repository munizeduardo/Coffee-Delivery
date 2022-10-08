import styled from 'styled-components'

export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['grey-200']};
  border-radius: 6px 36px;
`

export const DetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem;
`

export const DetailsTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .tagContainer {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.25rem;

    margin-bottom: 1rem;

    p {
      padding: 4px 8px;
      border-radius: 100px;

      font-size: 10px;
      font-weight: 700;

      color: ${(props) => props.theme['yellow-700']};
      background: ${(props) => props.theme['yellow-300']};
    }
  }

  .description {
    text-align: center;
  }
`

export const PriceDetailsContainer = styled.div`
  display: flex;
  gap: 1.375rem;
  justify-content: center;

  width: 13rem;
  max-height: 2.375rem;

  .priceContainer {
    display: flex;
    gap: 2px;
    align-items: center;

    span {
      font-size: 14px;
    }

    h2 {
      font-size: 24px;
    }
  }
`

export const OptionsContainer = styled.div`
  display: flex;
  gap: 0.5rem;

  margin-top: auto;
`

const BaseButtonContainer = styled.div`
  display: flex;
  flex: 1;
  gap: 0.25rem;
  align-items: center;

  height: 2.375rem;
  padding: 0.5rem;
  border-radius: 6px;
  background: ${(props) => props.theme['grey-400']};

  button {
    all: unset;
    display: flex;
  }
`

export const QuantityButtonContainer = styled(BaseButtonContainer)`
  justify-content: space-between;
  width: 4.5rem;

  svg {
    color: ${(props) => props.theme['purple-500']};
  }

  button:hover {
    cursor: pointer;
    svg {
      color: ${(props) => props.theme['purple-700']};
    }
  }
`

export const AddToCartButton = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2.375rem;
  height: 2.375rem;

  border-radius: 6px;
  background: ${(props) => props.theme['purple-700']};

  :hover {
    cursor: pointer;
    background: ${(props) => props.theme['purple-500']};
  }
`
