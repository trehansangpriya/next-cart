import React from 'react'

interface ButtonProps {
    children: React.ReactNode
    onClick: () => void
    className?: string
    variant?: 'primary' | 'secondary' | 'icon'
    disabled?: boolean
}

const Button = ({
    children,
    onClick,
    className = '',
    variant = 'primary',
    disabled = false
}: ButtonProps) => {
    return (
        <button
            className={[
                `flex items-center justify-center rounded-full`,
                variant === 'icon' ? '' : ` px-4 py-3 font-bold uppercase text-sm`,
                'transition duration-200 ease-in-out cursor-pointer',
                variant === 'primary' ? 'bg-primary text-white hover:brightness-150'
                    : variant === 'secondary' ? 'text-primary bg-transparent hover:bg-neutral-100 active:bg-neutral-200'
                        : 'bg-transparent hover:bg-neutral-100 active:bg-neutral-200',
                disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.01] active:scale-[0.99]',
                className,
            ].join(' ')}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    )
}

export default Button