export const initialState = {
    basket: [],
    user:null,

};

const reducer=(state, action)=>{
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Logic adding item to basket
            return {
                ...state,
                basket:[...state.basket,action.item]
            };
        
        case 'REMOVE_FROM_BASKET':
            //logic removing item from basket
            return {state
                
            };
        

        default:
            return state;
    }
}
export default reducer;