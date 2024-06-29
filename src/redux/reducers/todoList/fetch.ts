import { createAsyncThunk } from "@reduxjs/toolkit";

export const getTodoList = createAsyncThunk('todoList/get', async () => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL}/todo`);
    const data = await response.json();
    return data.map((item:any) => ({...item , id : +item.id}));
});

export const postNewTodo = createAsyncThunk('todo/post', async (todoText : string) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {todoText}
});

export const changeTodoDoneStatus = createAsyncThunk('todo/changeDoneStatus', async (id:number) => {
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {id}
})

export const deleteTodo = createAsyncThunk('todo/delete', async (id:number)=>{
    await new Promise(resolve => setTimeout(resolve, 2000));
    return {id}
})