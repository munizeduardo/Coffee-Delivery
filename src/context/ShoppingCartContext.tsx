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
  increaseCoffeeQuantity: (newState: CartItemProps) => void
  decreaseCoffeeQuantity: (newState: CartItemProps) => void
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

  function increaseCoffeeQuantity(selectedCoffee: CartItemProps) {
    setShoppingCart((currentItems) => {
      return currentItems.map((item) => {
        if (selectedCoffee.id === item.id) {
          return { ...item, quantity: item.quantity + 1 }
        } else {
          return item
        }
      })
    })
  }

  function decreaseCoffeeQuantity(selectedCoffee: CartItemProps) {
    setShoppingCart((currentItems) => {
      if (
        currentItems.find((item) => selectedCoffee.id === item.id)?.quantity ===
        1
      ) {
        return currentItems.filter((item) => selectedCoffee.id !== item.id)
      } else {
        return currentItems.map((item) => {
          if (selectedCoffee.id === item.id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
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
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        removeCoffeeFromCart,
        shoppingCart,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
