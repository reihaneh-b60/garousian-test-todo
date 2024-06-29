import { Itodo } from "@/interface/todo";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { changeTodoDoneStatus, deleteTodo, getTodoList, postNewTodo } from "./fetch";

const initialState:{
    data : Itodo[],
    loading : boolean,
    error : string | null,
    filters : "any" | "done" | "not-done"
 } = {
    data : [],
    loading : false,
    error : null,
    filters : "any"
}

const todoListSlice = createSlice({
    name : "todoList",
    initialState,
    reducers : {
        firstSetTodoList : function(state , action : PayloadAction<{todoList : Itodo[]}>){
            state.loading = false
            state.error = null
            state.data = action.payload.todoList
        },
        changeFilter : function(state,action : PayloadAction<"any" | "done" | "not-done">){
            state.filters = action.payload
            state.loading = true
        },
        changeLoadingStatus : function(state){
            let temp = state.loading
            state.loading = !temp
        }
    },
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

            .addCase(postNewTodo.pending,(state)=>{
                state.loading = true
                state.error = null
            })

            .addCase(postNewTodo.fulfilled,(state,action: PayloadAction<{todoText : string}>)=>{
                state.loading = false
                state.error = null
                let temp = state.data

                temp.push({
                    id : Date.now(),
                    is_done : false,
                    text : action.payload.todoText
                })

                state.data = temp
            })

            .addCase(postNewTodo.rejected, (state, action) => {
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

export const { firstSetTodoList,changeFilter,changeLoadingStatus } = todoListSlice.actions
export default todoListSlice.reducer