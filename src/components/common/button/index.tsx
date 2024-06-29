import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement>{
    children : React.ReactNode;
    rightIcon? : React.ReactNode;
    leftIcon? : React.ReactNode;
    variant? : 'fill' | 'text';
    color? : 'blue' | 'red';
    square? : boolean
}

const Button = ({
    children,
    rightIcon,
    leftIcon,
    variant = 'fill',
    color = 'blue',
    square = false ,
    className,
    ...props
}:Iprops)=>{

    const buttonClasses = classNames(
        'garousian-btn',
        square ? 'garousian-btn-square' : 'garousian-btn-rect',
        variant === 'fill' && (
            color === 'blue' ? 'garousian-btn-fill-blue' :
            color === 'red' ? 'garousian-btn-fill-red' : null
        ) , 
        variant === 'text' && (
            color === 'blue' ? 'garousian-btn-text-blue' :
            color === 'red' ? 'garousian-btn-text-red' : null
        ) ,
        className
    )

    return(
        <button
            className={buttonClasses}
            {...props}
        >
            {rightIcon ?
                    <span>{rightIcon}</span> :
                    null
                }
                {children}
                {leftIcon ?
                    <span>{leftIcon}</span> :
                    null
                }
        </button>
    )
}

export default Button