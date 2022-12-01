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
    return (
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
    )
}

export default ProductListItem