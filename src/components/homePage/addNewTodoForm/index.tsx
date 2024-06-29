'use client'

import Button from "@/components/common/button"
import Input from "@/components/common/input"
import { postNewTodo } from "@/redux/reducers/todoList/fetch"
import { useState } from "react"
import { useDispatch } from "react-redux"

const AddNewTodoForm = () => {

    const dispatch = useDispatch()

    const [newTodoInput, setNewTodoInput] = useState("")

    const [error , setError] = useState<null | string>(null)

    const handleAddNewTodo = ()=>{
        if(newTodoInput.length > 0){
            dispatch(postNewTodo(newTodoInput))
            setNewTodoInput("")
        }else{
            setError("این قسمت را خالی نگذارید")
        }
    }

    return (
        <div>
            <div className="w-full flex items-center gap-[16px] md:gap-[20px]">
            <Input
                className="w-full"
                value={newTodoInput}
                onChange={(e) => {
                    setNewTodoInput(e.target.value)
                    setError(null)
                }}
            />
            <Button 
                onClick={handleAddNewTodo}
                square 
                className="md:hidden"
            >
                <div>
                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M8.13477 1.75L8.13477 13.75" stroke="white" strokeWidth="3" strokeLinecap="round" />
                        <path d="M14 7.88477L2 7.88477" stroke="white" strokeWidth="3" strokeLinecap="round" />
                    </svg>
                </div>
            </Button>

            <Button 
                onClick={handleAddNewTodo}
                className="hidden md:flex whitespace-nowrap" 
                rightIcon={<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"
            >
                <path d="M7.63477 1.5L7.63477 13.5" stroke="white" strokeWidth="3" strokeLinecap="round" />
                <path d="M13.5 7.63477L1.5 7.63477" stroke="white" strokeWidth="3" strokeLinecap="round" />
            </svg>
            }>
                اضافه کن
            </Button>
        </div>
        {error ? <small>{error}</small> : null}
        </div>
    )
}

export default AddNewTodoForm