import {Link} from "react-router-dom"

const CharacterItem = ({name, status, gender, image, id}) => {
    return (
        <>
            <li key={id}>
                <Link to = {`/${id}`}>
                    <div className="menu__title">Name: {name}</div>
                    <img className="menu__img" src={image} alt={name}></img>
                    <div className="menu__title">Status: {status}</div>
                    <div className="menu__title">Gender: {gender}</div>
                </Link>
            </li>
        
        </>
    )
}

export default CharacterItem