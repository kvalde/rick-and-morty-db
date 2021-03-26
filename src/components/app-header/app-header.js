import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="header">
            <Link to={"/"} className="header__link">
                Characters
            </Link>
            <Link to={"/newCharacter"} className="header__link">
                Add New Character
            </Link>
        </header>
    )
}

export default AppHeader;