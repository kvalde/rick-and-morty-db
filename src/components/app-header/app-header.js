import { Link } from "react-router-dom";
import Toggle from "../Toggler/toggler";

const AppHeader = ({ theme, toggleTheme }) => {
    let navClasses;
    let btnClasses;
    theme === "light"
        ? (btnClasses = "btn btn-outline-dark")
        : (btnClasses = "btn btn-outline-light");
    theme === "light"
        ? (navClasses =
              "navbar navbar-light bg-secondary justify-content-around")
        : (navClasses = "navbar navbar-dark bg-dark justify-content-around");
    return (
        <header className="header mb-3">
            <nav className={navClasses}>
                <Link to={"/"} className={btnClasses}>
                    Characters
                </Link>
                <Toggle
                    classes={btnClasses}
                    theme={theme}
                    toggleTheme={toggleTheme}
                />
                <Link to={"/newCharacter"} className={btnClasses}>
                    Add New Character
                </Link>
            </nav>
        </header>
    );
};

export default AppHeader;
