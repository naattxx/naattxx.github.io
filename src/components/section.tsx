import * as React from "react";

const Section = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="m-4 rounded-sm bg-slate-100/80 p-3.5 shadow-md">
      {children}
    </section>
  );
};

export default Section;
