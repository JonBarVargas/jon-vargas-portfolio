import React from "react";

export default function AboutCard() {
  return (
    <div className="aboutContainer darkText">
      <h3>A little about myself</h3>
      <p>
        I'm a software developer based in Saskatchewan. I like to absorb
        knowledge on a myriad of subjects. The various skills that I gained from
        my time at the University of Regina has helped me various roles in the
        software development cycle. Whether implementing a server function or
        testing different modules I bring a fresh experience to any product.
      </p>
      <p>
        When I'm not infront of my laptop I'm usually starting a new hobby. I'm
        Currently learning cardistry.
      </p>
      <p>
        Want to connect?{" "}
        <a href="mailto: jonathanbvargas@hotmail.com">Say hi anytime!</a> I'm
        always a message away.
      </p>
    </div>
  );
}
