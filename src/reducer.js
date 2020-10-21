export const initialState={
    basket:[],

};
function reducer(state,action){
    switch(action.type){
    case 'ADD_TO_BASKET':
        //Logic adding item to basket
        break;
    case 'REMOVE_FROM_BASKET':
        //logic removing item from basket
        break;

    default:
        return state;
    
    
}
}
export default  reducer;




/*  

*/