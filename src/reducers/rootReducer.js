const initialState = {
    ownCharacters: [],
    recievedCharacters: [],
    allCharacters: [],
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "ADD_OWN_CHARACTER":
            return {
                ...state,
                ownCharacters: [...state.ownCharacters, action.payload],
            };
        case "GET_CHARACTERS":
            return {
                ...state,
                recievedCharacters: action.payload,
            };
        default:
            return state;
    }
}

export default reducer;
