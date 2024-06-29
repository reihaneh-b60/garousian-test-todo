import classNames from "classnames"
import { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement>{
    
}

const Input = ({className,...props}:Iprops)=>{

    const inputClasses = classNames(
        'garousian-input',
        className
    )

    return(
        <input
            className={inputClasses}
            {...props}
        />
    )
}

export default Input