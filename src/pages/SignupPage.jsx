import React, { useState, useContext } from "react";
import { useDispatch } from "react-redux";
import { userLogin } from "../redux/actions";
import { Container, TextField, Button, Typography } from "@mui/material";
import { ThemeContext } from "../App";

const SignupPage = (props) => {
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: props.defaultName,
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleBlur = (e) => {
    const { name, value } = e.target;

    const validationErrors = validateField(name, value);

    setErrors((prevErrors) => ({
      ...prevErrors,
      ...validationErrors,
    }));
  };

  const validateField = (name, value) => {
    const errors = {};
    if (name === "name") {
      if (value.trim() === "") errors.name = "Name is required";
      else errors.name = "";
    }
    if (name === "email") {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(value)) errors.email = "Invalid email address";
      else errors.email = "";
    }
    if (name === "password") {
      if (value.length < 6)
        errors.password = "Password must be at least 6 characters";
      else errors.password = "";
    }
    if (name === "confirmPassword") {
      if (value !== formData.password)
        errors.confirmPassword = "Passwords do not match";
      else errors.confirmPassword = "";
    }
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (Object.values(errors).every((err) => err === "")) {
      dispatch(
        userLogin({
          name: formData.name,
          email: formData.email,
          password: formData.password,
        })
      );
      alert("Form submitted Successfully");
      console.log("Form submitted with data:", formData);
    } else {
      alert("Form has errors");
      console.log("Form has errors");
    }
  };

  const { darkTheme } = useContext(ThemeContext);

  const textColor = {
    input: {
      color: darkTheme ? "white" : "black",
    },
    color: darkTheme ? "white" : "black",
  };

  return (
    <Container component="main" maxWidth="sm">
      <Typography variant="h5"> Register </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="Name"
          label="Name"
          name="name"
          autoFocus
          value={formData.name}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.name}
          helperText={errors.name}
          required
          sx={textColor}
        />

        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="email"
          label="Email Address"
          name="email"
          type="email"
          required
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.email}
          helperText={errors.email}
          sx={textColor}
          
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="password"
          label="password"
          name="password"
          type="password"
          required
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.password}
          helperText={errors.password}
          sx={textColor}
         
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="confirmPassword"
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          required
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={!!errors.confirmPassword}
          helperText={errors.confirmPassword}
          sx={textColor}
          
        />

        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          disabled={false}
        >
          Sign Up
        </Button>
      </form>
    </Container>
  );
};

export default SignupPage;
