import React from 'react'
import { PageLayout } from '../../components/app'
import { ProductList, DeliveryAvailability, OrderSummary } from '../../components/pages/cart'

const Cart = () => {
    return (
        <PageLayout title='Shopping Cart' banner='Shop for $5000 or more and get 10% discount on your order' >
            <ProductList />
            <div className='flex flex-col md:flex-row justify-between py-2 px-0 md:px-10 my-6 md:my-16 gap-6'>
                <DeliveryAvailability />
                <OrderSummary />
            </div>
        </PageLayout>
    )
}

export default Cart