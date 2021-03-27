import React, { useState, useEffect } from "react";
import { Redirect } from "react-router";
const Navbar = () => {
  // let history = useHistory();
  const [auth, setAuth] = useState(false);
  const signOut = () => {
    localStorage.clear();
  };
  useEffect(() => {
    if (auth) {
      signOut();
      setAuth(false);
    }
  }, [auth]);
  return (
    <div>
      <div className="col-md-3 left_col">
        <div className="left_col scroll-view " style={{ height: "10rem" }}>
          <div className="clearfix"></div>

          <div className="profile clearfix">
            <img
              style={{
                width: "13rem",
                padding: "1rem 0 1rem 0.5rem",
              }}
              src="/assets/production/images/LogoTalabieh.png"
            />
            <div className="profile_pic">
              <img
                src="assets/production/images/img.jpg"
                alt="..."
                className="img-circle profile_img"
              />
            </div>
            <div className="profile_info">
              <span>Welcome,</span>
              <h2>John Doe</h2>
            </div>
          </div>

          <br />

          <div
            id="sidebar-menu"
            className="main_menu_side hidden-print main_menu"
          >
            <div className="menu_section">
              <h3>General</h3>
              <ul className="nav side-menu">
                <li>
                  <a href="/admin">
                    <i className="fa fa-home"></i> Home
                    <span className="fa fa-chevron-down"></span>
                  </a>
                </li>
                <li>
                  <a href="/products">
                    <i className="fa fa-edit"></i> Forms
                    <span className="fa fa-chevron-down"></span>
                  </a>
                </li>
                <li>
                  <a>
                    <i className="fa fa-table"></i> Tables
                    <span className="fa fa-chevron-down"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="sidebar-footer hidden-small">
            <a data-toggle="tooltip" data-placement="top" title="Settings">
              <span
                className="glyphicon glyphicon-cog"
                aria-hidden="true"
              ></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="FullScreen">
              <span
                className="glyphicon glyphicon-fullscreen"
                aria-hidden="true"
              ></span>
            </a>
            <a data-toggle="tooltip" data-placement="top" title="Lock">
              <span
                className="glyphicon glyphicon-eye-close"
                aria-hidden="true"
              ></span>
            </a>
            <button
              onClick={() => {
                localStorage.clear();
                window.location = "/login";
              }}
              data-toggle="tooltip"
              data-placement="top"
              title="Logout"
            ></button>
          </div>
        </div>
      </div>
      <div className="top_nav">
        <div className="nav_menu">
          <div className="nav toggle">
            <a id="menu_toggle">
              <i className="fa fa-bars" />
            </a>
          </div>
          <nav className="nav navbar-nav">
            <ul className="navbar-right">
              <li
                className="nav-item dropdown open"
                style={{ paddingLeft: 15 }}
              >
                <a
                  href="javascript:;"
                  className="user-profile dropdown-toggle"
                  aria-haspopup="true"
                  id="navbarDropdown"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <img src="/assets/production/images/img.jpg" alt="john" />
                  John Doe
                </a>
                <div
                  className="dropdown-menu dropdown-usermenu pull-right"
                  aria-labelledby="navbarDropdown"
                >
                  <a className="dropdown-item" href="javascript:;">
                    {" "}
                    Profile
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    <span className="badge bg-red pull-right">50%</span>
                    <span>Settings</span>
                  </a>
                  <a className="dropdown-item" href="javascript:;">
                    Help
                  </a>
                  <button
                    onClick={() => {
                      localStorage.clear();
                      window.location = "/login";
                    }}
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Logout"
                  >
                    Log out
                  </button>
                </div>
              </li>
              <li role="presentation" className="nav-item dropdown open">
                <a
                  href="javascript:;"
                  className="dropdown-toggle info-number"
                  id="navbarDropdown1"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="fa fa-envelope-o" />
                  <span className="badge bg-green">6</span>
                </a>
                <ul
                  className="dropdown-menu list-unstyled msg_list"
                  role="menu"
                  aria-labelledby="navbarDropdown1"
                >
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img
                          src="/assets/production/images/img.jpg"
                          alt="Profile Image"
                        />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="dropdown-item">
                      <span className="image">
                        <img src="images/img.jpg" alt="Profile Image" />
                      </span>
                      <span>
                        <span>John Smith</span>
                        <span className="time">3 mins ago</span>
                      </span>
                      <span className="message">
                        Film festivals used to be do-or-die moments for movie
                        makers. They were where...
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <div className="text-center">
                      <a className="dropdown-item">
                        <strong>See All Alerts</strong>
                        <i className="fa fa-angle-right" />
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
