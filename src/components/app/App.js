import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Switch } from "react-router";
import addNewCharacterPage from "../add-new-character-page/add-new-character-page";
import AppHeader from "../app-header/app-header";
import CharacterPage from "../character-page/character-page";
import CharactersPage from "../characters-page/characters-page";
import { getCharacters } from "../../actions";
import "./App.css";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components"
import { GlobalStyles } from '../GlodalStyles/GlobalStyles';
import { lightTheme, darkTheme } from '../Theme/Themes';

// <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>

// <>

// <GlobalStyles/>

// <button onClick={themeToggler}>Switch Theme</button>

// </>

// </ThemeProvider>

function App({ getCharacters }) {
    const [theme, setTheme] = useState('light');
    const themeToggler = () => {theme === 'light' ? setTheme('dark') : setTheme('light')}
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
        if(characters)getCharacters(characters);
    },);

    

    if (!characters) return <div>Loading...</div>;
    return (
        <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles/>
        <div className="App">
                <button onClick={themeToggler}>Switch Theme</button>
                <AppHeader />
                <Switch>
                    <Route
                        path="/"
                        exact
                        render={() => (
                            <CharactersPage
                                nextPageHandler={nextPageHandler}
                                prevPageHandler={prevPageHandler}
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
                            <CharacterPage characters={characters} match={match} />
                        )}
                    />
                </Switch>
        </div>
        </ThemeProvider>
    );
}

const mapDispatchToProps = {
  getCharacters
}

export default connect(null, mapDispatchToProps)(App);
