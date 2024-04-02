// @vendors
import { Link } from 'react-bootstrap-icons';

// @components
import { Header } from '../../components';

// @styles
import './error.css';

export const ErrorPage = () => {
  return (
    <>
      <Header />
      <main>
        <div id="notfound">
          <div className="notfound">
            <div className="notfound-404">
              <h1>
                4<span>0</span>4
              </h1>
            </div>
            <p>
              The page you are looking for might have been removed had its name
              changed or is temporarily unavailable.
            </p>
            <Link to="/">home page</Link>
          </div>
        </div>
      </main>
    </>
  );
};
