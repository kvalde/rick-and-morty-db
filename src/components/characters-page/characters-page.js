import { connect } from "react-redux";
import CharacterItem from "../character-item/character-item";
import { Field, Form, Formik, useFormik } from "formik";
import { getCharacters } from "../../actions";

const CharactersPage = ({
    characters,
    prevPageHandler,
    nextPageHandler,
    getCharacters,
    theme,
}) => {
    characters.splice(12, 8);
    let btnClasses;
    theme === "light"
        ? (btnClasses = "btn btn-outline-dark m-2")
        : (btnClasses = "btn btn-outline-light m-2");
    const formik = useFormik({
        initialValues: {
            gender: "",
        },
        onSubmit: (values, actions) => {
            if (values.gender === "") getCharacters(characters);
            if (values.gender === "Male") {
                const maleCharacters = characters.filter(
                    (character) => character.gender === "Male"
                );
                getCharacters(maleCharacters);
            }
            if (values.gender === "Female") {
                const femaleCharacters = characters.filter(
                    (character) => character.gender === "Female"
                );
                getCharacters(femaleCharacters);
            }
            actions.resetForm({});
        },
    });
    return (
        <>
            <div className="container">
                <div className="row">
                    <div>Filters:</div>
                    <Formik>
                        <Form onSubmit={formik.handleSubmit}>
                            <div id="my-radio-group">Gender</div>
                            <div role="group" aria-labelledby="my-radio-group">
                                <div className="form-check col">
                                    <label className="form-check-label">
                                        <Field
                                            className="form-check-input"
                                            checked={
                                                formik.values.gender === "Male"
                                            }
                                            onChange={formik.handleChange}
                                            type="radio"
                                            name="gender"
                                            value="Male"
                                        />
                                        Male
                                    </label>
                                </div>
                                <div className="form-check col">
                                    <label className="form-check-label">
                                        <Field
                                            className="form-check-input"
                                            checked={
                                                formik.values.gender ===
                                                "Female"
                                            }
                                            onChange={formik.handleChange}
                                            type="radio"
                                            name="gender"
                                            value="Female"
                                        />
                                        Female
                                    </label>
                                </div>
                                <div>Picked: {formik.values.gender}</div>
                            </div>
                            <button className={btnClasses} type="submit">
                                Submit
                            </button>
                        </Form>
                    </Formik>
                </div>
            </div>
            <div className="container">
                <div className="row justify-content-center">
                    {characters.map((character) => (
                        <CharacterItem
                            theme={theme}
                            name={character.name}
                            status={character.status}
                            gender={character.gender}
                            image={character.image}
                            id={character.id}
                        />
                    ))}
                </div>
            </div>
            <button className={btnClasses} onClick={prevPageHandler}>
                Prev
            </button>
            <button className={btnClasses} onClick={nextPageHandler}>
                Next
            </button>
        </>
    );
};

const mapStateToProps = ({ characters }) => {
    return {
        characters,
    };
};

const mapDispatchToProps = {
    getCharacters,
};

export default connect(mapStateToProps, mapDispatchToProps)(CharactersPage);
