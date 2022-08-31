import {
  BaseCards,
  CoffeeCardContainer,
  CoffeeContainer,
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
import coffeeBanner from '../../assets/coffee-delivery-cup-banner.png'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

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
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
          <CoffeeContainer>
            <img src={coffeeBanner} alt="" />
            <div className="tagContainer">
              <p>TRADICIONAL</p>
            </div>
            <h3>Classic Expresso</h3>
            <p>
              The classic expresso coffee made with hot water and ground coffee
            </p>
            <div className="priceContainer">
              <h2>R$9,90</h2>
              <div className="amountContainer">
                <input type="number"></input>
                <button>
                  <ShoppingCart size={24} weight="fill" />
                </button>
              </div>
            </div>
          </CoffeeContainer>
        </CoffeeList>
      </CoffeeMenuContainer>
    </HomeContainer>
  )
}
