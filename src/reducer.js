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
            let newBasket=[...state.basket];
            const index=state.basket.findIndex((basketItem)=>basketItem.id===action.id);
            if(index>=0){
                newBasket.splice(index,1);
                
                //item exixts in basket remove it
            }
            else{
                //can't remove prodcut
            }

            return {...state,basket:newBasket};
                
        
        

        default:
            return state;
    }
}
export default reducer;