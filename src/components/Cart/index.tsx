import { useShoppingCart } from '../../context/ShoppingCartContext'
import { CartContainer } from './styles'

export function Cart() {
  const { shoppingCart } = useShoppingCart()

  return (
    <aside>
      <CartContainer>
        <div>
          {shoppingCart.map((item) => {
            return <p key="teste">{item.name}</p>
          })}
        </div>
        <div>
          <div>
            <h1>Price details</h1>
          </div>
          <button>Confirm button</button>
        </div>
      </CartContainer>
    </aside>
  )
}
