const OwnCharacterItem = ({name, gender, image, id}) => {
    return (
        <div className="card col-12 m-3" style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt={name}></img>
            <div className="card-body" key={id}>
                <div className="card-title">Name: {name}</div>
                <div className="card-title">Gender: {gender}</div>
            </div>
        </div>
    )
}

export default OwnCharacterItem