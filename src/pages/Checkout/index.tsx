import {
  Bank,
  CreditCard,
  CurrencyDollar,
  MapPinLine,
  Money,
} from 'phosphor-react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { Cart } from '../../components/Cart'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  AddressContainer,
  CartContainer,
  CheckoutContainer,
  FieldsContainer,
  FormWrapper,
  OrderDetails,
  PaymentMethodContainer,
  PlaceOrderButton,
  ContentHeader,
  ToggleGroup,
  ToggleItem,
} from './styles'

interface FormProps {
  zipCode: number
  street: string
  number: string
  addInfo?: string
  district: string
  state: string
  city: string
  payment: string
}

export function Checkout() {
  const { submitAddress, setPaymentMethod, paymentMethod, shoppingCart } =
    useShoppingCart()
  const navigate = useNavigate()

  const { register, handleSubmit } = useForm<FormProps>({
    defaultValues: {
      zipCode: undefined,
      street: '',
      number: '',
      addInfo: '',
      district: '',
      state: '',
      city: '',
    },
  })
  return (
    <CheckoutContainer>
      <FormWrapper
        id="addressForm"
        onSubmit={handleSubmit((data) => {
          submitAddress(data)
          if (paymentMethod.length === 0) {
            alert('Please select a payment method')
          } else if (shoppingCart.length === 0) {
            alert('Your cart is empty! Go pick some coffee!')
          } else {
            navigate('/success')
          }
        })}
      >
        <OrderDetails>
          <h3>Complete your order</h3>
          <AddressContainer>
            <ContentHeader>
              <MapPinLine size={22} color="#C47F17" />
              <div>
                <span className="title">Delivery Address</span>
                <p className="subtitle">Fill-in the address for you order</p>
              </div>
            </ContentHeader>
            <FieldsContainer>
              <input
                {...register('zipCode')}
                type="number"
                placeholder="Zip Code"
                maxLength={8}
                autoComplete="off"
                required
                className="mediumContainer"
              />
              <input
                {...register('street')}
                placeholder="Street"
                autoComplete="off"
                required
              />
              <div>
                <input
                  {...register('number')}
                  placeholder="Number"
                  autoComplete="off"
                  required
                  className="mediumContainer"
                />
                <input
                  {...register('addInfo')}
                  placeholder="Additional information (optional)"
                  autoComplete="off"
                />
              </div>
              <div>
                <input
                  {...register('district')}
                  placeholder="District"
                  autoComplete="off"
                  required
                  className="mediumContainer"
                />
                <input
                  {...register('city')}
                  placeholder="City"
                  autoComplete="off"
                  required
                />
                <input
                  {...register('state')}
                  placeholder="State"
                  autoComplete="off"
                  required
                  className="smallContainer"
                />
              </div>
            </FieldsContainer>
          </AddressContainer>

          <PaymentMethodContainer>
            <ContentHeader>
              <CurrencyDollar size={22} color="#8047F8" />
              <div>
                <span className="title">Payment</span>
                <p className="subtitle">
                  Payment is made upon delivery. Pick your preferred payment
                  method.
                </p>
              </div>
            </ContentHeader>

            <ToggleGroup
              type="single"
              aria-label="Payment method"
              value={paymentMethod}
              onValueChange={(value) => {
                if (value) setPaymentMethod(value)
              }}
            >
              <ToggleItem value="creditCard">
                <CreditCard color="#8047F8" />
                <span>CREDIT CARD</span>
              </ToggleItem>

              <ToggleItem value="debitCard">
                <Bank color="#8047F8" />
                <span>DEBIT CARD</span>
              </ToggleItem>

              <ToggleItem value="money">
                <Money color="#8047F8" />
                <span>MONEY</span>
              </ToggleItem>
            </ToggleGroup>
          </PaymentMethodContainer>
        </OrderDetails>
      </FormWrapper>
      <div>
        <h3>Selected coffee</h3>
        <CartContainer>
          <Cart />
          <PlaceOrderButton type="submit" form="addressForm">
            <span>PLACE ORDER</span>
          </PlaceOrderButton>
        </CartContainer>
      </div>
    </CheckoutContainer>
  )
}
