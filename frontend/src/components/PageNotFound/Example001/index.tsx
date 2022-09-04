/* eslint-disable jsx-a11y/anchor-is-valid */
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

function PageNotFound001() {
  return (
    <section className="page404-example001">
      <div className='container'>
        <div className='row'>
          <div className='col-sm-12'>
            <div className='col-sm-10 col-sm-offset-1 text-center'>
              <div className='pageNotFoundBackground-example001'>
                <h1 className='textCenter'>404</h1>
              </div>

              <div className='contantBox404-example001'>
                <h3 className='h2'>Look like you're lost</h3>

                <p>the page you are looking for not available!</p>
                <a href="" className='link404-example001'>Go to Home</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <span>Credits: codewithrandom</span>

      <div>
        <Link to='/components'>
          <button>Back</button>
        </Link>

        <Link to='/'>
          <button>Home</button>
        </Link>
      </div>
    </section>
  );
};

export default PageNotFound001;