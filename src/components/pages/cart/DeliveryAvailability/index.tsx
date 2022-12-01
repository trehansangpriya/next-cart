import React, { useEffect, useState } from 'react'
import data from '../../../../data/data.json'
import validator from 'validator'
import { Button } from '../../../utilities'
import { useCart } from '../../../../contexts'

const DeliveryAvailability = () => {
    const [pincode, setPincode] = useState('')
    const [deliveryTexts, setDeliveryTexts] = useState<{
        text: string,
        status: 'check' | 'cross' | ''
    }[]>([])

    const { setDeliveryPrice, setIsDeliveryAvailable } = useCart()

    useEffect(() => {
        const checkPincode = () => {
            if (pincode.length === 0) {
                setDeliveryTexts([])
                return
            }
            if (validator.isNumeric(pincode) && pincode.length === 6) {
                // check with data.pincode keys
                const pincodeKeys = Object.keys(data.pincode)
                if (pincodeKeys.includes(pincode)) {
                    setIsDeliveryAvailable(true)
                    setDeliveryPrice(data.pincode[
                        pincode as keyof typeof data.pincode
                    ].deliveryPrice)
                    // set deliveryTexts
                    setDeliveryTexts([
                        {
                            text: 'Free delivery',
                            status: data.pincode[
                                pincode as keyof typeof data.pincode
                            ].deliveryPrice === 0 ? 'check' : 'cross'
                        },
                        {
                            text: 'Cash on Delivery',
                            status: data.pincode[
                                pincode as keyof typeof data.pincode
                            ].cashOnDelivery ? 'check' : 'cross'
                        },
                        {
                            text: `Estimated delivery time is ${data.pincode[pincode as keyof typeof data.pincode].estimatedDays.min
                                } - ${data.pincode[pincode as keyof typeof data.pincode].estimatedDays.max
                                } days`,
                            status: 'check'
                        }
                    ])
                } else {
                    setIsDeliveryAvailable(false)
                    setDeliveryTexts([
                        {
                            text: 'No Delivery',
                            status: 'cross'
                        }
                    ])
                }
                return
            }
            if (pincode.length < 6 || !validator.isNumeric(pincode)) {
                // set deliveryTexts
                setIsDeliveryAvailable(false)
                setDeliveryTexts((texts) => [{
                    text: 'Please enter a valid pincode',
                    status: 'cross'
                }])
            }
        }
        checkPincode()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pincode])

    return (
        <div className={[
            'flex flex-col gap-2',
            'w-full md:w-[50%] lg:w-[40%]',
            'border border-neutral-200 rounded-xl md:border-none',
            'p-3 md:p-0'
        ].join(' ')}>
            <p className='text-lg font-semibold'>
                Delivery Availability
            </p>
            <div className='flex items-center border-b border-b-darkgray py-1'>
                <img src="/icon/location.png" alt="Location" className='w-7 h-7' />
                <input className='w-full px-2 border-none outline-none'
                    type="text"
                    placeholder='110003'
                    value={pincode}
                    onChange={(e) => {
                        setPincode(e.target.value)
                    }}
                    name="pincode" id="pincode"
                    maxLength={6}
                />
                <Button
                    className='w-fit'
                    variant='secondary'
                    onClick={() => {
                        setPincode('')
                    }}
                >Change</Button>
            </div>
            {
                deliveryTexts.length > 1 ? (
                    <div className='flex justify-between gap-6 py-2'>
                        {
                            deliveryTexts.map((item, index) => (
                                <div key={index} className='flex flex-col items-center lg:items-start lg:flex-row gap-1'>
                                    <img className='w-6 h-6' src={`/icon/${item.status}.png`} alt={`${item.status} Icon`} />
                                    <span className='text-sm leading-6 text-center lg:text-left'>{item.text}</span>
                                </div>
                            ))}
                    </div>
                ) : deliveryTexts.length === 1 ? (
                    <div className='flex gap-6 py-2'>
                        <div className='flex items-center lg:items-center lg:flex-row gap-1'>
                            <img className='w-6 h-6' src={`/icon/${deliveryTexts[0]?.status}.png`} alt={`${deliveryTexts[0]?.status} Icon`} />
                            <span className='text-sm leading-6'>{deliveryTexts[0]?.text}</span>
                        </div>
                    </div>
                ) : null
            }
        </div>
    )
}

export default DeliveryAvailability