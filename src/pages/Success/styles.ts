import styled from 'styled-components'

export const SuccessPageContainer = styled.div`
  .deliveryLogo {
    width: 30.75rem;
    height: 18.25rem;
  }
`

export const SuccessPageHeader = styled.div`
  h2 {
    color: ${(props) => props.theme['yellow-700']};
  }
`

export const SuccessContentWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  gap: 6.375rem;
`

export const OrderDetailsContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2rem;

  padding: 2.5rem;

  border: double 1px transparent;
  border-radius: 6px 36px;
  background-image: linear-gradient(#fafafa, #fafafa),
    linear-gradient(to right, #dbac2c, #8047f8);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`

export const DetailsWrapper = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  gap: 0.75rem;
`
export const DetailTextContainer = styled.div`
  display: flex;
  flex-direction: column;
`

const BaseDetailIconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const PinContainer = styled(BaseDetailIconContainer)`
  background: ${(props) => props.theme['purple-500']};
`
export const TimerContainer = styled(BaseDetailIconContainer)`
  background: ${(props) => props.theme['yellow-500']};
`
export const CurrencyContainer = styled(BaseDetailIconContainer)`
  background: ${(props) => props.theme['yellow-700']};
`
