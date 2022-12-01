import { useEffect, useState } from "react"
import { useCart } from "../../../../../contexts"
import { Product } from "../../../../../interfaces"
import { Button } from "../../../../utilities"

const ProductListItem = ({
    id,
    tagline,
    name,
    price,
    imageUrl,
    quantity,
    desc,
    plan,
    planLink,
    gift
}: Product) => {
    const { removeFromCart, increaseQuantity, decreaseQuantity } = useCart()
    const [screenSize, setScreenSize] = useState('lg')

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setScreenSize('sm')
            } else {
                setScreenSize('lg')
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [screenSize])

    return screenSize === 'lg' ? (
        <div className='flex flex-col'>
            <div className="flex items-center py-10 px-10">
                <div className="w-1/2 flex gap-8">
                    <div className={`p-6 border border-neutral-300 rounded-lg flex justify-center items-center w-40 h-44`}>
                        <img src={`/images/${imageUrl}.png`}
                            alt={name}
                            className="h-full object-contain"
                        />
                    </div>
                    <div className="w-2/3 flex flex-col gap-2 justify-center">
                        {tagline && <p className="text-xs bg-secondary w-fit px-1 py-px text-neutral-50 font-bold uppercase">{tagline}</p>}
                        <h1 className="font-medium">{name}</h1>
                        <p className="text-sm text-neutral-500">{desc}</p>
                        <div className='flex flex-col lg:flex-row mt-3 gap-2'>
                            {plan && <p className="text-sm text-neutral-500">{plan}</p>}
                            {planLink && <a href={planLink} className="text-sm font-bold text-primary">View Plan</a>}
                        </div>
                    </div>
                </div>
                <div className="w-1/6 flex justify-center items-center">
                    <p className="text-sm font-medium">{price} $</p>
                </div>
                <div className="w-1/6 flex justify-center items-center gap-1">
                    <Button className="w-8 h-8"
                        variant="icon"
                        onClick={() => decreaseQuantity(id)}
                        disabled={quantity === 0}
                    >
                        {
                            quantity === 0 ?
                                <img src="/icon/minus.png" alt="Decrease Qty" /> :
                                <img src="/icon/minus-active.png" alt="" />
                        }
                    </Button>
                    <p className="w-8 h-8 border-[1.5px] border-neutral-200 rounded flex justify-center items-center" >
                        {quantity}
                    </p>
                    <Button
                        variant="icon"
                        className="w-8 h-8"
                        onClick={() => increaseQuantity(id)}
                    >
                        <img src="/icon/plus.png" alt="Increase Qty" />
                    </Button>
                </div>
                <div className="w-1/6 flex justify-center items-center">
                    <p className="text-sm font-medium">{price * quantity} $</p>
                    {/* Delete Button */}
                    <Button variant="icon" className="w-6 h-6 ml-4"
                        onClick={() => removeFromCart(id)}
                    >
                        <img src="/icon/delete.png" alt="Delete" />
                    </Button>
                </div>
            </div>
            {
                quantity > 0 && gift && <div className="py-10 px-10">
                    <div className="flex items-center py-8 px-8 bg-neutral-100 rounded-lg relative">
                        <div id='triangle' className="absolute left-4 top-0 rotate-45 w-16 h-16 bg-neutral-100">
                        </div>
                        <div className="w-1/2 flex gap-8 z-[1]">
                            <div className={`p-6 border border-neutral-300 rounded-lg flex justify-center items-center w-32 h-36`}>
                                <img src={`/images/${gift.imageUrl}.png`}

                                    alt={gift.name}
                                    className="h-full object-contain"
                                />
                            </div>
                            <div className="w-2/3 flex flex-col gap-2 justify-center">
                                <p className="text-xs bg-darkgray w-fit px-1 py-px text-neutral-50 font-bold uppercase">Gift</p>
                                <h1 className="font-medium">{gift.name}</h1>
                                <p className="text-sm text-neutral-500">{gift.desc}</p>
                            </div>
                        </div>
                        <div className="w-1/6 flex justify-center items-center">
                            <p className="text-sm font-medium">{gift.price} $</p>
                        </div>
                        <div className="w-1/6 flex justify-center items-center">
                            <p className="flex justify-center items-center" >
                                1
                            </p>
                        </div>
                    </div>
                </div>
            }
        </div>
    ) : (
        <div className='flex flex-col'>
            <div className="flex flex-col justify-center py-8 px-5">
                <div className="w-full flex gap-4">
                    <div className={`p-3 bg-white border border-neutral-300 rounded-lg flex justify-center items-center w-[36%] h-32`}>
                        <img src={`/images/${imageUrl}.png`}
                            alt={name}
                            className="h-full object-contain"
                        />
                    </div>
                    <div className="flex flex-col w-[64%] justify-center gap-3">
                        <div className="flex flex-col justify-center">
                            {tagline && <p className="text-xs bg-secondary w-fit px-1 py-px text-neutral-50 font-bold uppercase">{tagline}</p>}
                            <h1 className="font-medium">{name}</h1>
                            <p className="text-sm text-neutral-500">{desc}</p>
                            <p className="text-sm text-neutral-500">
                                {price} $
                            </p>
                        </div>
                        <div className="w-full flex justify-between items-center">
                            <p className="text-sm font-bold">{price * quantity} $</p>
                            <div className="flex items-center gap-1">
                                <Button className="w-5 h-5"
                                    variant="icon"
                                    onClick={() => decreaseQuantity(id)}
                                    disabled={quantity === 0}
                                >
                                    {
                                        quantity === 0 ?
                                            <img src="/icon/minus.png" alt="Decrease Qty" className="w-full" /> :
                                            <img src="/icon/minus-active.png" alt="" className="w-full" />
                                    }
                                </Button>
                                <p className="w-6 h-6 border-[1.5px] border-neutral-200 bg-white rounded flex justify-center items-center" >
                                    {quantity}
                                </p>
                                <Button
                                    variant="icon"
                                    className="w-5 h-5"
                                    onClick={() => increaseQuantity(id)}
                                >
                                    <img src="/icon/plus.png" alt="Increase Qty" />
                                </Button>
                            </div>
                        </div>
                    </div>

                </div>

                {
                    quantity > 0 && gift && <div className="w-[36%] flex justify-center items-center">

                        <div className="my-4 w-7 h-7 flex justify-center items-center rounded-full font-medium text-3xl text-neutral-300 bg-white border border-neutral-200">+</div>

                    </div>
                }
                {
                    quantity > 0 && gift &&
                    <div className="w-full flex gap-4">
                        <div className={`p-3 bg-white border border-neutral-300 rounded-lg flex justify-center items-center w-[36%] h-32`}>
                            <img src={`/images/${gift.imageUrl}.png`}

                                alt={gift.name}
                                className="h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col w-[64%] justify-center gap-3">
                            <div className="flex flex-col justify-center">
                                <p className="text-xs bg-darkgray w-fit px-1 py-px text-neutral-50 font-bold uppercase">Gift</p>
                                <h1 className="font-medium">{gift.name}</h1>
                                <p className="text-sm text-neutral-500">{gift.desc}</p>
                                <p className="text-sm text-neutral-500">Qty: 1</p>

                                <p className="text-sm font-bold">
                                    {gift.price} $
                                </p>
                            </div>

                        </div>
                    </div>

                }
            </div>
        </div>
    )
}

export default ProductListItem