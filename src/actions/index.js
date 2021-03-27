const addOwnCharacter = (ownCharacter) => {
    return {
        type: "ADD_OWN_CHARACTER",
        payload: ownCharacter,
    };
};

const getCharacters = (characters) => {
    return {
        type: "GET_CHARACTERS",
        payload: characters,
    };
};

export { addOwnCharacter, getCharacters };
