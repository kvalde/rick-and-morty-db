import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import OwnCharacterItem from "../own-character-item/own-character-item";

const OwnCharactersPage = ({ ownCharacters }) => {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        setCharacters(ownCharacters);
    }, [ownCharacters]);

    if (!characters) return <div>There is no characters</div>;
    return (
        <>
            <ul>
                {characters.map((character) => (
                    <OwnCharacterItem
                        name={character.name}
                        gender={character.gender}
                        image={character.imageUrl}
                    />
                ))}
            </ul>
        </>
    );
};

const mapStateToProps = ({ ownCharacters }) => {
    return {
        ownCharacters,
    };
};

export default connect(mapStateToProps)(OwnCharactersPage);
