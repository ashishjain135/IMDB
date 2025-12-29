import { createSlice } from '@reduxjs/toolkit'

const todoSlice = createSlice({ 
    name:"todo",
    initialState: {
        value:" ",
        todolist: ["task1", "task2"]
    },
    reducers:{
        setValue(state, action){
            console.log("action", action);
            state.value = action.payload;
        },
        addtask(state){
            state.todolist.push(state.value);
            state.value = " ";
        }
    }
})


export default todoSlice.reducer;
export const {setValue, addtask} = todoSlice.actions;