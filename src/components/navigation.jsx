import React, { useRef } from "react";

export const Navigation = (props) => {
  const navCollapseRef = useRef(null);

  const handleNavItemClick = () => {
    const navCollapse = navCollapseRef.current;

    if (navCollapse.classList.contains("in")) {
      navCollapse.classList.remove("in");
    }
    if (navCollapse.classList.contains("show")) {
      navCollapse.classList.remove("show");
    }
  };

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <a className="navbar-brand page-scroll" href="#page-top">
            Move3D
          </a>
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
          ref={navCollapseRef}
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a
                href="#about"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Projekty
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Materiały
              </a>
            </li>
            <li>
              <a
                href="#printers"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Drukarki
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Galeria
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="page-scroll"
                onClick={handleNavItemClick}
              >
                Kontakt
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
