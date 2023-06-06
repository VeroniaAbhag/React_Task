/* eslint-disable no-unused-expressions */
/* eslint-disable no-sequences */
/* eslint-disable no-restricted-globals */
import React, { useState } from "react";
import { Formik } from "formik";
// import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./form.css";

function Basic() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return(
    <Formik
      initialValues={{
        name: "",
        email: "",
        username: "",
        password: "",
        confirmpassword: "",
      }}
      
      validate={(values) => {
        const errors = {};
        if (!values.name) {
          errors.name = "Required";
        } else if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        } else if (!values.username) {
          errors.username = "Required";
        } else if (/!^\S+$/i.test(values.username)) {
          errors.username = "Invalid user name ";
        } else if (!values.password) {
          errors.password = "Required";
        } else if (
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i.test(
            values.password
          )
        ) {
          errors.password = "Invalid password ";
        } else if (!values.confirmpassword) {
          errors.confirmpassword = "Required";
        } else if (values.confirmpassword !== values.password) {
          errors.confirmpassword = "Not match password";
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
      
    >
      
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name : </label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            required
          />
          {errors.name && touched.name && errors.name}

          <br></br>
          <label htmlFor="email">Email : </label>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            required
          />
          {errors.email && touched.email && errors.email}
          <br></br>
          <label htmlFor="username">username : </label>
          <input
            type="text"
            name="username"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            required
          />
          {errors.username && touched.username && errors.username}
          <br></br>
          <label htmlFor="password">password : </label>
          <input
            type={showPassword ? 'text' : 'password'}
            name="password"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            required
          />
           <button type="button" onClick={togglePasswordVisibility}>
          {showPassword ? 'hide' : 'show'}
        </button>
          {errors.password && touched.password && errors.password}

          <br></br>
          <label htmlFor="confirmpassword">confirm password : </label>
          <input
            name="confirmpassword"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.confirmpassword}
            required
            type="password"
          />

          {errors.confirmpassword &&
            touched.confirmpassword &&
            errors.confirmpassword}

          <br></br>

          {errors.password && touched.password && errors.password}
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      )}
    </Formik>
  
          )};

export default Basic;

