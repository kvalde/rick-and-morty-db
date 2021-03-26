import React from "react";
import { useFormik, Field, Formik, Form } from "formik";

const AddNewCharacterForm = () => {
    const formik = useFormik({
        initialValues: {
            name: "",
            gender: "",
            imageUrl: "",
        },
        onSubmit: (values, actions) => {
            console.log(values)
            actions.resetForm({})
        },
    });
    return (
        <Formik>
            <Form onSubmit={formik.handleSubmit}>
                <label htmlFor="name">Name:</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                />

                <div id="my-radio-group">Gender</div>
                <div role="group" aria-labelledby="my-radio-group">
                    <label>
                        <Field checked={formik.values.gender === "male"} onChange={formik.handleChange} type="radio" name="gender" value="male" />
                        male
                    </label>
                    <label>
                        <Field checked={formik.values.gender === "female"} onChange={formik.handleChange} type="radio" name="gender" value="female" />
                        female
                    </label>
                    <div>Picked: {formik.values.gender}</div>
                </div>

                <label htmlFor="name">Image url:</label>
                <input
                    id="imageUrl"
                    name="imageUrl"
                    type="text"
                    onChange={formik.handleChange}
                    value={formik.values.imageUrl}
                />

                <button type="submit">Submit</button>
            </Form>
        </Formik>
    );
};

export default AddNewCharacterForm;
