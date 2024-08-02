import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlices"

const appStore = configureStore({
    reducer:{
        carts: cartReducer
    },
});

export default appStore;