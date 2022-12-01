import React from 'react'
import { useCart } from '../../../../contexts'
import ProductListItem from './ProductListItem'

const ProductList = () => {
    const { cart } = useCart()
    return (
        <div className='flex flex-col w-full'>
            <div className="hidden md:flex items-center border-b border-b-neutral-300 py-2 px-10 font-semibold">
                <div className="w-1/2 flex">Product</div>
                <div className="w-1/6 flex justify-center items-center">Price</div>
                <div className="w-1/6  flex justify-center items-center">Quantity</div>
                <div className="w-1/6 flex justify-center items-center">Subtotal</div>
            </div>
            <div className='bg-neutral-100 rounded-lg border border-neutral-200'>
                {cart.map((product, index) => (
                    <div>
                        <ProductListItem key={product.id}
                            id={product.id}
                            tagline={product.tagline}
                            name={product.name}
                            price={product.price}
                            imageUrl={product.imageUrl}
                            quantity={product.quantity}
                            desc={product.desc}
                            plan={product.plan}
                            planLink={product.planLink}
                            gift={product.gift}
                        />
                        {index !== cart.length - 1 ? <hr className='border-neutral-300' /> : null}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList