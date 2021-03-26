import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import addNewCharacterPage from "../add-new-character-page/add-new-character-page";
import AppHeader from "../app-header/app-header";
import CharacterPage from "../character-page/character-page";
import CharactersPage from "../characters-page/characters-page";
import "./App.css";

function App() {
    const [characters, setCharacters] = useState();
    const [page, setPage] = useState(1);

    const nextPageHandler = () => {
        if (page === 34) return null;
        setPage(page + 1);
    };

    const prevPageHandler = () => {
        if (page === 1) return null;
        setPage(page - 1);
    };

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios(
                `https://rickandmortyapi.com/api/character/?page=${page}`
            );
            setCharacters(res.data);
        };
        fetchData();
    });
    if (!characters) return <div>Loading...</div>;
    return (
        <div className="App">
            <AppHeader />
            <Switch>
                <Route
                    path="/"
                    exact
                    render={() => (
                        <CharactersPage
                            nextPageHandler={nextPageHandler}
                            prevPageHandler={prevPageHandler}
                            characters={characters.results}
                        />
                    )}
                />
                <Route
                    path="/newcharacter"
                    exact
                    component={addNewCharacterPage}
                />
                <Route
                    path="/:id"
                    render={({ match }) => (
                        <CharacterPage
                            characters={characters.results}
                            match={match}
                        />
                    )}
                />
            </Switch>
        </div>
    );
}

export default App;
