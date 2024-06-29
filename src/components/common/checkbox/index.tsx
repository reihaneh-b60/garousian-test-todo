'use client'

import classNames from "classnames"
import { InputHTMLAttributes } from "react"

interface Iprops extends InputHTMLAttributes<HTMLInputElement> {
    setIsChecked : Function,
    isChecked : boolean
}

const Checkbox = ({ setIsChecked,isChecked,className, type,checked, ...props }: Iprops) => {

    const wrapperClasses = classNames(
        'garousian-checkbox__wrapper',
        isChecked ? 
            'garousian-checkbox__wrapper--checked' :
            'garousian-checkbox__wrapper--notchecked',
        className
    )

    const checkboxClasses = classNames(
        'garousian-checkbox__input',
        className
    )

    return (
        <label className={wrapperClasses}>
            {isChecked ?
                <div className="w-[9px] md:w-[11px]">
                    <svg className="w-full" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.5 7.01323L6.01988 10.5L13.5 2.5" stroke="#5274F9" stroke-width="4" stroke-linecap="round" />
                    </svg>
                </div>
                : null
            }
            <input 
                className={checkboxClasses} 
                type="checkbox" 
                checked={isChecked} 
                onChange={(e)=> setIsChecked(e.target.checked)} 
                {...props} 
            />
        </label>
    )
}

export default Checkbox