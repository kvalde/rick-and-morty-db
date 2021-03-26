import CharacterItem from "../character-item/character-item";

const CharactersPage = ({ characters, prevPageHandler, nextPageHandler }) => {
    characters.splice(12, 8)
    return (
        <>
            <ul>
                {characters.map((character) => (
                    <CharacterItem
                        name={character.name}
                        status={character.status}
                        gender={character.gender}
                        image={character.image}
                        id={character.id}
                    />
                ))}
            </ul>
            <button onClick={prevPageHandler} >Prev</button>
            <button onClick={nextPageHandler} >Next</button>
        </>
    );
};

export default CharactersPage;
