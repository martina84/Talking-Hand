/*import React from "react";
import { Link } from "react-router-dom";
import image6 from "../../Assets/صورة واتساب بتاريخ 2024-05-13 في 00.12.03_17e11e3e(1)(1).png";

export default function Navbar() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" href="#">
          <img className="mx-2" src={image6} width={40} />
          SMART GLOVE
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link colors" to="/">
                Home{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link colos" to="howToLearn">
                How To Learn{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link primary" to="AboutUs">
                <span className="">About Us</span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link " to="ContactUs">
                Contact Us
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="profileData">
                ProfileData{" "}
              </Link>
            </li>
          </ul>

          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/Login">
                Login{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Register">
                Register{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to={"/Login"}>
                LogOut
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
*/ 


import React, { useContext } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import image6 from "../../Assets/صورة واتساب بتاريخ 2024-05-13 في 00.12.03_17e11e3e(1)(1).png";
import { UserContext } from '../../Context/UserContext';

export default function Navbar() {
  const { userToken, logout } = useContext(UserContext);
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/Login');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        <img className="mx-2" src={image6} width={40} alt="Smart Glove Logo" />
        Talking Hand
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        {userToken ? (
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/aboutUs">
                About Us
              </NavLink>
            </li>

            <li className="nav-item">
              <Link className="nav-link" to="profileData">
                ProfileData{" "}
              </Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link colos" to="howToLearn">
                How To Learn{" "}
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link colos" to="lifeTrack">
                Life Track{" "}
              </Link>
            </li>
          </ul>
        ) : (
          ""
        )}

        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
          {userToken ? (
            <>
              <li className="nav-item">
                <span
                  className="nav-link cursor-pointer"
                  onClick={handleLogout}
                >
                  Logout
                </span>
              </li>
            </>
          ) : (
            <>
              <li className="nav-item">
                <NavLink className="nav-link" to="/login">
                  Login
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/register">
                  Register
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </nav>
  );
}