import React from "react";
import { useFormik, Field, Formik, Form } from "formik";
import { addOwnCharacter } from "../../actions";
import { connect } from "react-redux";

const AddNewCharacterForm = ({ addOwnCharacter }) => {
    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            imageUrl: "",
        },
        onSubmit: (values, actions) => {
            addOwnCharacter(values);
            actions.resetForm({});
        },
    });
    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <div className="col">
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="name">
                            Name:
                        </label>
                        <input
                            className="form-control"
                            id="name"
                            name="name"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.name}
                        />
                    </div>
                    <div className="input-group mb-3">
                        <label className="input-group-text" htmlFor="name">
                            Image url:
                        </label>
                        <input
                            className="form-control"
                            id="imageUrl"
                            name="imageUrl"
                            type="text"
                            onChange={formik.handleChange}
                            value={formik.values.imageUrl}
                        />
                    </div>
                </div>

                <div id="my-radio-group">Gender</div>
                <div role="group" aria-labelledby="my-radio-group">
                    <div className="form-check">
                        <label className="form-check-label">
                            <Field
                                className="form-check-input"
                                checked={formik.values.gender === "male"}
                                onChange={formik.handleChange}
                                type="radio"
                                name="gender"
                                value="male"
                            />
                            Male
                        </label>
                    </div>
                    <div className="form-check">
                        <label className="form-check-label">
                            <Field
                                className="form-check-input"
                                checked={formik.values.gender === "female"}
                                onChange={formik.handleChange}
                                type="radio"
                                name="gender"
                                value="female"
                            />
                            Female
                        </label>
                    </div>
                    <div>Picked: {formik.values.gender}</div>
                </div>

                <button className="btn btn-outline-dark" type="submit">
                    Submit
                </button>
            </Form>
        </Formik>
    );
};

const mapDispatchToProps = {
    addOwnCharacter,
};

export default connect(null, mapDispatchToProps)(AddNewCharacterForm);
