import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from 'react'
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

interface AddressProps {
  zipCode: number
  street: string
  number: string
  additionalInfo?: string
  district: string
  city: string
  state: string
  payment: string
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
  submitAddress: (addressState: AddressProps) => void
  setPaymentMethod: (payment: string) => void
  shoppingCart: CartItemProps[]
  orderAddress: AddressProps | undefined
  paymentMethod: string
}

const ShoppingCartContext = createContext({} as ShoppingCartContextProps)

export function useShoppingCart() {
  return useContext(ShoppingCartContext)
}

export function ShoppingCartProvider({ children }: ShoppingCartProviderProps) {
  const [shoppingCart, setShoppingCart] = useState<CartItemProps[]>([])
  const [orderAddress, setOrderAddress] = useState<AddressProps>()
  const [paymentMethod, setPaymentMethod] = useState('')

  const coffeeList = coffeeDetails

  useEffect(() => {
    const storedCart = localStorage.getItem(
      '@coffee-delivery:shoppingCart-state-0.1.0',
    )
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart)
      setShoppingCart(parsedCart)
    }
  }, [])

  useEffect(() => {
    if (shoppingCart.length > 0) {
      const stateJSON = JSON.stringify(shoppingCart)
      localStorage.setItem(
        '@coffee-delivery:shoppingCart-state-0.1.0',
        stateJSON,
      )
    } else {
      localStorage.removeItem('@coffee-delivery:shoppingCart-state-0.1.0')
    }
  }, [shoppingCart])

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

  function submitAddress(formData: AddressProps) {
    setOrderAddress(formData)
  }

  function selectPaymentMethod(payment: string) {
    setPaymentMethod(payment)
  }

  return (
    <ShoppingCartContext.Provider
      value={{
        coffeeList,
        addCoffeeToCart,
        increaseCoffeeQuantity,
        decreaseCoffeeQuantity,
        removeCoffeeFromCart,
        submitAddress,
        setPaymentMethod,
        shoppingCart,
        orderAddress,
        paymentMethod,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  )
}
