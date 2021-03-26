const CharacterPage = ({characters, match}) => {
    const item = characters.find(el => el.id === +match.params.id)
    const {name, image, status, gender, species, episode} = item;
    return (
        <div className="d-flex justify-content-center">
            <div className = "card" style={{width: "18rem"}}>
                <img className="card-img-top" src={image} alt={name}></img>
                <div className="card-body">
                    <div className="card-title">Name: {name}</div>
                    <div className="card-title">Status: {status}</div>
                    <div className="card-title">Gender: {gender}</div>
                    <div className="card-title">Species: {species}</div>
                    <div className="card-text">Episodes: {episode.map(elem => {
                        return elem.match(/\d/g).join("")
                    }).join(", ")}</div>
                </div>
            </div>
        </div>
    )
}

export default CharacterPage;