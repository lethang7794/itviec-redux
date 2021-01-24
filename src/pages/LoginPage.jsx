import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authActions } from '../redux/actions/auth.actions';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    const user = {
      email,
      password,
    };

    dispatch(authActions.login(user));
  };

  return (
    <div className='LoginPage'>
      <form
        onSubmit={(e) => handleLoginSubmit(e)}
        className='form-signin text-center'
      >
        <img
          className='App-logo mb-4'
          src='/logo512.png'
          alt=''
          width='128'
          height='128'
        />
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label htmlFor='inputEmail' className='sr-only'>
          Email address
        </label>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type='email'
          id='inputEmail'
          className='form-control'
          placeholder='Email address'
          required=''
          autoFocus=''
          autoComplete='username'
        />
        <label htmlFor='inputPassword' className='sr-only'>
          Password
        </label>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type='password'
          id='inputPassword'
          className='form-control'
          placeholder='Password'
          required=''
          autoComplete='current-password'
        />
        <div className='checkbox mb-3'>
          <label>
            <input type='checkbox' value='remember-me' /> Remember me
          </label>
        </div>
        <button className='btn btn-lg btn-primary btn-block' type='submit'>
          Sign in
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
