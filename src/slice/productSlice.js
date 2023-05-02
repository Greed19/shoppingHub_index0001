import {createSlice} from '@reduxjs/toolkit';
import { BASE_URL } from '../utils/apiURL';
import { STATUS } from '../utils/status';
import axios from 'axios';

const initialState = {
    data: [],
    status: STATUS.IDLE
}

const productSlice = createSlice({
    name: 'product',
    initialState,
    reducers:{
        setProducts(state,{payload}){
            state.data = payload
        },
        setProductsStatus(state,{payload}){
            state.status = payload
        },
    }
});

export const {setProducts, setProductsStatus} = productSlice.actions;
export default productSlice.reducer


export const fetchProducts = () => {
    return async function fetchProductThunk(dispatch){
        dispatch(setProductsStatus(STATUS.LOADING))

        try {
            const {data} = await axios(`${BASE_URL}products`);
            dispatch(setProducts(data))
            dispatch(setProductsStatus(STATUS.IDLE))
        } catch (error) {
            dispatch(setProductsStatus(STATUS.ERROR))
        }
    }
}