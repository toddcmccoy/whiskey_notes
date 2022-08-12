import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';

function Nav() {
  const user = useSelector((store) => store.user);

  return (
    <div className="nav">
      <Link to="/dashboard">
        <h2 className="nav-title"> Whisk&#40;e&#41;y Notes</h2>
      </Link>
      <div>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>

        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/dashboard">
              Your Dashboard
            </Link>

            <Link className="navLink" to="/newwhiskeynote">
              New Whisk&#40;e&#41;y Note
            </Link>

            <Link className="navLink" to="/archive">
              Whisk&#40;e&#41;y Note Archive
            </Link>

            <Link className="navLink" to="/whiskeyeducation">
              Education
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        <Link className="navLink" to="/apphowtouse">
          How to use this App
        </Link>
      </div>
    </div>
  );
}

export default Nav;
