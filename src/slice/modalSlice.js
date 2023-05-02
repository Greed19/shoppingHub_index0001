import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    data: [],
    isModalVisible: false
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers:{
        setModalData(state,{payload}){
            state.data = payload
        },
        setIsModalVisible(state,{payload}){
            state.isModalVisible = payload
        }
    }    
})

export const {setModalData,setIsModalVisible} = modalSlice.actions
export default modalSlice.reducer