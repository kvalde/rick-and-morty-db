import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import AddNewCharacterPage from "../add-new-character-page/add-new-character-page";
import AppHeader from "../app-header/app-header";
import CharacterPage from "../character-page/character-page";
import CharactersPage from "../characters-page/characters-page";
import { getCharacters } from "../../actions";
import "./App.css";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { GlobalStyles } from "../GlodalStyles/GlobalStyles";
import { lightTheme, darkTheme } from "../Theme/Themes";
import { useDarkMode } from "../useDarkMode/use-dark-mode";

// <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

// <>

// <GlobalStyles/>

// <button onClick={themeToggler}>Switch Theme</button>

// </>

// </ThemeProvider>

function App({ getCharacters }) {
    const [theme, themeToggler, mountedComponent] = useDarkMode();
    const themeMode = theme === "light" ? lightTheme : darkTheme;
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
            setCharacters(res.data.results);
        };
        fetchData();
        if (characters) getCharacters(characters);
    });

    if (!mountedComponent) return <div />;
    if (!characters) return <div>Loading...</div>;
    return (
        <ThemeProvider theme={themeMode}>
            <GlobalStyles />
            <div className="App">
                <AppHeader theme={theme} toggleTheme={themeToggler} />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <CharactersPage
                                theme={theme}
                                nextPageHandler={nextPageHandler}
                                prevPageHandler={prevPageHandler}
                            />
                        )}
                    />
                    <Route
                        path="/newcharacter"
                        exact
                        render={() => <AddNewCharacterPage theme={theme} />}
                    />
                    <Route
                        path="/:id"
                        render={({ match }) => (
                            <CharacterPage
                                theme={theme}
                                characters={characters}
                                match={match}
                            />
                        )}
                    />
                </Switch>
            </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = {
    getCharacters,
};

export default connect(null, mapDispatchToProps)(App);
