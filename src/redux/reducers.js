let initialState = {
    userEmail : ''
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