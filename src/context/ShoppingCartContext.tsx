import { createContext, ReactNode, useContext, useState } from 'react'
import coffeeDetails from '../data/coffee.json'

interface ShoppingCartProviderProps {
  children: ReactNode
}

interface CartItemProps {
  id: number
  img: string
  name: string
  price: number
  quantity: number
}

interface ShoppingCartContextProps {
  coffeeList: {
    id: number
    name: string
    tags: string[]
    description: string
    price: number
    img: string
  }[]
  addCoffeeToCart: (newState: CartItemProps) => void
  changeCoffeeQuantity: (newState: CartItemProps) => void
  removeCoffeeFromCart: (newState: CartItemProps) => void
  shoppingCart: CartItemProps[]
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItemProps[]>([])

  const coffeeList = coffeeDetails

  function addCoffeeToCart(selectedCoffee: CartItemProps) {
    if (selectedCoffee.quantity === 0) {
      window.alert('Increase the quantity first!')
    } else {
      const alreadySelected = shoppingCart.find(
        (item) => item.id === selectedCoffee.id,
      )

      if (alreadySelected) {
        window.alert("Item already in cart, you can edit it's quantity in it")
      } else {
        setShoppingCart([...shoppingCart, selectedCoffee])
      }
    }
  }

  function changeCoffeeQuantity(selectedCoffee: CartItemProps) {
    const currentCartState = shoppingCart

    for (let i = 0; i < currentCartState.length; i++) {
      if (currentCartState[i].id === selectedCoffee.id) {
        currentCartState[i].quantity = selectedCoffee.quantity
      }
    }
    setShoppingCart(currentCartState)
  }

  function removeCoffeeFromCart(selectedCoffee: CartItemProps) {
    const currentCartState = shoppingCart.filter(
      (coffee) => coffee.id !== selectedCoffee.id,
    )

    setShoppingCart(currentCartState)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffeeList,
        addCoffeeToCart,
        changeCoffeeQuantity,
        removeCoffeeFromCart,
        shoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
