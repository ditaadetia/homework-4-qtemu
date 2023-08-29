// Molecule: NavLinks
import React from 'react';

function NavLinks() {
    return (
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" href="/">
              Create Meetup
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/">
              Explore
            </a>
          </li>
        </ul>
      </div>
    );
}
export default NavLinks;