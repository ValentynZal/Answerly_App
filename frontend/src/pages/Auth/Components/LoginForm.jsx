/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';
import { Field } from 'react-final-form';

const LoginForm = ({ handleSubmit, submitting }) => (
  <form onSubmit={handleSubmit}>
    <h2>Login</h2>
    <div>
      <Field name="username">
        {({ input, meta }) => (
          <div>
            <label htmlFor="username">Username</label>
            <input {...input} id="username" type="text" placeholder="Username" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
    <div>
      <Field name="password">
        {({ input, meta }) => (
          <div>
            <label htmlFor="password">Password</label>
            <input {...input} id="password" type="password" placeholder="Password" />
            {meta.error && meta.touched && <span>{meta.error}</span>}
          </div>
        )}
      </Field>
    </div>
    <button type="submit" disabled={submitting}>
      Submit
    </button>
  </form>
);

LoginForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired,
  pristine: PropTypes.bool.isRequired,
};

export default LoginForm;