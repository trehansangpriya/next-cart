import React from 'react'
import navbarIcons from '../../../data/navbarIcons.json'
import { Stepper } from '../../utilities'
import { FiArrowLeft } from 'react-icons/fi'

interface HeaderProps {
    title: string
}

const Header = ({
    title,
}: HeaderProps) => {
    return (
        <div>
            {/* Navbar */}
            <nav className="flex items-center bg-primary text-neutral-200 h-[8vh] px-6 md:px-10 lg:px-20">
                <div className="flex-1 font-bold text-2xl">
                    <img src='/images/logo.png' alt="logo" />
                </div>
                <div className="flex items-center font-medium">
                    <span className='hidden md:block'>
                        Track Order
                    </span>
                    {
                        navbarIcons.map((icon, index) => (
                            <div key={index} className='flex items-center'>
                                <span className={[
                                    "mx-1 md:mx-3 text-neutral-400",
                                    index === 0 ? "hidden md:block" : ""
                                ].join(' ')}>|</span>
                                <span >
                                    <img src={icon.src} alt={icon.name} />
                                </span>
                            </div>
                        ))
                    }
                </div>
            </nav>

            {/* Checkout Steps */}
            <div className="hidden md:justify-center md:items-center border-b-2 border-b-neutral-300 bg-white w-full md:py-8 md:flex">
                <Stepper
                    steps={['Shopping Cart', 'Order Details', 'Make Payment']}
                    activeStep={0}
                />
            </div>

            {/* Mobile Title bar */}
            <div className="flex items-center font-semibold px-6 text-black h-[8vh] md:hidden border-b border-b-neutral-300">
                <FiArrowLeft size={20} className='mr-3' />
                <span>
                    {title}
                </span>
            </div>
        </div>
    )
}

export default Header