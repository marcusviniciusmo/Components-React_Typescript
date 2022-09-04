import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <h1>HOME</h1>

      <Link to='/components'>
        <button>Components</button>
      </Link>
    </>
  );
};

export default Home;