import { createSlice } from "@reduxjs/toolkit";

const cartSlices = createSlice({
    name:"cart",
    initialState:{
        items: []
    },

    reducers:{
        addItem: (state, action)=>{
            // mutating the state here
            console.log("action.payload", action.payload);
            state.items.push(action.payload);
        },

        removeItem: () =>{
            state.items.pop();
        },

        clearItem: () =>{
            state.items.length = 0;
        }
    }

});

export const {addItem, removeItem, clearItem} = cartSlices.actions;

export default cartSlices.reducer;