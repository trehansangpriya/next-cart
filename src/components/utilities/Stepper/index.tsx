import React from 'react'
interface StepperProps {
    steps: string[]
    activeStep: number
}
const Stepper = ({
    steps,
    activeStep
}: StepperProps) => {
    return (
        <div className='flex w-full justify-center'>
            {
                steps.map((step, index) => (
                    <div key={index} className="flex">
                        <Step step={step} active={index === activeStep} />
                        {
                            index !== steps.length - 1 && (
                                <div className="w-[200px]">
                                    <hr className={[
                                        index === activeStep ? "border-black" : "border-neutral-200",
                                        'mt-3 mx-[-32px]'
                                    ].join(' ')} />
                                </div>
                            )
                        }
                    </div>
                ))
            }

        </div>
    )
}

export default Stepper

interface StepProps {
    step: string
    active: boolean
}

const Step = ({
    step,
    active
}: StepProps) => {
    return (
        <div className='flex flex-col items-center gap-3'>
            <div className={[
                "w-6 h-6 rounded-full flex items-center justify-center",
                active ? "border border-black text-neutral-200" : "bg-neutral-200 text-neutral-400"
            ].join(' ')}>
                <div className={[
                    "w-3 h-3 rounded-full flex items-center justify-center",
                    active ? "bg-black text-neutral-200" : "bg-neutral-200 text-neutral-400"
                ].join(' ')}></div>
            </div>
            <div className={[
                'uppercase text-xs whitespace-nowrap',
                active ? 'text-neutral-700' : 'text-neutral-400'
            ].join(' ')}>
                {step}
            </div>
        </div>
    )
}