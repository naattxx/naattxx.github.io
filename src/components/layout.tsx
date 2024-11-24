import * as React from "react";

const Layout = ({ children }: {children: React.ReactNode}) => {
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
