export const userDetail = (content) => {
    return {
        type: "REGISTER",
        payload:{
            content:content
        }
    }
}

export const addToCart = () =>{
    return {
        type:"ADD TO CART"
    }
}

export const removeFromCart = () =>{
    return {
        type:"REMOVE FROM CART"
    }
}