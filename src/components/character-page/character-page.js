const CharacterPage = ({ characters, match, theme }) => {
    const item = characters.find((el) => el.id === +match.params.id);
    const { name, image, status, gender, species, episode } = item;
    let classes;
    theme === "light"
        ? (classes = "card text-dark bg-light col-12 m-3")
        : (classes = "card text-white bg-dark col-12 m-3");
    return (
        <div className="d-flex justify-content-center">
            <div className={classes} style={{ width: "18rem" }}>
                <img className="card-img-top" src={image} alt={name}></img>
                <div className="card-body">
                    <div className="card-title">Name: {name}</div>
                    <div className="card-title">Status: {status}</div>
                    <div className="card-title">Gender: {gender}</div>
                    <div className="card-title">Species: {species}</div>
                    <div className="card-text">
                        Episodes:{" "}
                        {episode
                            .map((elem) => {
                                return elem.match(/\d/g).join("");
                            })
                            .join(", ")}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CharacterPage;
