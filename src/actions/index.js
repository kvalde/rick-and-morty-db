const addOwnCharacter = (ownCharacter) => {
    return {
        type: 'ADD_OWN_CHARACTER',
        payload: ownCharacter
    }
}

const getCharacters = (characters) => {
    return {
        type: 'GET_CHARACTERS',
        payload: characters
    }
}

// const getAllCharacters = (allCharacters) => {
//     return {
//         type: 'GET_ALL_CHARACTERS',
//         payload: allCharacters
//     }
// }

export {addOwnCharacter, getCharacters}