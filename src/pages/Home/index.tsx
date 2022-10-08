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
import { CoffeeCard } from '../../components/CoffeeCard'

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
                <ShoppingCart weight="fill" />
              </ShoppingCartCardContainer>
              <span>Simple and safe payments</span>
            </BaseCards>
            <BaseCards>
              <PackageCardContainer>
                <Package weight="fill" />
              </PackageCardContainer>
              <span>Packaging protects the coffee</span>
            </BaseCards>
            <BaseCards>
              <TimerCardContainer>
                <Timer weight="fill" />
              </TimerCardContainer>
              <span>Fast and tracked delivery</span>
            </BaseCards>
            <BaseCards>
              <CoffeeCardContainer>
                <Coffee weight="fill" />
              </CoffeeCardContainer>
              <span>Fresh coffee arrives at your doorstep</span>
            </BaseCards>
          </HomeBannerCards>
        </HomeBannerTextArea>
        <img src={coffeeBanner} alt="" />
      </HomeBannerArea>

      <CoffeeMenuContainer>
        <h2>Our Coffee</h2>
        <CoffeeList>
          {coffeeList.map((coffee) => {
            return <CoffeeCard key={coffee.id} {...coffee} />
          })}
        </CoffeeList>
      </CoffeeMenuContainer>
    </HomeContainer>
  )
}
