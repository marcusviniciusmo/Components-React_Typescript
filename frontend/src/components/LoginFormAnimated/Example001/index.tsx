/* eslint-disable jsx-a11y/anchor-is-valid */
import './styles.css';

function LoginFormAnimated001() {
  return (
    <div>
      <div id='loginFormAnimated001Container'>
        <form
          method='#'
          id='loginForm'
          className='loginForm'
          autoComplete='off'
          role='main'
        >
          <h1 className='allyHidden'>Login Form</h1>

          <div>
            <label className='labelEmail'>
              <input
                type='email'
                className='text'
                name='email'
                placeholder='Email'
                tabIndex={1}
                required
              />

              <span className='required' >Email</span>
            </label>
          </div>

          <input
            type='checkbox'
            name='showPassword'
            className='showPassword allyHidden'
            id='showPassword'
            tabIndex={3}
          />
          <label
            className='labelShowPassword'
            htmlFor='showPassword'
          >
            <span>Show Password</span>
          </label>

          <div>
            <label className='labelPassword'>
              <input
                type='text'
                className='text'
                name='password'
                placeholder='Password'
                tabIndex={2}
                required
              />

              <span className='required' >Password</span>
            </label>
          </div>

          <input type='submit' value='Log In' />
          <div className='email'>
            <a href='#'>Forgot Password?</a>
          </div>

          <figure aria-hidden='true'>
            <div className='personBody'></div>
            <div className='neck skin'></div>
            <div className='head skin'>
              <div className='eyes'></div>
              <div className='mouth'></div>
            </div>
            <div className='hair'></div>
            <div className='ears'></div>
            <div className='shirt1'></div>
            <div className='shirt2'></div>
          </figure>
        </form>

      </div>
      <span>Credits: codewithrandom</span>
    </div>
  );
};

export default LoginFormAnimated001;