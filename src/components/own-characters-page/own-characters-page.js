import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import OwnCharacterItem from "../own-character-item/own-character-item";

const OwnCharactersPage = ({ ownCharacters, theme }) => {
    const [characters, setCharacters] = useState();

    useEffect(() => {
        setCharacters(ownCharacters);
    }, [ownCharacters]);

    if (!characters) return <div>There is no characters</div>;
    return (
        <div className="container">
            <div className="row justify-content-center">
                {characters.map((character) => (
                    <OwnCharacterItem
                        theme={theme}
                        name={character.name}
                        gender={character.gender}
                        image={character.imageUrl}
                    />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = ({ ownCharacters }) => {
    return {
        ownCharacters,
    };
};

export default connect(mapStateToProps)(OwnCharactersPage);
