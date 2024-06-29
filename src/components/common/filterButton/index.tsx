import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

interface Iprops extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: React.ReactNode;
    isActive: boolean
}

const FilterButton = ({
    children,
    isActive = false,
    className,
    ...props
}: Iprops) => {

    const buttonClasses = classNames(
        'garousian-filterButton',
        isActive && 'garousian-filterButton__selected',
        className
    )

    return (
        <button
            className={buttonClasses}
            {...props}
        >
            {isActive ?
                <span>
                    <svg width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M6.75012 12.8774L3.62262 9.74988L2.55762 10.8074L6.75012 14.9999L15.7501 5.99988L14.6926 4.94238L6.75012 12.8774Z" fill="#1D192B" />
                    </svg>

                </span> :
                null
            }
            {children}
        </button>
    )
}

export default FilterButton