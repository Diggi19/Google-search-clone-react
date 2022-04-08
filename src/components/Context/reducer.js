export const initialState = {
    searchValue:null
}

 const reducer = (state,action)=>{
    console.log(action)
    switch (action.type) {
        case "SET__SEARCH":
            
            return{
                ...state,
                searchValue:action.term
            };
    
        default:
            return state;
    }
}

export default reducer