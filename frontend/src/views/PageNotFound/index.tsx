import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <>
      <h1>Page Not Found</h1>

      <h3>Examples:</h3>
      <ul>
        <Link to='/components/pageNotFound/001'>
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

export default PageNotFound;