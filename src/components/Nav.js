import React from "react";
import { FaAlignJustify } from "react-icons/fa";

const Nav = () => {
  const [state, setState] = React.useState(true);
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__container">
          <ul className="navbar__left">
            <div className="navbar__left-logo">
              <img src="/images/Logo_Bloguu.png" alt="logo" />
            </div>
          </ul>
          {state ? (
            <ul className="navbar__right">
              <li>
               
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Sobre mi</a>
              </li>
              <li>
                <a href="">Skillset</a>
              </li>
             {/*  <li>
                <a href="">Proyectos</a>
              </li> */}
              <li>
                <a href="">Contactos</a>
              </li>
              
              {/* 
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Skills</a>
              </li>
              <li>
                <a href="">Portfolio</a>
              </li>
              <li>
                <a href="">Blog</a>
              </li>
              <li>
                <a href="">Contactos</a>
              </li> */}

            </ul>
          ) : (
            ""
          )}
        </div>
      </div>
      <div className="toggle" onClick={() => setState(!state)}>
        <FaAlignJustify />
      </div>
    </nav>
  );
};

export default Nav;
