interface Product {
    id: number
    tagline?: string
    name: string
    price: number
    imageUrl: string
    desc: string
    quantity: number
    plan?: string
    planLink?: string
    gift?: {
        name: string
        price: number
        desc: string
        imageUrl?: string
    }
}

export default Product