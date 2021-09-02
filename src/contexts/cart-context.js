import { createContext, useReducer } from "react";

//==============creating a cart context and exporting it====================
export const CartContext = createContext()

//=============Reducer & useReducer==========================================
const defaultCartState = { items: [], totalAmount: 0 }   //default state

const cartReducer = (state, action) => {                 //reducer function
    if (action.type === 'ADD') {
        const updatedItems = state.items.concat(action.item);
        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.amount)
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    if (action.type === 'REMOVE') {
        const updatedItems = state.items.filter((item) => { return action.id !== item.id })
        const updatedTotalAmount = updatedItems.reduce((cur, item) => { return cur + (item.price * item.amount) }, 0)
        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }
    return defaultCartState
}


const CartContextProvider = (props) => {
    //==========useReducer and dispatch functions==================================
    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState)

    const addItemToCartHandler = item => {
        dispatchCartAction({ type: 'ADD', item: item })
    };
    const removeItemFromCartHandler = id => {
        dispatchCartAction({ type: 'REMOVE', id: id })
    }

    //================Context to be provided/shared=========================
    const cartContextHelper = {
        items: cartState.items,
        totalAmount: cartState.totalAmount,
        addItem: addItemToCartHandler,
        removeItem: removeItemFromCartHandler
    }

    console.log(cartContextHelper)

    return (
        <CartContext.Provider value={cartContextHelper}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;