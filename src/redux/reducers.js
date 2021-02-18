let initialState = {
    userEmail : '',
}
let cartState = {
    cartCount:0
}

export const res = (state = initialState,action) => {
    switch(action.type){
        case "REGISTER":{
            let content = action.payload.content
            return {
                ...state,
                userEmail : content
            }}
        
        default:
            return state
    }
}

export const cart = (state = cartState,action) =>{
    switch(action.type){
        case "ADD TO CART":{
            return {
                ...state,
                cartCount:state.cartCount+1
            }
        }
        case "REMOVE FROM CART":{
            return{
                ...state,
                cartCount:state.cartCount-1
            }
        }
        default:
            return state
    }
}