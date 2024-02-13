import React from "react";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long! ")
    .required("Required"),
  email: Yup.string()
    .email("Invalid email")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is Required")
    .min(8, "Password is too short - should be 8 chars minimum")
    .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.')
});

export default function RegisterYup() {
  return (
    <>
      <Formik
        initialValues={{
          name: "",
          email: "",
          password: "",
        }}
        validationSchema={RegisterSchema}
      >
        {({ errors, touched }) => (
          <Form>
            <Field name="name" />
            {errors.name && touched.name ? <div>{errors.name}</div> : null}
            <Field name="email" />
            {errors.email && touched.email ? <div>{errors.email}</div> : null}
            <Field name="password" />
            {errors.password && touched.password ? (
              <div>{errors.password}</div>
            ) : null}
            <button type="submit">Submit</button>
          </Form>
        )}
      </Formik>
    </>
  );
}
