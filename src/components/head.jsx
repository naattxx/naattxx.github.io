import * as React from "react";

export const BaseHead = ({ title, discription, children }) => (
  <>
    <meta charset="utf-8" />
    <meta name="author" content="naattxx" />
    <meta name="description" content={discription} />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>{title}</title>
    {children}
  </>
);
