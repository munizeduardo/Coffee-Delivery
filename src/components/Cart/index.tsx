import { Minus, Plus, Trash } from 'phosphor-react'
import { useShoppingCart } from '../../context/ShoppingCartContext'
import {
  CartContainer,
  CartItem,
  CartItemList,
  CartSummary,
  PlaceOrderButton,
  Price,
  PricesContainer,
  QuantityButtonContainer,
  RemoveButtonContainer,
} from './styles'

export function Cart() {
  const { shoppingCart } = useShoppingCart()

  return (
    <aside>
      <CartContainer>
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
                        <button>
                          <Minus weight="bold" size={14} color="#8047F8" />
                        </button>
                        <p>{item.quantity}</p>
                        <button>
                          <Plus weight="bold" size={14} color="#8047F8" />
                        </button>
                      </QuantityButtonContainer>
                      <RemoveButtonContainer>
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
              <p>R$ 10.00</p>
            </Price>

            <Price>
              <p>Delivery fee</p>
              <p>R$ 6.00</p>
            </Price>

            <Price>
              <h2>Total</h2>
              <h2>R$ 10.00</h2>
            </Price>
          </PricesContainer>
          <PlaceOrderButton>
            <p>PLACE ORDER</p>
          </PlaceOrderButton>
        </CartSummary>
      </CartContainer>
    </aside>
  )
}
