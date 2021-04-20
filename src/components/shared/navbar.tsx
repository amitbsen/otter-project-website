import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  const linkStyle =
    "ml-10 text-lg text-gray-500 hover:text-black transition-ll duration-300 ease-in-out";

  return (
    <nav className="container flex justify-between max-w-screen-lg py-3 font-sans px-10">
      <Link to={"/"}>
        <div className="font-bold text-3xl">zipline</div>
      </Link>

      <div className="pt-2">
        <Link className={linkStyle} to={"/initiatives"}>
          Initiatives
        </Link>
        <Link className={linkStyle} to={"/about"}>
          About
        </Link>
        <Link className={linkStyle} to={"/contact"}>
          Contact
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
