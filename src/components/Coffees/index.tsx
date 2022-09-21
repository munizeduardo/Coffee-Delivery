import { ShoppingCart } from 'phosphor-react'
import { useState } from 'react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CoffeeContainer } from './styles'

interface CoffeesProps {
  id: number
  name: string
  tags: string[]
  description: string
  price: number
  img: string
}

export function Coffees({
  id,
  name,
  tags,
  description,
  price,
  img,
}: CoffeesProps) {
  const { shoppingCart, addCoffeeToCart } = useShoppingCart()
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
  console.log(quantity)
  console.log(shoppingCart)
  return (
    <CoffeeContainer key={id}>
      <img src={img} alt="" />
      <div className="tagContainer">
        {tags.map((tag) => {
          return <p key={tag}>{tag}</p>
        })}
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <div className="priceContainer">
        <h2>R${price.toFixed(2)}</h2>
        <div className="amountContainer">
          <button onClick={handleDecreaseQuantity}>-</button>
          <div>{quantity}</div>
          <button onClick={handleIncreaseQuantity}>+</button>
        </div>
        <button onClick={() => addCoffeeToCart(coffee)}>
          <ShoppingCart size={24} weight="fill" />
        </button>
      </div>
    </CoffeeContainer>
  )
}
