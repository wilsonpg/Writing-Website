import * as React from "react";
import type { HeadFC } from "gatsby";
import "bootstrap/dist/css/bootstrap.css";

const pageStyles = {
  backgroundColor: `black`,
  color: `white`,
  height: `100vh`,
  fontFamily: `-apple-system, Roboto, sans-serif, serif`,
};

const App = () =>
  <main style={pageStyles}>
    Coming soon!  Plan is to migrate my blog from Squarespace to Gatsby so I have more control over it.
  </main>;

export default App;

export const Head: HeadFC = () =>
  <title>
    React App
  </title>;
