'use client'

import Loading from "@/components/layout/loading"
import { getTodoList } from "@/redux/reducers/todoList/fetch"
import { IRootState } from "@/redux/store"
import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import TodoBox from "../todoBox"

const TodoList = ()=>{

    const dispatch = useDispatch()

  const {data} = useSelector((state:IRootState) => state.todoList)

  useEffect(()=>{
    dispatch(getTodoList())
  },[])

    return(
        <div className="w-full flex flex-col gap-[16px] md:gap-[32px]">
              {data.map(item => (
                <TodoBox
                    key={item.id}
                     {...item}
                />
              ))}
        </div>
    )
}

export default TodoList