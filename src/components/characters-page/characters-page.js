import CharacterItem from "../character-item/character-item";
import { useState } from "react";
import GenderFilterForm from "../gender-filter-form/gender-fiilter-form";
import StatusFilterForm from "../status-filter-form/status-filter-form";

const CharactersPage = ({
    recievedCharacters,
    prevPageHandler,
    nextPageHandler,
    theme,
}) => {
    recievedCharacters.splice(12, 8);
    const [characters, setCharacters] = useState(recievedCharacters);
    let btnClasses;
    theme === "light"
        ? (btnClasses = "btn btn-outline-dark m-2")
        : (btnClasses = "btn btn-outline-light m-2");

    return (
        <>
            <div className="container">
                <GenderFilterForm
                    recievedCharacters={recievedCharacters}
                    btnClasses={btnClasses}
                    setCharacters={setCharacters}
                />
                <StatusFilterForm
                    recievedCharacters={recievedCharacters}
                    btnClasses={btnClasses}
                    setCharacters={setCharacters}
                />
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {characters.map((character) => (
                        <CharacterItem
                            theme={theme}
                            name={character.name}
                            status={character.status}
                            gender={character.gender}
                            image={character.image}
                            id={character.id}
                        />
                    ))}
                </div>
            </div>
            <button className={btnClasses} onClick={prevPageHandler}>
                Prev
            </button>
            <button className={btnClasses} onClick={nextPageHandler}>
                Next
            </button>
        </>
    );
};

export default CharactersPage;
