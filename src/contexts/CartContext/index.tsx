import React, { useContext, useState, createContext, useEffect } from 'react'
import { Product } from '../../interfaces'
import data from '../../data/data.json'

interface CartProviderProps {
    children: React.ReactNode
}

interface CartContextProps {
    cart: Product[]
    cartCount: number
    removeFromCart: (productId: number) => void
    increaseQuantity: (productId: number) => void
    decreaseQuantity: (productId: number) => void
    subTotal: number
    totalDiscount: number
    isDeliveryAvailable: boolean
    setIsDeliveryAvailable: React.Dispatch<React.SetStateAction<boolean>>
    deliveryPrice: number
    setDeliveryPrice: React.Dispatch<React.SetStateAction<number>>
}

export const CartContext = createContext({} as CartContextProps)

export const CartProvider = ({ children }: CartProviderProps) => {
    const [cart, setCart] = useState<Product[]>([])
    const [cartCount, setCartCount] = useState(0)
    const [subTotal, setSubTotal] = useState<number>(0)
    const [totalDiscount, setTotalDiscount] = useState<number>(0)
    const [isDeliveryAvailable, setIsDeliveryAvailable] = useState<boolean>(false)
    const [deliveryPrice, setDeliveryPrice] = useState<number>(0)

    const increaseQuantity = (productId: number) => {
        const product = cart.find(product => product.id === productId)
        if (product) {
            product.quantity += 1
            setCart([...cart])
        }
    }

    const decreaseQuantity = (productId: number) => {
        const product = cart.find(product => product.id === productId)
        if (product) {
            product.quantity -= 1
            setCart([...cart])
        }
    }

    const removeFromCart = (productId: number) => {
        setCart(cart.filter((product) => product.id !== productId))
    }

    useEffect(() => {
        // add quantity to each product
        setCart(data.products.map((product) => ({ ...product, quantity: 1 })))
    }, [])

    useEffect(() => {
        // Calculate subtotal
        setSubTotal(cart.reduce((acc, product) => acc + product.price * product.quantity, 0))
        setCartCount(cart.reduce((acc, product) => {
            if (product.quantity > 0) {
                return acc + 1
            }
            return acc
        }, 0))
    }, [cart])

    useEffect(() => {
        // Calculate total discount
        if (subTotal >= data.discount.minTotal) {
            setTotalDiscount(subTotal * (data.discount.discountPercentage / 100))
        }
    }, [subTotal])

    return (
        <CartContext.Provider value={{
            cart,
            cartCount,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            subTotal,
            totalDiscount,
            isDeliveryAvailable,
            setIsDeliveryAvailable,
            deliveryPrice,
            setDeliveryPrice
        }}>
            {children}
        </CartContext.Provider>
    )
}

const useCart = () => useContext<CartContextProps>(CartContext)

export default useCart