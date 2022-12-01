import React from 'react'
import { useCart } from '../../../../contexts'
import { Button } from '../../../utilities'

const OrderSummary = () => {
    const { cartCount, subTotal, totalDiscount, deliveryPrice, isDeliveryAvailable } = useCart()
    return (
        <div className={[
            'flex flex-col gap-3',
            'w-full md:w-[40%] lg:w-[40%]',
        ].join(' ')}>
            <div className={[
                'flex flex-col gap-3',
                'border border-neutral-200 rounded-xl md:border-none',
            ].join(' ')}>
                <p className='text-lg font-semibold px-3 pt-3 md:p-0'>
                    OrderSummary ({cartCount} items)
                </p>
                <div className="flex flex-col gap-4 md:gap-2 text-sm text-neutral-500 px-3 md:p-0">
                    <div className='flex justify-between'>
                        <p>
                            Subtotal
                        </p>
                        <p>
                            {subTotal} $
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p>
                            Total Discount
                        </p>
                        <p>
                            -{totalDiscount} $
                        </p>
                    </div>
                    <div className='flex justify-between'>
                        <p>
                            Standard Shipping
                        </p>
                        <p>
                            {isDeliveryAvailable ?
                                deliveryPrice === 0 ? 'Free' : `${deliveryPrice} $`
                                : 'Delivery Not Available'}
                        </p>
                    </div>
                </div>
                <div className='flex justify-between md:justify-end lg:justify-between items-center md:mt-4 bg-neutral-100 p-3 md:p-0 rounded-b-xl'>
                    <p className='text-sm text-neutral-500 hidden lg:block'>
                        Order Total
                    </p>
                    <p className='text-sm font-semibold md:hidden'>
                        Grand Total:
                    </p>

                    <p className='text-xl md:text-2xl font-semibold'>
                        {subTotal - totalDiscount + deliveryPrice} $
                    </p>
                </div>
            </div>
            <div className='w-fit lg:w-full justify-end self-center md:self-end mt-4 gap-6'>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center gap-4'>
                    <Button
                        className='w-full'
                        variant='secondary'
                        onClick={() => console.log('Continue Shopping')}
                    >
                        Continue Shopping
                    </Button>
                    <Button
                        className='w-full'
                        variant='primary'
                        onClick={() => console.log('Proceed to Checkout')}
                    >
                        Checkout
                    </Button>
                </div>
            </div>

        </div>
    )
}

export default OrderSummary