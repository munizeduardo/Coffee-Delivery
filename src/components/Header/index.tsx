import { NavLink } from 'react-router-dom'
import { HeaderContainer, LocationContainer, ShopcartContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'
import logoCoffeeDelivery from '../../assets/logo-coffee-delivery.svg'

export function Header() {
  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt="" />
      <nav>
        <LocationContainer>
          <NavLink to="/" title="Location">
            <MapPin size={24} weight="fill" />
            <span>Salvador, BA</span>
          </NavLink>
        </LocationContainer>

        <ShopcartContainer>
          <NavLink to="/" title="Cart">
            <ShoppingCart size={24} weight="fill" />
          </NavLink>
        </ShopcartContainer>
      </nav>
    </HeaderContainer>
  )
}
