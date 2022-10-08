import styled from 'styled-components'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

export const CheckoutContainer = styled.div`
  display: flex;

  gap: 2rem;

  max-width: 90rem;
`
export const FormWrapper = styled.form`
  display: flex;
  flex: 1;

  gap: 2rem;
`

export const OrderDetails = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;

  max-width: 40rem;
`

export const ContentHeader = styled.div`
  display: flex;
  gap: 0.5rem;

  .title {
    color: ${(props) => props.theme['brown-500']};
  }

  .subtitle {
    font-size: 14px;
    color: ${(props) => props.theme['brown-300']};
  }
`

export const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  flex: 1;

  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['grey-200']};
`

export const FieldsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  div {
    display: flex;
    gap: 0.75rem;
  }

  input {
    flex: 1;
    border: 1px solid ${(props) => props.theme['grey-400']};
    border-radius: 4px;
    height: 2.625rem;
    background: ${(props) => props.theme['grey-300']};
    padding: 0.75rem;

    color: ${(props) => props.theme['brown-300']};

    ::placeholder {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 14px;
      color: ${(props) => props.theme['brown-100']};
    }

    :focus {
      border: 1px solid ${(props) => props.theme['yellow-700']};
    }
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type='number'] {
    -moz-appearance: textfield;
  }

  .mediumContainer {
    max-width: 12.5rem;
  }

  .smallContainer {
    max-width: 3.75rem;
  }
`

export const PaymentMethodContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  flex: 1;

  margin-top: 0.75rem;
  height: fit-content;
  padding: 2.5rem;
  border-radius: 6px;

  background: ${(props) => props.theme['grey-200']};
`

const StyledToggleGroup = styled(ToggleGroupPrimitive.Root)`
  display: flex;
  gap: 0.75rem;
`

const StyledToggleItem = styled(ToggleGroupPrimitive.Item)`
  all: unset;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  width: 11.175rem;
  max-height: 3.125rem;
  padding: 1rem;
  border-radius: 6px;

  cursor: pointer;

  background: ${(props) => props.theme['grey-400']};

  &[data-state='on'] {
    border: 1px solid ${(props) => props.theme['purple-500']};
    background: ${(props) => props.theme['purple-300']};
  }

  span {
    font-size: 12px;
  }

  [data-state='on'] {
    background: blue;
  }
`

export const ToggleGroup = StyledToggleGroup
export const ToggleItem = StyledToggleItem

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.5rem;

  max-width: 28rem;
  height: fit-content;
  padding: 2.5rem;
  border-radius: 6px 36px;

  background: ${(props) => props.theme['grey-200']};
`
export const PlaceOrderButton = styled.button`
  all: unset;

  display: flex;
  align-items: center;
  justify-content: center;

  height: 2.875rem;
  border-radius: 6px;

  background: ${(props) => props.theme['yellow-500']};

  :hover {
    background: ${(props) => props.theme['yellow-700']};
    cursor: pointer;
  }

  span {
    color: ${(props) => props.theme.white};
  }
`
