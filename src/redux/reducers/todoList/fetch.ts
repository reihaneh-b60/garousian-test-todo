import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoList = createAsyncThunk('todoList/get', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`);
    const data = await response.json();
    return data.map((item:any) => ({...item , id : +item.id}));
});

export const changeTodoDoneStatus = createAsyncThunk('todo/changeDoneStatus', async (id:number) => {
    const todoId = await setTimeout(() => id, 2000);
    return {todoId}
})

export const deleteTodo = createAsyncThunk('todo/delete', async (id:number)=>{
    const todoId = await setTimeout(() => id, 2000);
    return {todoId}
})