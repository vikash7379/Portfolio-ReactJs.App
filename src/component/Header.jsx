import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";

const navLinks = [
  {
    display: "Home",
    url: "#home",
  },
  {
    display: "About",
    url: "#about",
  },
  {
    display: "Service",
    url: "#services",
  },
  {
    display: "Portfolio",
    url: "#portfolio",
  },
  {
    display: "Contact",
    url: "#contact",
  },
];

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <header className="header">
        <Container className="container-nav">
          <div className="navigation d-flex  justify-content-between ">

            <div className="logo ">
              <img src="img/logo.png" className="logo-img" alt="logo" />
            </div>

            <div className={showMenu ? "nav-menu mobile-menu-link" : "nav-menu"}>
              <ul className="nav-list">
                {navLinks.map((item, index) => (
                  <li className="nav-item" key={index}>
                    <a href={item.url}>{item.display}</a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="navigation">
              <button className="btn mt-3" id="btn-nav">
                Let's Talk
              </button>
              <span
                className="hamburger-menu"
                onClick={() => setShowMenu(!showMenu)}
              >
                <MenuIcon />
              </span>
            </div>
          </div>
        </Container>
      </header>
    </>
  );
};

export default Header;
