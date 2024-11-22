import * as React from "react";

const Layout = ({ children }) => {
  return (
    <>
      {children}
      <footer>
        <p>This is a test site.</p>
      </footer>
    </>
  );
};

export default Layout;
