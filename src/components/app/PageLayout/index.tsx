import React from 'react'
import { Banner } from '../../utilities'
import { Header, Footer } from '../index'

interface PageLayoutProps {
    children: React.ReactNode
    title: string
    banner?: string
}

const PageLayout = ({
    children,
    title,
    banner,
}: PageLayoutProps) => {
    return (
        <div>
            <Header title={title} />
            <div className='md:bg-gray px-6 md:px-10 lg:px-20 pb-20 md:pb-28 lg:pb-32'>
                {banner && <Banner text={banner} />}
                <div className="hidden md:block py-8">
                    {title && <h1 className="text-3xl font-medium">{title}</h1>}
                </div>
                <div className='md:bg-white md:rounded-lg md:border-[1.5px] md:border-neutral-200 md:py-8 py-5 px-0'>
                    {children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout