import { Link } from "react-router-dom";

const AppHeader = () => {
    return (
        <header className="header mb-3">
            <nav class="navbar navbar-light justify-content-around" style={{backgroundColor: "#e3f2fd"}}>
                <Link to={"/"} className="header__link">
                    Characters
                </Link>
                <Link>

                </Link>
                <Link to={"/newCharacter"} className="header__link">
                    Add New Character
                </Link>
            </nav>
        </header>
    )
}

export default AppHeader;