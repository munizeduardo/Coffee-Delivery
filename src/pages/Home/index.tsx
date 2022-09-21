import {
  BaseCards,
  CoffeeCardContainer,
  CoffeeList,
  CoffeeMenuContainer,
  HomeBannerArea,
  HomeBannerCards,
  HomeBannerTextArea,
  HomeBannerTitle,
  HomeContainer,
  PackageCardContainer,
  ShoppingCartCardContainer,
  TimerCardContainer,
} from './styles'
import coffeeList from '../../data/coffee.json'
import coffeeBanner from '../../assets/coffee-delivery-cup-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { Coffees } from '../../components/Coffees'

export function Home() {
  return (
    <HomeContainer>
      <HomeBannerArea>
        <HomeBannerTextArea>
          <HomeBannerTitle>
            <h1>Find the perfect coffee for any time of the day</h1>
            <p>
              With Coffee Delivery you get your coffee anywhere, whenever you
              need
            </p>
          </HomeBannerTitle>
          <HomeBannerCards>
            <BaseCards>
              <ShoppingCartCardContainer>
                <ShoppingCart size={16} weight="fill" />
              </ShoppingCartCardContainer>
              Simple and safe payments
            </BaseCards>
            <BaseCards>
              <PackageCardContainer>
                <Package size={16} weight="fill" />
              </PackageCardContainer>
              Packaging protects the coffee
            </BaseCards>
            <BaseCards>
              <TimerCardContainer>
                <Timer size={16} weight="fill" />
              </TimerCardContainer>
              Fast and tracked delivery
            </BaseCards>
            <BaseCards>
              <CoffeeCardContainer>
                <Coffee size={16} weight="fill" />
              </CoffeeCardContainer>
              Fresh coffee arrives at your doorstep
            </BaseCards>
          </HomeBannerCards>
        </HomeBannerTextArea>
        <img src={coffeeBanner} alt="" />
      </HomeBannerArea>

      <CoffeeMenuContainer>
        <h2>Our Coffee</h2>
        <CoffeeList>
          {coffeeList.map((coffee) => {
            return <Coffees key={coffee.id} {...coffee} />
          })}
        </CoffeeList>
      </CoffeeMenuContainer>
    </HomeContainer>
  )
}
