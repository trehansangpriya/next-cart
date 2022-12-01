import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [linksArraySize, setLinksArraySize] = useState(4)
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 640) {
                setLinksArraySize(0)
            } else if (window.innerWidth < 768) {
                setLinksArraySize(2)
            } else if (window.innerWidth < 1024) {
                setLinksArraySize(2)
            } else {
                setLinksArraySize(4)
            }
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])
    return (
        <div className='px-6 md:px-10 lg:px-20 bg-darkgray text-white pt-6 pb-4 md:pb-24'>
            {/* Section Top */}
            <div className="hidden md:flex">
                {/* Links */}
                <div className="flex flex-1 gap-20">
                    {
                        Array(linksArraySize).fill(0).map((_, index) => (
                            <FooterLinks key={index} />
                        ))
                    }
                </div>
                {/* Divider */}
                <div className="hidden md:block w-px rounded bg-neutral-200 mx-12"></div>
                {/* Details */}
                <div className="flex flex-col gap-3">
                    <span className='font-bold'>CALL US</span>
                    <div className='flex gap-2 text-xs text-neutral-400'>
                        <div className='flex flex-col'>
                            <span>
                                Monday - Friday
                            </span>
                            <span>
                                8am to 9pm CST
                            </span>
                        </div>
                        <div className='flex flex-col'>

                            <span>
                                Saturday & Sunday
                            </span>
                            <span>
                                10am to 6pm CST
                            </span>
                        </div>
                    </div>
                    <div className='flex gap-2'>
                        <img src="/icon/phone.png" alt="Call Us" />
                        <span className='font-bold'>
                            1800-123-1234
                        </span>
                    </div>
                    <hr className='border-neutral-200 my-1' />
                    <span>
                        support.us@test.com
                    </span>
                </div>
            </div>
            {/* HR */}
            <hr className='hidden md:block border-neutral-300 my-6' />
            {/* Section Bottom */}
            <div className='flex flex-col items-center md:items-end gap-2'>
                {/* Links */}
                <div className='flex gap-3'>
                    {
                        Array(3).fill(0).map((a, i) => (
                            <div key={i} className='flex items-center gap-3'>
                                {
                                    i === 0 ? null : <span className='text-neutral-300'>|</span>
                                }
                                <a className='text-sm font-medium' href='/'>Dummy</a>
                            </div>
                        ))
                    }
                </div>
                {/* Text */}
                <div className='text-xs font-medium text-neutral-300 text-center'>
                    Lorem Ipsum is simply dummy text ot the printing and tvpesetting industry.
                </div>
            </div>
        </div>
    )
}

export default Footer

const FooterLinks = () => {
    return (
        <div className="flex flex-col">
            <div className="text-sm font-bold mb-2">LOREM</div>
            {
                Array(5).fill(0).map((_, index) => (
                    <div key={index} className="flex flex-col">
                        <div className="text-xs font-medium mb-2">Dummy Text</div>
                    </div>
                ))
            }
        </div>
    )
}