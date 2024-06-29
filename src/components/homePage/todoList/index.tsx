'use client'

import Loading from "@/components/layout/loading"
import { getTodoList } from "@/redux/reducers/todoList/fetch"
import { AppDispatch, IRootState } from "@/redux/store"
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import TodoBox from "../todoBox"
import { Itodo } from "@/interface/todo"
import { firstSetTodoList } from "@/redux/reducers/todoList/slice"

interface Iprops{
  todos : Itodo[]
}

const applyFilters = {
  'any': (data:Itodo[]) => [...data],
  'done': (data:Itodo[]) => [...data.filter(item => item.is_done)],
  'not-done': (data:Itodo[]) => [...data.filter(item => !item.is_done)],
};

const TodoList = ({todos}:Iprops)=>{

    const dispatch:AppDispatch = useDispatch()

    const {data,filters} = useSelector((state:IRootState) => state.todoList)

    const [filteredData , setFilteredData] = useState<Itodo[]>(todos ?? [])

    useEffect(()=>{
      if(todos && todos.length>0){
        dispatch(firstSetTodoList({todoList : todos}))
      }
    },[todos])

    useEffect(()=>{
      const temp = applyFilters[filters] ? applyFilters[filters](data) : data;
      setFilteredData(temp);
    },[filters,data])

    return(
        <div className="w-full flex flex-col gap-[16px] md:gap-[32px]">
              {filteredData.map(item => (
                <TodoBox
                    key={item.id}
                     {...item}
                />
              ))}
        </div>
    )
}

export default TodoList