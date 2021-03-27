const OwnCharacterItem = ({ name, gender, image, id, theme }) => {
    let classes;
    theme === "light"
        ? (classes = "card text-dark bg-light col-12 m-3")
        : (classes = "card text-white bg-dark col-12 m-3");
    return (
        <div className={classes} style={{ width: "18rem" }}>
            <img className="card-img-top" src={image} alt={name}></img>
            <div className="card-body" key={id}>
                <div className="card-title">Name: {name}</div>
                <div className="card-title">Gender: {gender}</div>
            </div>
        </div>
    );
};

export default OwnCharacterItem;
