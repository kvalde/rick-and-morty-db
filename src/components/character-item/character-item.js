import { Link } from "react-router-dom";

const CharacterItem = ({ name, status, gender, image, id }) => {
    return (
        <>
            <div className="card col-12 m-3" style={{ width: "18rem" }} key={id}>
                <Link to={`/${id}`}>
                    <img className="card-img-top" src={image} alt={name}></img>
                    <div className="card-body">
                        <div className="card-title">Name: {name}</div>
                        <div className="card-title">Status: {status}</div>
                        <div className="card-title">Gender: {gender}</div>
                    </div>
                </Link>
            </div>
        </>
    );
};

export default CharacterItem;
