import { Itodo } from "@/interface/todo";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { changeTodoDoneStatus, deleteTodo, getTodoList } from "./fetch";

const initialState:{
    data : Itodo[],
    loading : boolean,
    error : string | null
} = {
    data : [],
    loading : false,
    error : null
}

const todoListSlice = createSlice({
    name : "todoList",
    initialState,
    reducers : {},
    extraReducers : (builder) => {
        builder
            .addCase(getTodoList.pending,(state)=>{
                state.loading = true
                state.error = null
            })

            .addCase(getTodoList.fulfilled,(state,action: PayloadAction<Itodo[]>)=>{
                state.loading = false
                state.error = null
                state.data = action.payload
            })

            .addCase(getTodoList.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })

            .addCase(changeTodoDoneStatus.pending,(state)=>{
                state.loading = true
                state.error = null
            })

            .addCase(changeTodoDoneStatus.fulfilled,(state,action: PayloadAction<{id : number}>)=>{
                state.loading = false
                state.error = null
                
                let temp = state.data
                temp = temp.map(item => {
                    if(item.id === action.payload.id){
                        return {...item , is_done : !item.is_done}
                    }

                    return item
                })

                state.data = temp
            })

            .addCase(changeTodoDoneStatus.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })

            .addCase(deleteTodo.pending,(state)=>{
                state.loading = true
                state.error = null
            })

            .addCase(deleteTodo.fulfilled,(state,action: PayloadAction<{id : number}>)=>{
                state.loading = false
                state.error = null
                
                let temp = state.data
                temp = temp.filter(item => item.id !== action.payload.id)

                state.data = temp
            })

            .addCase(deleteTodo.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Something went wrong';
            })
    }
})

export default todoListSlice.reducer