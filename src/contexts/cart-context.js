import { createContext, useReducer } from "react";

//==============creating a cart context and exporting it====================
export const CartContext = createContext()

//=============Reducer & useReducer==========================================
const defaultCartState = { items: [], totalAmount: 0 }   //default state

const cartReducer = (state, action) => {                 //reducer function
    if (action.type === 'ADD') {
        const updatedTotalAmount = state.totalAmount + action.item.price

        const alreadyExistsIndex = state.items.findIndex(item => item.id === action.item.id)
        const existingItem = state.items[alreadyExistsIndex]

        let updatedItem;
        let updatedItems;

        if (existingItem) {
            updatedItem = { ...existingItem, amount: existingItem.amount + 1 };
            updatedItems = [...state.items];
            updatedItems[alreadyExistsIndex] = updatedItem;
        } else {
            updatedItems = state.items.concat(action.item);
        }

        return { items: updatedItems, totalAmount: updatedTotalAmount }
    }

    if (action.type === 'REMOVE') {
        let updatedItems;
        const existingItemIndex = state.items.findIndex(item => item.id === action.id)
        const existingItem = { ...state.items[existingItemIndex] }

        const updatedTotalAmount = state.totalAmount - existingItem.price
        if (existingItem.amount === 1) {
            const updatedItems = state.items.filter((item) => { return action.id !== item.id })
        } else {
            const updatedItem = { ...existingItem, amount: existingItem.amount - 1 }
            updatedItems = [...state.items]
            updatedItems[existingItemIndex] = updatedItem
        }

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

    // console.log(cartContextHelper)

    return (
        <CartContext.Provider value={cartContextHelper}>
            {props.children}
        </CartContext.Provider>
    );
}
export default CartContextProvider;