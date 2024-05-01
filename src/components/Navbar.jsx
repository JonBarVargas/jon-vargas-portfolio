import React from "react";

export default function Navbar() {
  return (
    <>
      <div className="navContainer">
        <header>
          <h2>JV</h2>
          <nav className="">
            <a
              className="darkText"
              href="mailto: jonathanbvargas@hotmail.com"
              target="_blank"
            >
              <i class="fa-solid fa-envelope"></i>
            </a>
            <a
              className="darkText"
              href="https://github.com/JonBarVargas"
              target="_blank"
            >
              <i className="fa-brands fa-github"></i>
            </a>

            <a
              className="darkText"
              href="https://www.linkedin.com/in/jonathan-b-vargas/"
              target="_blank"
            >
              <i class="fa-brands fa-linkedin"></i>
            </a>

            <a
              className="darkText"
              href="src/assets/Jonathan_Vargas_Resume 04-04-2024.pdf"
              target="_blank"
            >
              <i class="fa-solid fa-file"></i>
            </a>
          </nav>
        </header>
      </div>
    </>
  );
}
