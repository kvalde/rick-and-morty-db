const initialState = {
    ownCharacters: [],
    characters: []
}

function reducer(state = initialState, action) {
    switch(action.type) {
        case "ADD_OWN_CHARACTER":
            return {
                ...state,
                ownCharacters: [...state.ownCharacters, action.payload]
            };
        case "GET_ALL_CHARACTERS":
            return {
                ...state,
                characters: action.payload
            }
            default: return state;
    }
}

export default reducer;