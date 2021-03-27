import { Field, Form, Formik, useFormik } from "formik";

const StatusFilterForm = ({
    btnClasses,
    recievedCharacters,
    setCharacters,
}) => {
    const statusFormik = useFormik({
        initialValues: {
            status: "",
        },
        onSubmit: (values, actions) => {
            if (values.status === "Alive") {
                const aliveCharacters = recievedCharacters.filter(
                    (character) => character.status === "Alive"
                );
                setCharacters(() => aliveCharacters);
            }
            if (values.status === "Dead") {
                const deadCharacters = recievedCharacters.filter(
                    (character) => character.status === "Dead"
                );
                setCharacters(() => deadCharacters);
            }
            if (values.status === "Unknown") {
                const unknownStatusCharacters = recievedCharacters.filter(
                    (character) => character.status === "Unknown"
                );
                setCharacters(() => unknownStatusCharacters);
            }
            if (values.status === "All") setCharacters(() => recievedCharacters);
            actions.resetForm({});
        },
    });

    return (
        <div className="row">
            <Formik>
                <Form onSubmit={statusFormik.handleSubmit}>
                    <div id="my-radio-group">Status</div>
                    <div role="group" aria-labelledby="my-radio-group">
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        statusFormik.values.status === "Alive"
                                    }
                                    onChange={statusFormik.handleChange}
                                    type="radio"
                                    name="status"
                                    value="Alive"
                                />
                                Alive
                            </label>
                        </div>
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        statusFormik.values.status === "Dead"
                                    }
                                    onChange={statusFormik.handleChange}
                                    type="radio"
                                    name="status"
                                    value="Dead"
                                />
                                Dead
                            </label>
                        </div>
                        <div className="form-check col">
                            <label className="form-check-label">
                                <Field
                                    className="form-check-input"
                                    checked={
                                        statusFormik.values.status === "Unknown"
                                    }
                                    onChange={statusFormik.handleChange}
                                    type="radio"
                                    name="status"
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
                                        statusFormik.values.status === "All"
                                    }
                                    onChange={statusFormik.handleChange}
                                    type="radio"
                                    name="status"
                                    value="All"
                                />
                                All
                            </label>
                        </div>
                        <div>Picked: {statusFormik.values.status}</div>
                    </div>
                    <button className={btnClasses} type="submit">
                        Submit
                    </button>
                </Form>
            </Formik>
        </div>
    );
};

export default StatusFilterForm;
