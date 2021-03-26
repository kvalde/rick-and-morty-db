import React from 'react';
import OwnCharacterItem from '../../own-character-item/own-character-item';

const OwnCharactersPage = ({characters}) => {
    return (
        <>
            <ul>
                {characters.map((character) => (
                    <OwnCharacterItem
                        name={character.name}
                        gender={character.gender}
                        image={character.image}
                        id={character.id}
                    />
                ))}
            </ul>
        </>
    );
};

export default OwnCharactersPage;