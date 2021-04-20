import React from "react";
import Navbar from "./navbar";

const Layout: React.FunctionComponent = (props) => {
  const { children } = props;
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>{children}</main>
    </div>
  );
};

export default Layout;
