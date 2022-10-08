import {
  CurrencyContainer,
  DetailsWrapper,
  DetailTextContainer,
  OrderDetailsContainer,
  PinContainer,
  SuccessContentWrapper,
  SuccessPageContainer,
  SuccessPageHeader,
  TimerContainer,
} from './styles'
import deliveryLogo from '../../assets/ordersuccess.png'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export function Success() {
  const { orderAddress, paymentMethod } = useShoppingCart()

  return (
    <SuccessPageContainer>
      <SuccessPageHeader>
        <h2>Yay! Order confirmed</h2>
        <span>Now just kick back and relax while your coffee gets to you</span>
      </SuccessPageHeader>
      <SuccessContentWrapper>
        <OrderDetailsContainer>
          <DetailsWrapper>
            <PinContainer>
              <MapPin color="white" weight="fill" />
            </PinContainer>

            <DetailTextContainer>
              <span>
                Delivering to{' '}
                <strong>
                  {orderAddress.street}, {orderAddress.number}
                </strong>
              </span>
              <span>
                {orderAddress.district} - {orderAddress.city},{' '}
                {orderAddress?.state}
              </span>
            </DetailTextContainer>
          </DetailsWrapper>
          <DetailsWrapper>
            <TimerContainer>
              <Timer color="white" weight="fill" />
            </TimerContainer>
            <DetailTextContainer>
              <span>Estimated time of arrival</span>
              <strong>20 min - 30 min</strong>
            </DetailTextContainer>
          </DetailsWrapper>
          <DetailsWrapper>
            <CurrencyContainer>
              <CurrencyDollar color="white" weight="fill" />
            </CurrencyContainer>
            <DetailTextContainer>
              <span>Payment upon delivery</span>
              {paymentMethod === 'creditCard' && <strong>Credit Card</strong>}
              {paymentMethod === 'debitCard' && <strong>Debit Card</strong>}
              {paymentMethod === 'money' && <strong>Money</strong>}
            </DetailTextContainer>
          </DetailsWrapper>
        </OrderDetailsContainer>
        <img src={deliveryLogo} alt="" className="deliveryLogo" />
      </SuccessContentWrapper>
    </SuccessPageContainer>
  )
}
