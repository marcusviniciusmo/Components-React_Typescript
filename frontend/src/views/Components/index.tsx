import { Link } from "react-router-dom";

function Components() {
  return (
    <>
      <h1>Components</h1>

      <ul>
        <Link to='/components/loginFormAnimated'>
          <li>Login Form Animated</li>
        </Link>
        <Link to='/components/pageNotFound'>
          <li>Page Not Found</li>
        </Link>
        <Link to='/components/utilities'>
          <li>Utilities</li>
        </Link>
      </ul>

      <Link to='/'>
        <button>Home</button>
      </Link>
    </>
  );
};

export default Components;