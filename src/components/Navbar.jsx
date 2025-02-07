import { useNavigate } from 'react-router-dom';
import { useAuth } from '../auth/AuthContext';
import { FaHome, FaUser } from 'react-icons/fa';


export const Navbar = () => {
  const { user, userIsAuthenticated } = useAuth();
  const isAuthenticated = userIsAuthenticated();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate('/login');
  };
  return (
    <div className="nav_wrap">
      <nav>
        AM shop
        {isAuthenticated ? (
          <p>Welcome, {user?.data.preferred_username}!</p>
        ) : (
          <p>
            You are not logged in. For better experience please {' '}
            <button className="button" onClick={handleNavigate}>
              Logging in
            </button>
          </p>
        )}
        <ul className="nav__list">
          <li>
            <a href="/">
              <FaHome className="nav__icon" size={24} />
            </a>
          </li>
          <li>
            <a href="/login">
              <FaUser className="nav__icon" size={24} />
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};
