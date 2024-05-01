import React from "react";

export default function NameCard() {
  return (
    <>
      <section className="nameCard">
        <div className="profilePicContainer">
          <img src="src/assets/profilePic.JPEG" />
        </div>
        <div className="introCard darkText">
          <h2>Jonathan Vargas</h2>
          <p>
            An entry level profressional that loves to code and collecting
            hobbies
          </p>
        </div>
      </section>
    </>
  );
}
