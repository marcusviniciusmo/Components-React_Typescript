import { Link } from "react-router-dom";

function Utilities() {
  return (
    <>
      <h1>Utilities</h1>

      <h3>Examples:</h3>
      <ul>
        <Link to='/components/utilities/eyeIcon'>
          <li>Example 001 - Eye Icon</li>
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

export default Utilities;