import {createSlice} from '@reduxjs/toolkit';

const fetchFromLocalStorage = () => {
    let cart = localStorage.getItem('cart');
    if(cart){
        return JSON.parse(localStorage.getItem('cart'))
    }else{
        return []
    }
}

const storeInLocalStorage = (data) => {
    localStorage.setItem('cart', JSON.stringify(data));
}

const initialState = {
    data: fetchFromLocalStorage(),
    totalItems: 0,
    totalAmount: 0,
    deliveryCharge: 1000,

}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers:{
        addToCart(state,{payload}){
            const findItem = state.data.find(item => item.id === payload.id)
            if(findItem){
                const tempCart = state.data.map(item => {
                    if(item.id === payload.id){
                        let newQty = item.quantity + payload.quantity;
                        let newTotalPrice = newQty * item.price;
                        return {
                            ...item, quantity: newQty, totalPrice: newTotalPrice
                        }
                    } else {
                        return item
                    }
                });

                state.data = tempCart;
                storeInLocalStorage(state.data);
            } else{
                state.data.push({payload})
                storeInLocalStorage(state.data)
            }
        },
        removeFromCart(state,{payload}){
            const tempCart = state.data.filter(item => item.id !== payload.id)
            state.data = tempCart;
            storeInLocalStorage(state.data)
        },
        clearCart(state){
            state.data = [];
            storeInLocalStorage(state.data)
        },
        getCartTotal(state){
            state.totalAmount = state.data.reduce((cartTotal, cartItem) => {
                return cartTotal += cartItem.totalPrice
            }, 0);
            state.totalItems = state.data.length;
        },
        toggleCartQty(state,{payload}){
            const tempCart = state.data.map(item => {
                if(item.payload.id === payload.id){
                    let tempQty = item.payload.quantity;
                    let tempTotalPrice = item.payload.totalPrice;
                    if(payload.type === "INC"){
                        console.log('wtf')
                        tempQty++
                        tempTotalPrice = tempQty * item.payload.price;
                    }
                    if(payload.type === "DEC"){
                        tempQty--
                        if(tempQty < 1) tempQty = 1;
                        tempTotalPrice = tempQty * item.payload.price;
                    }
                    return {                        
                        ...item,                        
                        payload:{
                            ...item.payload,
                            quantity:tempQty,
                            totalPrice:tempTotalPrice                        
                        }
                    }
                } else {
                    return item
                }
            });
            state.data = tempCart;        
            storeInLocalStorage(state.data)
        }


    }
})

export const {addToCart, removeFromCart, clearCart, getCartTotal, toggleCartQty } = cartSlice.actions;
export default cartSlice.reducer;