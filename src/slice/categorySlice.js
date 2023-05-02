import {createSlice} from '@reduxjs/toolkit';
import {BASE_URL} from '../utils/apiURL';
import { STATUS } from '../utils/status';
import axios from 'axios'


const initialState = {
    data: [],
    status: STATUS.IDLE,
    categoryProductAll: [],
    categoryProductAllStatus: STATUS.IDLE,
    categoryProductSingle: [],
    categoryProductSingleStatus: STATUS.IDLE
}

const categorySlice = createSlice({
    name: 'categorySlice',
    initialState,
    reducers:{
        setCategories(state,{payload}){
            state.data = payload
        },
        setStatus(state,{payload}){
            state.status = payload
        },
        setCategoryProductAll(state,{payload}){
            state.categoryProductAll.push(payload)
        },
        setCategoryProductAllStatus(state,{payload}){
            state.categoryProductAllStatus = payload
        },
        setCategoryProductSingle(state,{payload}){
            state.categoryProductSingle = payload
        },
        setCategoryProductSingleStatus(state,{payload}){
            state.categoryProductSingleStatus = payload
        }
    }
})

export const {setCategories,setStatus,setCategoryProductAll,setCategoryProductAllStatus,setCategoryProductSingle,setCategoryProductSingleStatus} = categorySlice.actions;

export default categorySlice.reducer;



export const fetchCategories = () => {
    return async function fetchCategoryThunk(dispatch){
        dispatch(setStatus(STATUS.LOADING));
        try {
            const {data} = await axios(`${BASE_URL}categories`);
            dispatch(setCategories(data.slice(0,5)));
            dispatch(setStatus(STATUS.IDLE));
        } catch (error) {
            dispatch(setStatus(STATUS.ERROR));
        }
    }
}

export const fetchProductsByCategory = (categoryID,dataType) => {
    return async function fetchProductsByCategoryThunk(dispatch){

        if(dataType === 'all') dispatch(setCategoryProductAllStatus(STATUS.LOADING));
        if(dataType === 'single') dispatch(setCategoryProductSingleStatus(STATUS.LOADING));

        try{
            // const data = await axios(`${BASE_URL}categories/${categoryID}/products`)
            const {data} = await axios(`${BASE_URL}categories/${categoryID}/products`)
            if(dataType === 'all'){
                dispatch(setCategoryProductAll(data.slice(0,10)));
                dispatch(setCategoryProductAllStatus(STATUS.IDLE))
            }

            if(dataType === 'single'){
                dispatch(setCategoryProductSingle(data.slice(0,20)));
                dispatch(setCategoryProductSingleStatus(STATUS.IDLE))
                
            }

        }catch(error){
            if(dataType === 'all') dispatch(setCategoryProductAllStatus(STATUS.ERROR));
            if(dataType === 'single') dispatch(setCategoryProductSingleStatus(STATUS.ERROR));
        }
    }
}

// export const fetchCategories = async() => {
//     try{
//         const {categories} = await axios(`${BASE_URL}categories`);
//         return categories
//     }catch(error){

//     }
// }