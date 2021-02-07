import React from "react";
import { Link } from "gatsby";

const Navbar = () => {
  return (
    <nav>
      <div>zipline</div>

      <div>
        <Link to={"solutions"}>Solutions</Link>
        <Link to={"solutions"}>How It Works</Link>
        <Link to={"solutions"}>Company</Link>
        <Link to={"solutions"}>Career</Link>
      </div>
    </nav>
  );
};

export default Navbar;
