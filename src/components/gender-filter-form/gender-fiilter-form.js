import { Field, Form, Formik, useFormik } from "formik";

const GenderFilterForm = ({
    btnClasses,
    recievedCharacters,
    setCharacters,
}) => {
    const genderFormik = useFormik({
        initialValues: {
            gender: "",
        },
        onSubmit: (values, actions) => {
            if (values.gender === "All") setCharacters(recievedCharacters);
            if (values.gender === "Male") {
                const maleCharacters = recievedCharacters.filter(
                    (character) => character.gender === "Male"
                );
                setCharacters(() => maleCharacters);
            }
            if (values.gender === "Female") {
                const femaleCharacters = recievedCharacters.filter(
                    (character) => character.gender === "Female"
                );
                setCharacters(() => femaleCharacters);
            }
            if (values.gender === "Unknown") {
                const unknownGenderCharacters = recievedCharacters.filter(
                    (character) => character.gender === "Unknown"
                );
                setCharacters(() => unknownGenderCharacters);
            }
            if (values.gender === "Genderless") {
                const genderlessCharacters = recievedCharacters.filter(
                    (character) => character.gender === "Genderless"
                );
                setCharacters(() => genderlessCharacters);
            }
            actions.resetForm({});
        },
    });
    return (
        <div className="row">
            <div>Filters:</div>
            <Formik>
                <Form onSubmit={genderFormik.handleSubmit}>
                    <div id="my-radio-group">Gender</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        genderFormik.values.gender === "All"
                                    }
                                    onChange={genderFormik.handleChange}
                                    type="radio"
                                    name="gender"
                                    value="All"
                                />
                                All
                            </label>
                        </div>
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        genderFormik.values.gender === "Male"
                                    }
                                    onChange={genderFormik.handleChange}
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
                                        genderFormik.values.gender === "Female"
                                    }
                                    onChange={genderFormik.handleChange}
                                    type="radio"
                                    name="gender"
                                    value="Female"
                                />
                                Female
                            </label>
                        </div>
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        genderFormik.values.gender === "Unknown"
                                    }
                                    onChange={genderFormik.handleChange}
                                    type="radio"
                                    name="gender"
                                    value="Unknown"
                                />
                                Unknown
                            </label>
                        </div>
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        genderFormik.values.gender ===
                                        "Genderless"
                                    }
                                    onChange={genderFormik.handleChange}
                                    type="radio"
                                    name="gender"
                                    value="Genderless"
                                />
                                Genderless
                            </label>
                        </div>
                        <div>Picked: {genderFormik.values.gender}</div>
                    </div>
                    <button className={btnClasses} type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default GenderFilterForm;
