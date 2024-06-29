import Button from "@/components/common/button"
import Checkbox from "@/components/common/checkbox"
import { Itodo } from "@/interface/todo"
import { changeTodoDoneStatus, deleteTodo } from "@/redux/reducers/todoList/fetch"
import { AppDispatch } from "@/redux/store"
import { useDispatch } from "react-redux"

interface Iprops extends Itodo {

}

const TodoBox = ({
    id,
    is_done,
    text
}: Iprops) => {

    const dispatch:AppDispatch = useDispatch()

    const handleDelete = ()=>{
        dispatch(deleteTodo(id))
    }

    const handleChangeDoneStatus = ()=>{
        dispatch(changeTodoDoneStatus(id))
    }

    return (
        <div className="w-full flex items-center justify-between gap-[16px] md:gap-[18px]">
            <div className="flex items-center justify-between gap-[16px] md:gap-[18px]">
                <Checkbox isChecked={is_done} setIsChecked={() => handleChangeDoneStatus()} />
                <p className={`text-[13px] md:text-[17px] font-medium py-[7px] md:py-[12px] pl-[8px] md:px-[16px] ${is_done ? 'line-through text-garousian-gray-disabled' : "text-garousian-gray-common"}`}>
                    {text}
                </p>
            </div>

            <Button
                onClick={handleDelete}
                square
                className="md:hidden"
                variant="text"
                color="red"
            >
                <div>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2601_42)">
                            <path d="M15.799 7.74609C15.799 7.74609 15.3691 13.078 15.1197 15.3239C15.001 16.3966 14.3384 17.0252 13.253 17.045C11.1875 17.0822 9.1197 17.0846 7.05504 17.041C6.01083 17.0197 5.35929 16.3832 5.24291 15.3295C4.99195 13.0637 4.56445 7.74609 4.56445 7.74609" stroke="#EA2D2D" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            <path d="M16.8938 4.39844H3.46875" stroke="#EA2D2D" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                            <mask id="path-3-inside-1_2601_42" fill="white">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3072 3.53459C13.6857 3.53459 13.1506 3.09521 13.0287 2.48642L12.8363 1.52375C12.7175 1.07963 12.3154 0.772461 11.857 0.772461H8.50587C8.0475 0.772461 7.64533 1.07963 7.52658 1.52375L7.33421 2.48642C7.21229 3.09521 6.67712 3.53459 6.05566 3.53459" />
                            </mask>
                            <path d="M14.3072 5.53459C15.4118 5.53459 16.3072 4.63916 16.3072 3.53459C16.3072 2.43002 15.4118 1.53459 14.3072 1.53459V5.53459ZM13.0287 2.48642L11.0674 2.87834L11.0676 2.87914L13.0287 2.48642ZM12.8363 1.52375L14.7975 1.13183C14.7891 1.08997 14.7794 1.04838 14.7684 1.00714L12.8363 1.52375ZM7.52658 1.52375L5.59445 1.00714C5.58343 1.04838 5.57372 1.08997 5.56536 1.13183L7.52658 1.52375ZM7.33421 2.48642L9.29527 2.87914L9.29543 2.87834L7.33421 2.48642ZM6.05566 1.53459C4.95109 1.53459 4.05566 2.43002 4.05566 3.53459C4.05566 4.63916 4.95109 5.53459 6.05566 5.53459V1.53459ZM14.3072 1.53459C14.6401 1.53459 14.9247 1.76902 14.9897 2.0937L11.0676 2.87914C11.3765 4.4214 12.7314 5.53459 14.3072 5.53459V1.53459ZM14.9899 2.0945L14.7975 1.13183L10.8751 1.91567L11.0674 2.87834L14.9899 2.0945ZM14.7684 1.00714C14.4149 -0.315044 13.2177 -1.22754 11.857 -1.22754V2.77246C11.4131 2.77246 11.0202 2.4743 10.9042 2.04036L14.7684 1.00714ZM11.857 -1.22754H8.50587V2.77246H11.857V-1.22754ZM8.50587 -1.22754C7.14519 -1.22754 5.94798 -0.315045 5.59445 1.00714L9.45871 2.04036C9.34268 2.4743 8.9498 2.77246 8.50587 2.77246V-1.22754ZM5.56536 1.13183L5.37298 2.0945L9.29543 2.87834L9.4878 1.91567L5.56536 1.13183ZM5.37314 2.0937C5.43816 1.76903 5.72277 1.53459 6.05566 1.53459V5.53459C7.63147 5.53459 8.98642 4.4214 9.29527 2.87914L5.37314 2.0937Z" fill="#EA2D2D" mask="url(#path-3-inside-1_2601_42)" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2601_42">
                                <rect width="19" height="19" fill="white" transform="translate(0.5 0.25)" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>
            </Button>

            <Button
                onClick={handleDelete}
                variant="text"
                color="red"
                className="hidden md:flex whitespace-nowrap"
                rightIcon={<svg width="19" height="20" viewBox="0 0 19 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.2145 8.17871C16.2145 8.17871 15.7167 14.3525 15.428 16.953C15.2905 18.1951 14.5232 18.923 13.2665 18.9459C10.8749 18.989 8.48055 18.9917 6.08989 18.9413C4.8808 18.9165 4.12639 18.1795 3.99164 16.9595C3.70105 14.336 3.20605 8.17871 3.20605 8.17871" stroke="#EA2D2D" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    <path d="M17.4823 4.30273H1.9375" stroke="#EA2D2D" strokeWidth="2" strokeLinecap="round" stroke-linejoin="round" />
                    <mask id="path-3-inside-1_2601_6" fill="white">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M14.487 3.30274C13.7675 3.30274 13.1478 2.79399 13.0066 2.08908L12.7839 0.974409C12.6464 0.460159 12.1807 0.104492 11.65 0.104492H7.7697C7.23895 0.104492 6.77328 0.460159 6.63578 0.974409L6.41303 2.08908C6.27187 2.79399 5.6522 3.30274 4.93262 3.30274" />
                    </mask>
                    <path d="M14.487 5.30274C15.5916 5.30274 16.487 4.40731 16.487 3.30274C16.487 2.19817 15.5916 1.30274 14.487 1.30274V5.30274ZM13.0066 2.08908L11.0454 2.481L11.0456 2.4818L13.0066 2.08908ZM12.7839 0.974409L14.7451 0.582487C14.7367 0.540624 14.727 0.499039 14.716 0.457797L12.7839 0.974409ZM6.63578 0.974409L4.70366 0.457797C4.69263 0.499039 4.68293 0.540624 4.67456 0.582487L6.63578 0.974409ZM6.41303 2.08908L8.3741 2.4818L8.37426 2.481L6.41303 2.08908ZM4.93262 1.30274C3.82805 1.30274 2.93262 2.19817 2.93262 3.30274C2.93262 4.40731 3.82805 5.30274 4.93262 5.30274V1.30274ZM14.487 1.30274C14.7218 1.30274 14.9219 1.46781 14.9677 1.69635L11.0456 2.4818C11.3737 4.12018 12.8131 5.30274 14.487 5.30274V1.30274ZM14.9678 1.69715L14.7451 0.582487L10.8226 1.36633L11.0454 2.481L14.9678 1.69715ZM14.716 0.457797C14.3437 -0.934513 13.083 -1.89551 11.65 -1.89551V2.10449C11.2784 2.10449 10.949 1.85483 10.8517 1.49102L14.716 0.457797ZM11.65 -1.89551H7.7697V2.10449H11.65V-1.89551ZM7.7697 -1.89551C6.33665 -1.89551 5.07593 -0.934514 4.70366 0.457797L8.56791 1.49102C8.47063 1.85483 8.14125 2.10449 7.7697 2.10449V-1.89551ZM4.67456 0.582487L4.45181 1.69715L8.37426 2.481L8.59701 1.36633L4.67456 0.582487ZM4.45197 1.69635C4.49774 1.46781 4.69785 1.30274 4.93262 1.30274V5.30274C6.60655 5.30274 8.04599 4.12018 8.3741 2.4818L4.45197 1.69635Z" fill="#EA2D2D" mask="url(#path-3-inside-1_2601_6)" />
                </svg>

                }>
                حذف کن
            </Button>
        </div>
    )
}

export default TodoBox