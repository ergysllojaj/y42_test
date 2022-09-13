import React from "react";
import { Link } from "react-router-dom";
import classes from "./Navbar.module.scss";
import Logo from "../assets/logo.png";
import { CgClose } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { BsPersonCircle } from "react-icons/bs";
import { useState } from "react";

function Navbar({}) {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={classes.navbar}>
      <div className="container">
        <div className={classes.navbar__wrapper}>
          {/* mobile menu */}
          <div className={classes.navbar__mobile__memu}>
            {showMenu && (
              <CgClose
                className={classes.navbar__close_mobile}
                onClick={() => setShowMenu(!showMenu)}
              />
            )}

            {!showMenu && (
              <GiHamburgerMenu
                className={classes.navbar__hamburger_mobile}
                onClick={() => setShowMenu(!showMenu)}
              />
            )}

            {showMenu && (
              <div className={classes.navbar__menu_mobile}>
                <Link
                  to="/platform"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Platform
                </Link>
                <Link
                  to="/solution"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Solution
                </Link>
                <Link
                  to="/blog"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Blog
                </Link>
                <Link
                  to="/pricing"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Pricing
                </Link>
                <Link
                  to="/login"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Log In
                </Link>
                <Link
                  to="/signup"
                  onClick={() => setShowMenu(!showMenu)}
                  className={classes.navbar__link_mobile}
                >
                  Sign Up
                </Link>
              </div>
            )}
            <Link to="/">
              <img
                src={Logo}
                alt="logo"
                className={classes.navbar__logo_mobile}
              />
            </Link>
            <BsPersonCircle className={classes.navbar__auth_logo_mobile} />
          </div>
          {/*end mobile menu */}

          <ul className={classes.navbar__list}>
            <Link to="/">
              <img src={Logo} alt="logo" className={classes.navbar__logo} />{" "}
            </Link>
            <li className={classes.navbar__item}>
              <Link to="/platform" className={classes.navbar__link}>
                Platform
              </Link>
            </li>
            <li className={classes.navbar__item}>
              <Link to="/solution" className={classes.navbar__link}>
                Solution
              </Link>
            </li>
            <li className={classes.navbar__item}>
              <Link to="/blog" className={classes.navbar__link}>
                Blog
              </Link>
            </li>
            <li className={classes.navbar__item}>
              <Link to="/pricing" className={classes.navbar__link}>
                Pricing
              </Link>
            </li>
          </ul>
          <div className={classes.navbar__authentication}>
            <Link to="/login" className={classes.navbar__link}>
              Login
            </Link>
            <Link to="/signup" className="btn">
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
