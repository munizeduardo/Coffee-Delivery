import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  AddToCartButton,
  CoffeeContainer,
  PriceDetailsContainer,
  OptionsContainer,
  QuantityButtonContainer,
  DetailsContainer,
  DetailsTextContainer,
} from './styles'

export interface CoffeesProps {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  img: string
}

export function CoffeeCard({
  id,
  name,
  tags,
  description,
  price,
  img,
}: CoffeesProps) {
  const { addCoffeeToCart } = useShoppingCart()
  const [quantity, setQuantity] = useState(0)

  const coffee = {
    id,
    name,
    img,
    price,
    quantity,
  }

  function handleDecreaseQuantity() {
    if (quantity > 0) {
      setQuantity(quantity - 1)
    }
  }

  function handleIncreaseQuantity() {
    setQuantity(quantity + 1)
  }
  return (
    <CoffeeContainer key={id}>
      <img src={img} alt="" />
      <DetailsContainer>
        <DetailsTextContainer>
          <div className="tagContainer">
            {tags.map((tag) => {
              return <p key={tag}>{tag.toUpperCase()}</p>
            })}
          </div>
          <h3>{name}</h3>
          <p className="description">{description}</p>
        </DetailsTextContainer>
        <PriceDetailsContainer>
          <div className="priceContainer">
            <span>R$</span>
            <h2>{price.toFixed(2)}</h2>
          </div>
          <OptionsContainer>
            <QuantityButtonContainer>
              <button onClick={handleDecreaseQuantity}>
                <Minus weight="bold" size={14} />
              </button>
              <span>{quantity}</span>
              <button onClick={handleIncreaseQuantity}>
                <Plus weight="bold" size={14} />
              </button>
            </QuantityButtonContainer>
            <AddToCartButton onClick={() => addCoffeeToCart(coffee)}>
              <ShoppingCart size={24} weight="fill" color="white" />
            </AddToCartButton>
          </OptionsContainer>
        </PriceDetailsContainer>
      </DetailsContainer>
    </CoffeeContainer>
  )
}
