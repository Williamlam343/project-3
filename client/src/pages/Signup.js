import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';
import { Button, TextInput } from "react-materialize"

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        firstName: formState.firstName,
        lastName: formState.lastName,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container  min-h-screen my-1">
      <h5> Already have an account? </h5>
      <Link to="/login">← Go to Login</Link>

      <h5>Signup</h5>
      <form onSubmit={handleFormSubmit}>

        <div>
          <TextInput
            id="firstName"
            label="First Name"
          />
        </div>
        <div>
          <TextInput
            label="Last Name"


            id="lastName"
            onChange={handleChange}
          />
        </div>
        <div >
          <TextInput
            label="Email"
            name="email"
            type="email"
            id="email"
            onChange={handleChange}
          />
        </div>
        <div>
          <TextInput
            label="Password"
            password
            name="password"
            type="password"
            id="pwd"
            onChange={handleChange}
          />
        </div>
        <div className="flex-row justify-center">
          <Button className="red lighten-1" type="submit">Submit</Button>
        </div>
      </form>
    </div>
  );
}

export default Signup;
