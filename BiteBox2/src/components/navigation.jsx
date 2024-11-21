import React from 'react';

const Nav = ({ setPage }) => {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand" href="#" onClick={() => setPage('home')}>
          BiteBox
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link active"
                aria-current="page"
                href="#"
                onClick={() => setPage('home')}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('features')}>
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={() => setPage('pricing')}>
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" aria-disabled="true" href="#">
                Disabled
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Dropdown link
              </a>
              <ul className="dropdown-menu">
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setPage('action')}>
                    Action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setPage('another-action')}>
                    Another action
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#" onClick={() => setPage('something-else')}>
                    Something else here
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
