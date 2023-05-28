const reducer = (state=0,action) => { //intial state, action
    switch (action.type){
        case "deposit":
            console.log("ction.payload",action.payload)
            return state + action.payload;
        case "withdraw":
            return state - action.payload;
        default:
            return state;

    }
}

export default reducer;