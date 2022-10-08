import { NavLink } from 'react-router-dom'
import {
  CartQuantityTooltip,
  HeaderContainer,
  LocationContainer,
  ShopcartContainer,
} from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'
import { useShoppingCart } from '../../context/ShoppingCartContext'

export function Header() {
  const { shoppingCart } = useShoppingCart()

  const itemQuantity = shoppingCart.reduce((total, item) => {
    return total + item.quantity
  }, 0)

  return (
    <HeaderContainer>
      <NavLink to="/" title="Home">
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>
      <nav>
        <LocationContainer>
          <NavLink to="/" title="Location">
            <MapPin size={24} weight="fill" />
            <span>Salvador, BA</span>
          </NavLink>
        </LocationContainer>

        <ShopcartContainer>
          <NavLink to="/checkout" title="Cart">
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
          {itemQuantity > 0 && (
            <CartQuantityTooltip>{itemQuantity}</CartQuantityTooltip>
          )}
        </ShopcartContainer>
      </nav>
    </HeaderContainer>
  )
}
