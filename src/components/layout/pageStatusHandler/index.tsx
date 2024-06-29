'use client'

import { IRootState } from "@/redux/store"
import { useSelector } from "react-redux"
import Loading from "../loading"
import Error from "../error"

const PageStatusHandler = ()=>{

    const {loading,error} = useSelector((state:IRootState) => state.todoList)

    if(error){
        return <Error hasError={!!error}/>
    }

    return(
        <>
            <Loading isLoading={loading}/>
        </>
    )
}

export default PageStatusHandler