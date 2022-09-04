import { Link } from "react-router-dom";

function LoginFormAnimated() {
  return (
    <>
      <h1>Login Form Animated</h1>

      <h3>Examples:</h3>
      <ul>
        <Link to='/components/loginFormAnimated/001'>
          <li>Example 001</li>
        </Link>
      </ul>

      <div>
        <Link to='/components'>
          <button>Back</button>
        </Link>

        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </>
  );
};

export default LoginFormAnimated;