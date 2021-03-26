const addOwnCharacter = (ownCharacter) => {
    return {
        type: 'ADD_OWN_CHARACTER',
        payload: ownCharacter
    }
}

export {addOwnCharacter}