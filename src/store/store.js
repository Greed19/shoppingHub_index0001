import { configureStore } from "@reduxjs/toolkit";
import categoryReducer from "../slice/categorySlice";
import modalReducer from '../slice/modalSlice';
import productReducer from '../slice/productSlice';
import cartReducer from '../slice/cartSlice';

const store = configureStore({
    reducer:{
        category: categoryReducer,
        modal: modalReducer,
        product: productReducer,
        cart: cartReducer
    }
})


export default store;