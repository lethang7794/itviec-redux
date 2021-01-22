import React from 'react';

const LoginPage = () => {
  return (
    <div className='LoginPage'>
      <form className='form-signin text-center'>
        <img
          className='App-logo mb-4'
          src='/logo512.png'
          alt=''
          width='128'
          height='128'
        />
        <h1 className='h3 mb-3 font-weight-normal'>Please sign in</h1>
        <label for='inputEmail' className='sr-only'>
          Email address
        </label>
        <input
          type='email'
          id='inputEmail'
          className='form-control'
          placeholder='Email address'
          required=''
          autofocus=''
        />
        <label for='inputPassword' className='sr-only'>
          Password
        </label>
        <input
          type='password'
          id='inputPassword'
          className='form-control'
          placeholder='Password'
          required=''
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
