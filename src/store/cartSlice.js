import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        itemsList: [],
        totalQuantity: 0,
        showCart: false
    },
    reducers: {
        addToCart(state, action){
            const newItem = action.payload;
     
            // to check if the item is already available
            const existingItem = state.itemsList.find(item => item.id === newItem.id);

            if(existingItem){
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            }else{
                state.itemsList.push({
                    id: newItem.id,
                    price: newItem.price,
                    quantity: 1,
                    totalPrice: newItem.price,
                    name: newItem.name
                })
                state.totalQuantity++;
            }   
        },
        removeFromCart(state, action){
            const id = action.payload;
            
            const existingItem = state.itemsList.find(item => item.id === id);

            if(existingItem.quantity === 1){
                state.itemsList = state.itemsList.filter(item => item.id !== id);
                state.totalQuantity = state.itemsList.length;
            }else{
                existingItem.quantity--;
                existingItem.totalPrice = existingItem.price * existingItem.quantity;
            }
        },
        setShowCart(state, ){
            state.showCart = !state.showCart;
        },
        total(state, ){
            state.itemsList.map(({totalPrice}) => console.log(totalPrice))
        }
    }
})

export const cartActions = cartSlice.actions;

export default cartSlice;