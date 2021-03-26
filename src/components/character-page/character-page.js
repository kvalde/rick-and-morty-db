const CharacterPage = (props) => {
    
    const item = props.characters.find(el => el.id === +props.match.params.id)
    const {name, image, status, gender, species, episode} = item;
    return (
        <div className = "item_page">
                <div className="menu__title">Name: {name}</div>
                <img className="menu__img" src={image} alt={name}></img>
                <div className="menu__title">Status: {status}</div>
                <div className="menu__title">Gender: {gender}</div>
                <div className="menu__title">Species: {species}</div>
                <div className="">Episodes: {episode}</div>
        </div>
    )
}

export default CharacterPage;