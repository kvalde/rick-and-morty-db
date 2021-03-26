const OwnCharacterItem = ({name, gender, image, id}) => {
    return (
        <>
            <li key={id}>
                    <div className="menu__title">Name: {name}</div>
                    <img className="menu__img" src={image} alt={name}></img>
                    <div className="menu__title">Gender: {gender}</div>
            </li>
        </>
    )
}

export default OwnCharacterItem