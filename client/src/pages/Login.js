// logic from 21-26

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../utils/mutations';
import botwField from '../assets/images/botwFieldBG.jpg';

import Auth from '../utils/auth';
// import 'w3-css/w3.css';

const Login = () => {
  const [formState, setFormState] = useState({ email: '', password: '' });
  const [login, { error, data }] = useMutation(
    LOGIN_USER
  );

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(formState);
    try {
      const { data } = await login({
        variables: { ...formState },
      });

      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }

    // clear form values
    setFormState({
      email: '',
      password: '',
    });
  };

  return (
    <div className='imageBG'>
      
    <div className="w3-padding-48 main">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">Login</div>
        <div className="w3-padding-48">
          <div className="w3-col 26 m6 w3-margin-bottom">
            <div className="w3-display-container w3-padding-large">
              <form class="w3-container w3-card-4">
                {data ? (
                  <p>
                    Success! You may now head{' '}
                    <Link to="/">back to the homepage.</Link>
                  </p>
                ) : (
                  <form onSubmit={handleFormSubmit}>
                    <input
                      className="w3-input"
                      placeholder="Your email"
                      name="email"
                      type="email"
                      width='90%'
                      value={formState.email}
                      onChange={handleChange}
                    />
                    <input
                      className="w3-input"
                      placeholder="******"
                      name="password"
                      type="password"
                      value={formState.password}
                      onChange={handleChange}
                    />
                    <button
                      className="w3-button w3-section w3-teal w3-ripple"
                      style={{ cursor: 'pointer' }}
                      type="submit"
                    >
                      Submit
                    </button>
                  </form>
                )}

                {error && (
                  <div className="w3-panel w3-red">
                    {error.message}
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Login;