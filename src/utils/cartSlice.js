import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:'cart',
    initialState:{
        item:[]
    },
    reducers:{
        additem: (state,action) =>{
            state.item.push(action.payload);
        },
        removeitem: (state,action) =>{
            state.item.pop(action.payload);
        },
        clearitem: (state) =>{
            return {item:[]}
        }
    }
});

export const {additem,removeitem,clearitem} = cartSlice.actions;
export default cartSlice.reducer;