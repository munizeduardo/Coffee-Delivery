import styled from 'styled-components'

export const HomeContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 90rem;
`

export const HomeBannerArea = styled.div`
  display: flex;
  justify-content: space-between;

  img {
    max-width: 29.75rem;
    max-height: 22.5rem;
  }
`

export const HomeBannerTextArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.125rem;
`

export const HomeBannerTitle = styled.div`
  max-width: 36.75rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 3rem;
    line-height: 130%;
  }

  p {
    font-size: 1.25rem;
    line-height: 130%;
  }
`

export const HomeBannerCards = styled.div`
  max-width: 35.375rem;
  display: grid;
  grid-template-columns: 0.8fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 20px 10px;
  grid-template-areas:
    '. .'
    '. .';
`

export const BaseCards = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  svg {
    color: white;
  }
`

const BaseCardIconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  width: 2rem;
  height: 2rem;
  border-radius: 50%;
`

export const ShoppingCartCardContainer = styled(BaseCardIconWrapper)`
  background: ${(props) => props.theme['yellow-700']};
`

export const PackageCardContainer = styled(BaseCardIconWrapper)`
  background: ${(props) => props.theme['brown-300']};
`

export const TimerCardContainer = styled(BaseCardIconWrapper)`
  background: ${(props) => props.theme['yellow-500']};
`

export const CoffeeCardContainer = styled(BaseCardIconWrapper)`
  background: ${(props) => props.theme['purple-500']};
`

export const CoffeeMenuContainer = styled.div`
  display: flex;
  flex-direction: column;

  h2 {
    margin: 2rem 0;
  }

  .tagContainer {
    max-width: 5rem;
    max-height: 1.25rem;

    p {
      font-size: 0.625rem;
    }
  }

  .priceContainer {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  }

  .amountContainer {
    display: flex;
    flex-direction: row;

    max-width: 7.375rem;
    max-height: 2.375rem;

    input {
      width: 4.5rem;
    }
  }

  img {
    margin-top: -20px;
    max-width: 8rem;
    max-height: 8rem;
  }
`
export const CoffeeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 16rem;
  height: 19.375rem;

  background: ${(props) => props.theme['grey-300']};
  border-radius: 6px 36px;
`

export const CoffeeList = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2.5rem 2rem;
`
