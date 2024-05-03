// createSlice
// initialize initial state
// slice -> name, mention initial state, actions

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name:"cart",
    initialState,
    reducers:{
        addToCart(state, action){
            //console.log(action);        // 매개변수의 값을 로그로 출력해본다
            state.push(action.payload);
        },
        // 제거도 만든다
        removeFromCart(state, action){
            return state.filter((item)=>item.id !== action.payload);
        },
    },
});

export const {addToCart, removeFromCart} = cartSlice.actions;

export default cartSlice.reducer;
