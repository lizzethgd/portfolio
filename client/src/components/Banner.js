import React from "react";
import SocialLinks from "./SocialLinks";

const Banner = () => (
  <div className="row banner">
    <div className="banner-text">
      <h1 className="responsive-headline">I'm Lizzeth Garcia</h1>
      <h3>
        I'm a latin girl living in Helsinki  who likes to experiment with all kinds of code, with experience especially in <span>web programming</span> both <span>BackEnd</span> and <span>FrontEnd</span>, you can say that I am <span>FullStack</span> but of course I am not Senior.
        <a className="smoothscroll" href="#about">
          {" "}
          Start scrolling
        </a>{" "}
        and learn more
        <a className="smoothscroll" href="#about">
          {" "}
          about me
        </a>
      </h3>
      <hr />
      <SocialLinks />
    </div>
  </div>
);

export default Banner;
