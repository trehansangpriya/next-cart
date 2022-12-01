import React from 'react'

interface BannerProps {
    text: string
}

const Banner = ({
    text
}: BannerProps) => {
    return (
        <div className='py-6 hidden md:block'>
            <div className='bg-accent p-2 flex justify-center text-white'>
                {text}
            </div>
        </div>
    )
}

export default Banner