import { VariantProps, cva } from 'class-variance-authority'
import {ComponentProps, FC} from 'react'

const buttonStyles = cva(["hover:bg-secondary-hover", "transition"], {
    variants: {
        variant: {
            default: ["bg-secondary", "hover:bg-secondary-100"],
            ghost: ["hover:bg-gray-100"],
        },
        size: {
            default: ["rounded", "p-2"],
            icon: ["rounded-full", "w-12", "h-12", "flex", "items-center", "justify-center", "p-2.5"]
        }
    },
    defaultVariants: {
        variant: "default",
        size: "default"
    }
})

type ButtonProps = VariantProps<typeof buttonStyles> & ComponentProps<'button'>


const Button: FC<ButtonProps> = ({variant, size, className, ...props}) => {
    return (
        <button {...props} className={buttonStyles({ variant, size, className })}></button>
    )
}

export default Button