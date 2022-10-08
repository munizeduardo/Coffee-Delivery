import { Minus, Plus, Trash } from 'phosphor-react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  CartItem,
  CartItemList,
  CartSummary,
  Price,
  PricesContainer,
  QuantityButtonContainer,
  RemoveButtonContainer,
} from './styles'

export function Cart() {
  const {
    shoppingCart,
    removeCoffeeFromCart,
    increaseCoffeeQuantity,
    decreaseCoffeeQuantity,
  } = useShoppingCart()

  const totalPrice = shoppingCart.reduce((total, item) => {
    return total + item.price * item.quantity
  }, 0)

  const deliveryFee = 6
  return (
    <aside>
      <CartItemList>
        {shoppingCart.map((item) => {
          return (
            <CartItem key={item.id}>
              <div className="itemWrapper">
                <img src={item.img} alt="" />
                <div className="itemDetails">
                  <p className="itemName">{item.name}</p>
                  <div className="buttonContainer">
                    <QuantityButtonContainer>
                      <button onClick={() => decreaseCoffeeQuantity(item)}>
                        <Minus weight="bold" size={14} />
                      </button>
                      <p>{item.quantity}</p>
                      <button onClick={() => increaseCoffeeQuantity(item)}>
                        <Plus weight="bold" size={14} />
                      </button>
                    </QuantityButtonContainer>
                    <RemoveButtonContainer
                      onClick={() => removeCoffeeFromCart(item)}
                    >
                      <Trash weight="bold" size={16} color="#8047F8" />
                      <p>REMOVE</p>
                    </RemoveButtonContainer>
                  </div>
                </div>
              </div>
              <p className="price">R$ {item.price.toFixed(2)}</p>
            </CartItem>
          )
        })}
      </CartItemList>
      <CartSummary>
        <PricesContainer>
          <Price>
            <p>Price details</p>
            <p>R$ {totalPrice.toFixed(2)}</p>
          </Price>

          <Price>
            <p>Delivery fee</p>
            <p>R$ {deliveryFee.toFixed(2)}</p>
          </Price>

          <Price>
            <h2>Total</h2>
            <h2>R$ {(totalPrice + deliveryFee).toFixed(2)}</h2>
          </Price>
        </PricesContainer>
      </CartSummary>
    </aside>
  )
}
