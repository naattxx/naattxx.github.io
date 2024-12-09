import * as React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      {children}
      <footer className="fixed bottom-0 w-full border-t-2 border-solid border-white bg-black p-4 font-['Brush_Script_MT',cursive] text-white">
        <p>This is a test site.</p>
      </footer>
    </>
  );
};

export default Layout;
